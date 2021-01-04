package database

import (
	"youtubers/app/repositories/database"
	"youtubers/models"
)

type CategoryService struct {
}

func (s CategoryService) Get() models.ChannelType {
	categories, _ := database.CategoryRepository{}.Get(&models.ChannelType{})

	return categories
}

func (s CategoryService) Find() []models.ChannelType {
	categories := database.CategoryRepository{}.Find(&models.ChannelType{})

	return categories
}

func (s CategoryService) GetAvailable() []models.ChannelType {
	var categories []models.ChannelType
	data := database.CategoryRepository{}.Find(&models.ChannelType{})

	for _, c := range data {
		if len(c.Channels) >= 25 {
			categories = append(categories, c)
		}
	}
	return categories
}
