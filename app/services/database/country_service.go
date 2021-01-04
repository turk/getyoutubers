package database

import (
	"youtubers/app/repositories/database"
	"youtubers/models"
)

type CountryService struct {
}

func (s CountryService) GetAvailable() []models.Country {
	countries := database.CountryRepository{}.GetAvailable()

	return countries
}

func (s *CountryService) Get(filter models.Country) {

}
