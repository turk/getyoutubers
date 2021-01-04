package models

import (
	"fmt"
	_ "github.com/astaxie/beego"
	"github.com/jinzhu/gorm"
	"youtubers/db"
)

type ChannelHistory struct {
	gorm.Model
	ChannelID       uint   `gorm:"type:int;not null;unique_index:idx_channel_id_date;"`
	Date            string `gorm:"type:date;not null;unique_index:idx_channel_id_date;"`
	SubscriberCount int64  `gorm:"type:int;"`

	ViewCount int64 `gorm:"type:bigint;"`
}

func init() {
	db.RegisterMigration(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
	db.RegisterModel(&ChannelHistory{})
}

func CreateHistory(idAndDate *ChannelHistory, counts *ChannelHistory) {
	var history ChannelHistory
	if err := db.Conn.Where(idAndDate).Assign(counts).FirstOrCreate(&history).Error; err != nil {
		fmt.Println(err)
	}
}
