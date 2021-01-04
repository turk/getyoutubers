package models

import (
	"fmt"
	_ "github.com/astaxie/beego"
	"github.com/jinzhu/gorm"
	"youtubers/db"
)

type ChannelVideo struct {
	gorm.Model
	ChannelID    uint   `gorm:"type:int;not null;unique_index:idx_channel_id_date_title;"`
	Date         string `gorm:"type:date;not null;unique_index:idx_channel_id_date_title;"`
	Title        string `gorm:"type:varchar(100);not null;unique_index:idx_channel_id_date_title;"`
	Link         string `gorm:"type:varchar(75);null;unique;"`
	ViewCount    int64  `gorm:"type:bigint;not null;default:0;"`
	CommentCount int    `gorm:"type:int;not null;default:0;"`
	Rating       string `gorm:"type:decimal(5,2);not null;default:0;"`
}

func init() {
	db.RegisterMigration(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
	db.RegisterModel(&ChannelVideo{})
}

func (cv ChannelVideo) CreateChannelVideo(filter ChannelVideo, data ChannelVideo) {
	var video ChannelVideo
	if err := db.Conn.Where(filter).Assign(data).FirstOrCreate(&video).Error; err != nil {
		fmt.Println(err)
	}
}
