package models

import (
	_ "github.com/astaxie/beego"
	"github.com/gosimple/slug"
	"github.com/jinzhu/gorm"
	"youtubers/db"
)

type ChannelType struct {
	gorm.Model
	Name   string `gorm:"type:varchar(50);not null;"`
	Slug   string `gorm:"type:varchar(65);not null;unique;"`
	Status int    `gorm:"type:smallint;not null;default:0;"`

	Channels []Channel `gorm:"PRELOAD:false"`
}

func init() {
	db.RegisterMigration(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
	db.RegisterModel(&ChannelType{})
}

func FindOrCreateChannelType(filter ChannelType) ChannelType {
	var ct ChannelType
	db.Conn.Where(filter).Attrs(ChannelType{Slug: slug.Make(filter.Name)}).FirstOrCreate(&ct)

	return ct
}
