package models

import (
	_ "github.com/astaxie/beego"
	"github.com/gosimple/slug"
	"github.com/jinzhu/gorm"
	"youtubers/db"
)

type Country struct {
	gorm.Model
	Name      string `gorm:"type:varchar(50);not null;"`
	Slug      string `gorm:"type:varchar(65);not null;unique;"`
	ShortCode string `gorm:"type:varchar(3);not null;unique;"`

	Channels []Channel `gorm:"PRELOAD:false"`
}

func init() {
	db.RegisterMigration(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
	db.RegisterModel(&Country{})
}

func GetOneCountry(filter Country) (Country, error) {
	var country Country
	err := db.Conn.Where(filter).First(&country).Error

	return country, err
}

func FindOrCreateCountry(filter Country, countryCode string) Country {
	var country Country
	db.Conn.Where(filter).Attrs(Country{ShortCode: countryCode, Slug: slug.Make(filter.Name)}).FirstOrCreate(&country)

	return country
}
