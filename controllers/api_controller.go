package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
	"youtubers/app/utilities"
	"youtubers/models"
)

//  ChannelController operations for Channel
type ApiController struct {
	beego.Controller
}

func (c *ApiController) Create() {

	type Data struct {
		Name             string
		UploadCount      string
		ViewCount        string
		SubscribersCount string
		CountryCode      string
		CountryName      string
		ChannelType      string
		CreatedAt        string
		Avatar           string
		Background       string
		ChannelId        string
	}

	type Stat struct {
		Date            string
		SubscriberCount string
		ViewCount       string
	}

	type Video struct {
		ChannelID    string
		Date         string
		Title        string
		Link         string
		ViewCount    string
		Rating       string
		CommentCount string
	}

	type ChannelData struct {
		Data   Data
		Stats  []Stat
		Videos []Video
	}

	var channelData ChannelData

	json.Unmarshal(c.Ctx.Input.RequestBody, &channelData)

	var country = models.FindOrCreateCountry(models.Country{Name: channelData.Data.CountryName}, channelData.Data.CountryCode)
	var channelType = models.FindOrCreateChannelType(models.ChannelType{Name: channelData.Data.ChannelType})

	var viewCount = strings.Replace(channelData.Data.ViewCount, ",", "", -1)
	var viewCountInt int64
	viewCountInt, _ = strconv.ParseInt(viewCount, 10, 64)

	var uploadCount int
	uploadCount, _ = strconv.Atoi(strings.Replace(channelData.Data.UploadCount, ",", "", -1))

	var newChannel = &models.Channel{
		Name:             channelData.Data.Name,
		SubscriberCount:  utilities.FromAbbreviationToNumber(channelData.Data.SubscribersCount),
		ViewCount:        viewCountInt,
		UploadCount:      uploadCount,
		CountryID:        country.ID,
		ChannelTypeID:    channelType.ID,
		ChannelCreatedAt: channelData.Data.CreatedAt,
		Avatar:           channelData.Data.Avatar,
		Poster:           channelData.Data.Background,
	}

	result := models.CreateOrUpdateChannel(&models.Channel{ChannelID: channelData.Data.ChannelId}, newChannel)
	for _, stat := range channelData.Stats {
		stat.ViewCount = strings.Replace(stat.ViewCount, ",", "", -1)
		viewCount, _ := strconv.Atoi(stat.ViewCount)

		models.CreateHistory(
			&models.ChannelHistory{
				ChannelID: result.ID,
				Date:      stat.Date},
			&models.ChannelHistory{
				SubscriberCount: utilities.FromAbbreviationToNumber(stat.SubscriberCount),
				ViewCount:       int64(viewCount)},
		)
	}

	for _, video := range channelData.Videos {
		models.ChannelVideo{}.CreateChannelVideo(
			models.ChannelVideo{
				ChannelID: result.ID,
				Date:      video.Date,
				Title:     video.Title,
				Link:      video.Link,
			},
			models.ChannelVideo{
				ViewCount:    utilities.FromAbbreviationToNumber(video.ViewCount),
				CommentCount: int(utilities.FromAbbreviationToNumber(video.CommentCount)),
				Rating:       video.Rating,
			},
		)

	}

	c.ServeJSON()

}

func (c ApiController) GetAllChannel() {
	c.Data["json"] = models.GetAllChannel()

	c.ServeJSON()
}

func (c ApiController) CreateChannelVideo() {

	type VideoData struct {
		ChannelID    string
		Date         string
		Title        string
		Link         string
		ViewCount    string
		Rating       string
		CommentCount string
	}
	var videoData VideoData

	json.Unmarshal(c.Ctx.Input.RequestBody, &videoData)

	channel := models.GetChannel(&models.Channel{ChannelID: videoData.ChannelID})

	models.ChannelVideo{}.CreateChannelVideo(
		models.ChannelVideo{
			ChannelID: channel.ID,
			Date:      videoData.Date,
			Title:     videoData.Title,
		},
		models.ChannelVideo{
			ViewCount:    utilities.FromAbbreviationToNumber(videoData.ViewCount),
			CommentCount: int(utilities.FromAbbreviationToNumber(videoData.CommentCount)),
			Rating:       videoData.Rating,
		},
	)

	c.ServeJSON()

}

func (c ApiController) ShowImage() {

	c.Ctx.Output.ContentType("image/png")

	res, err := http.Get(c.GetString("url"))

	if err != nil {
		fmt.Println(err)
	}

	if res.Header.Get("Content-Type") != "image/jpeg" {
		c.Abort("404")
	}
	robots, err := ioutil.ReadAll(res.Body)
	c.Ctx.Output.Body(robots)
}
