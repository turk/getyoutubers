package database

import (
	"github.com/jinzhu/gorm"
	"youtubers/app/utilities"
	"youtubers/db"
	"youtubers/models"
)

type ChannelRepository struct {
}

func (repository ChannelRepository) UpdateChannel(channel *models.Channel) {
	db.Conn.Save(&channel)
}

func (repository ChannelRepository) List(filter *string, queryFilter *utilities.QueryFilter) ([]models.Channel, string) {
	var channels []models.Channel
	var pageName string

	country, err := CountryRepository{}.Get(&models.Country{Slug: *filter})

	if err == false {
		channels = repository.Find(&models.Channel{CountryID: country.ID}, queryFilter)
		pageName = country.Name
	}

	category, err := CategoryRepository{}.Get(&models.ChannelType{Slug: *filter})

	if err == false {
		channels = repository.Find(&models.Channel{ChannelTypeID: category.ID}, queryFilter)
		pageName = category.Name + " Category"

	}
	return channels, pageName
}

func (repository ChannelRepository) Find(filter *models.Channel, queryFilter *utilities.QueryFilter) []models.Channel {
	var channel []models.Channel
	query := db.Conn.Preload("ChannelType").Where(&filter).Order("subscriber_count desc")

	if queryFilter.Limit != 0 {
		query = query.Limit(queryFilter.Limit)
	}

	query.Find(&channel)

	return channel
}

func (repository ChannelRepository) Get(filter *models.Channel, relationships map[string]bool) models.Channel {
	var channel models.Channel
	db.Conn.Where(&filter).Preload("Country").Preload("ChannelType").Find(&channel)

	return channel
}

func (repository ChannelRepository) GetRandom() []models.Channel {
	var channels []models.Channel
	db.Conn.Order(gorm.Expr("random()")).Limit(45).Find(&channels)

	return channels
}

func (repository ChannelRepository) GetWithChannelStatistic(filter *models.Channel, relationships map[string]bool) models.Channel {
	var category models.Channel
	q := db.Conn.Where(&filter)
	q = q.Preload("Country")
	q = q.Preload("ChannelType")
	q = q.Preload("ChannelHistory", func(db *gorm.DB) *gorm.DB {
		return db.Order("channel_histories.date DESC").Limit(15)
	})
	q = q.Preload("Videos", func(db *gorm.DB) *gorm.DB {
		return db.Order("channel_videos.date DESC").Limit(50)
	})
	q = q.Find(&category)

	return category
}
