package database

import (
	"youtubers/db"
	"youtubers/models"
)

type CategoryRepository struct {
}

func (r CategoryRepository) Get(filter *models.ChannelType) (models.ChannelType, bool) {
	var category models.ChannelType
	err := db.Conn.Where(filter).First(&category).RecordNotFound()

	return category, err
}

func (r CategoryRepository) Find(filter *models.ChannelType) []models.ChannelType {
	var categories []models.ChannelType
	db.Conn.
		Preload("Channels").
		Where(filter).Find(&categories)

	return categories
}
