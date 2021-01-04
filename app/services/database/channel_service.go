package database

import (
	"fmt"
	"github.com/dustin/go-humanize"
	"sort"
	"time"
	"youtubers/app/repositories/database"
	"youtubers/app/repositories/redis"
	"youtubers/app/services/rabbitmq"
	utilities "youtubers/app/utilities"
	"youtubers/models"
)

type ChannelService struct {
}

type ChannelData struct {
	Name                string
	ChannelID           string
	SubscriberCount     string
	SubscriberRank      string
	ViewCount           string
	ViewRank            string
	UploadCount         string
	ChannelCreatedAt    string
	Avatar              string
	Poster              string
	Country             Country
	Type                Type
	History             []History
	Videos              []Video
	SubscriberHistories []SubscriberHistory
}

type Type struct {
	ID   uint
	Name string
	Slug string
}

type Country struct {
	Name      string
	ShortCode string
	Slug      string
}

type History struct {
	Date               string
	SubscriberCount    string
	SubscriberCountRaw int64
	SubscriberDiff     string
	ViewCount          string
	ViewCountRaw       int64
	ViewDiff           string
	Earnings           string
}

type Video struct {
	Date         string
	Title        string
	ViewCount    string
	CommentCount string
	Rating       string
	Earnings     string
}

type SubscriberHistory struct {
	Date            string
	SubscriberCount int64
}

func (service ChannelService) List(filter *string, queryFilter *utilities.QueryFilter) ([]ChannelData, string) {
	var channels []ChannelData

	ch, pageName := database.ChannelRepository{}.List(filter, queryFilter)

	for _, c := range ch {
		channel := ChannelData{
			Name:             c.Name,
			ChannelID:        c.ChannelID,
			SubscriberCount:  humanize.Comma(c.SubscriberCount),
			ViewCount:        humanize.Comma(c.ViewCount),
			UploadCount:      humanize.Comma(int64(c.UploadCount)),
			ChannelCreatedAt: c.ChannelCreatedAt,
			Avatar:           c.Avatar,
			Type: Type{
				Name: c.ChannelType.Name,
				Slug: c.ChannelType.Slug,
			},
		}

		channels = append(channels, channel)
	}

	return channels, pageName

}

func (service ChannelService) Find(filter models.Channel, queryFilter utilities.QueryFilter) []models.Channel {
	channels := database.ChannelRepository{}.Find(&filter, &queryFilter)

	return channels
}

func (service ChannelService) Get(filter models.Channel, stats map[string]bool) ChannelData {
	channel := database.ChannelRepository{}.Get(&filter, stats)

	return ChannelData{
		Name:             channel.Name,
		ChannelID:        channel.ChannelID,
		SubscriberCount:  humanize.Comma(channel.SubscriberCount),
		ViewCount:        humanize.Comma(channel.ViewCount),
		UploadCount:      humanize.Comma(int64(channel.UploadCount)),
		ChannelCreatedAt: channel.ChannelCreatedAt,
		Avatar:           channel.Avatar,
		Poster:           channel.Poster,
		Country: Country{
			Name:      channel.Country.Name,
			ShortCode: channel.Country.ShortCode,
		},
		Type: Type{
			ID:   channel.ChannelType.ID,
			Name: channel.ChannelType.Name,
			Slug: channel.ChannelType.Slug,
		},
	}
}

func (service ChannelService) GetWithChannelStatistic(filter models.Channel, stats map[string]bool) ChannelData {
	channel := database.ChannelRepository{}.GetWithChannelStatistic(&filter, stats)
	var videos []Video
	var histories []History
	var subscriberHistories []SubscriberHistory

	if utilities.DiffHour(channel.UpdatedAt) >= 24 {
		channel.UpdatedAt = time.Now()
		database.ChannelRepository{}.UpdateChannel(&channel)
		mq := rabbitmq.RabbitMQ{}
		mq.UpdateChannel(channel.ChannelID)
	}

	sort.SliceStable(channel.ChannelHistory, func(i, j int) bool {
		return channel.ChannelHistory[i].Date < channel.ChannelHistory[j].Date
	})

	if stats["History"] == true {
		for i, h := range channel.ChannelHistory {
			var history History
			var subscriberDiff int64
			var viewDiff int64
			var minEarning string
			var maxEarning string

			if i != 0 {
				subscriberDiff = h.SubscriberCount - channel.ChannelHistory[i-1].SubscriberCount
				viewDiff = h.ViewCount - channel.ChannelHistory[i-1].ViewCount
				minEarning = humanize.Comma(int64(float64(viewDiff/1000) * 0.20))
				maxEarning = humanize.Comma(int64(float64(viewDiff/1000) * 3))
			}

			date, _ := time.Parse(time.RFC3339, h.Date)
			history.SubscriberCount = humanize.Comma(h.SubscriberCount)
			history.SubscriberCountRaw = h.SubscriberCount
			history.SubscriberDiff = humanize.Comma(subscriberDiff)
			history.ViewCount = humanize.Comma(h.ViewCount)
			history.ViewCountRaw = h.ViewCount
			history.ViewDiff = humanize.Comma(viewDiff)
			history.Date = date.Format("2006-01-02")
			history.Earnings = fmt.Sprintf("$%s  -  $%s", minEarning, maxEarning)
			histories = append(histories, history)
		}

		for _, h := range channel.ChannelHistory {
			var subscriberHistory SubscriberHistory
			subscriberHistory.Date = h.Date[0:10]
			subscriberHistory.SubscriberCount = h.SubscriberCount
			subscriberHistories = append(subscriberHistories, subscriberHistory)

		}
	}

	if stats["Video"] == true {
		for _, h := range channel.Videos {
			var video Video
			var minEarning string
			var maxEarning string

			minEarning = humanize.Comma(int64(float64(h.ViewCount/1000) * 0.20))
			maxEarning = humanize.Comma(int64(float64(h.ViewCount/1000) * 3))

			date, _ := time.Parse(time.RFC3339, h.Date)
			video.Date = date.Format("2006-01-02")
			video.Title = h.Title
			video.ViewCount = humanize.Comma(h.ViewCount)
			video.CommentCount = humanize.Comma(int64(h.CommentCount))
			video.Rating = h.Rating
			video.Earnings = fmt.Sprintf("$%s  -  $%s", minEarning, maxEarning)
			videos = append(videos, video)
		}
	}

	repository := redis.ChannelRedisRepository{}
	data := ChannelData{
		Name:             channel.Name,
		ChannelID:        channel.ChannelID,
		SubscriberCount:  humanize.Comma(channel.SubscriberCount),
		SubscriberRank:   repository.HGet(fmt.Sprintf("channel:%d", channel.ID), "SubscriberRank"),
		ViewCount:        humanize.Comma(channel.ViewCount),
		ViewRank:         repository.HGet(fmt.Sprintf("channel:%d", channel.ID), "ViewRank"),
		UploadCount:      humanize.Comma(int64(channel.UploadCount)),
		ChannelCreatedAt: channel.ChannelCreatedAt,
		Avatar:           channel.Avatar,
		Poster:           channel.Poster,
		Country: Country{
			Name:      channel.Country.Name,
			ShortCode: channel.Country.ShortCode,
			Slug:      channel.Country.Slug,
		},
		Type: Type{
			Name: channel.ChannelType.Name,
			Slug: channel.ChannelType.Slug,
		},
		History:             histories,
		Videos:              videos,
		SubscriberHistories: subscriberHistories,
	}

	return data

}

func (service ChannelService) GetRandom() []models.Channel {
	channel := database.ChannelRepository{}.GetRandom()

	return channel
}
