package database

import (
	"youtubers/db"
	"youtubers/models"
)

type CountryRepository struct {
}

func (r CountryRepository) Get(filter *models.Country) (models.Country, bool) {
	var country models.Country
	err := db.Conn.Where(filter).First(&country).RecordNotFound()

	return country, err
}

func (r CountryRepository) GetAvailable() []models.Country {
	var countries []models.Country
	db.Conn.
		Select("DISTINCT countries.*").
		Joins("inner join channels on countries.id = channels.country_id").
		Where("countries.name <> ?", "null").
		Group("channels.country_id, countries.id").
		Having("count(channels.country_id) > ?", 25).
		Find(&countries)

	return countries
}
