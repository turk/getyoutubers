package controllers

import (
	_ "github.com/PuerkitoBio/goquery"
	"youtubers/app/services/database"
	"youtubers/app/utilities"
)

type MainController struct {
	BaseController
}

func (c *MainController) Get() {
	c.Data["Channels"] = database.ChannelService{}.GetRandom()
	c.Data["Categories"] = database.CategoryService{}.GetAvailable()
	c.Data["Countries"] = database.CountryService{}.GetAvailable()

	c.Data["Meta"] = &utilities.Meta{
		Title:       "Daily Statistics of YouTube Channels - GetYoutubers",
		Description: "Analyze the daily progress of YouTube channels statistics and track Youtubers relevant data about subs count, total video views and more",
		Url:         "https://getyoutubers.com",
	}
	c.TplName = "index.gohtml"
}
