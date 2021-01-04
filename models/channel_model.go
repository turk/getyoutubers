package models

import (
	"fmt"
	_ "github.com/astaxie/beego"
	"github.com/jinzhu/gorm"
	"youtubers/db"
)

type Channel struct {
	gorm.Model

	Name             string `gorm:"type:varchar(100);not null;"`
	ChannelID        string `gorm:"type:varchar(45);not null;unique;"`
	SubscriberCount  int64  `gorm:"type:integer;not null;default:0;"`
	ViewCount        int64  `gorm:"type:bigint;not null;default:0;"`
	UploadCount      int    `gorm:"type:int;not null;default:0;"`
	CountryID        uint   `gorm:"type:smallint;not null;default:0;"`
	ChannelTypeID    uint   `gorm:"type:varchar(25);not null;"`
	ChannelCreatedAt string `gorm:"type:varchar(25);not null;"`
	Avatar           string `gorm:"type:varchar(150);not null;"`
	Poster           string `gorm:"type:varchar;not null;"`

	Country        Country          `gorm:"PRELOAD:false"`
	ChannelType    ChannelType      `gorm:"PRELOAD:false"`
	ChannelHistory []ChannelHistory `gorm:"PRELOAD:false"`
	Videos         []ChannelVideo   `gorm:"PRELOAD:false"`
}

type ChannelLoads struct {
	Country        bool
	ChannelType    bool
	ChannelHistory bool
}

func init() {
	db.RegisterMigration(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
	db.RegisterModel(&Channel{})
}

func (c Channel) GetName() string {
	return c.Name
}

func (c Channel) GetChannelID() string {
	return c.ChannelID
}

func CreateChannel(channel *Channel) *Channel {

	if err := db.Conn.Create(&channel).Error; err != nil {
		fmt.Println(err)
	}
	return channel
}

func CreateOrUpdateChannel(channelID *Channel, channelData *Channel) Channel {
	var channel Channel
	if err := db.Conn.Where(channelID).Assign(channelData).FirstOrCreate(&channel).Error; err != nil {
		fmt.Println(err)
	}

	return channel
}

func GetChannel(filter *Channel) Channel {
	var channel Channel

	db.Conn.Preload("Country").Where(&filter).First(&channel)

	return channel
}

func GetAllChannel() []Channel {
	var channels []Channel
	db.Conn.Order("id asc").Find(&channels)

	return channels
}
