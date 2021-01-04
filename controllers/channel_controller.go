package controllers

import (
	"github.com/astaxie/beego"
	"youtubers/app/services/database"
	"youtubers/app/utilities"
	"youtubers/models"
)

type ChannelController struct {
	BaseController
}

func (c *ChannelController) List() {
	slug := c.Ctx.Input.Param(":slug")
	channels, pageName := database.ChannelService{}.List(&slug, &utilities.QueryFilter{Limit: 50})
	url := beego.AppConfig.String("appUrl") + beego.URLFor("ChannelController.List", ":slug", slug)

	if len(channels) == 0 {
		c.Abort("404")
	}
	c.Data["Meta"] = &utilities.Meta{
		Title:       "Top Youtube Channels in " + pageName,
		Description: "List of top YouTube Channels in " + pageName + ". Find the most popular Youtubers by subscribers, total views or video count.",
		Url:         url,
	}
	c.Data["PageName"] = pageName
	c.Data["Channels"] = channels
	c.TplName = "channel/list.gohtml"
}

func (c *ChannelController) GetChannel() {
	filter := models.Channel{ChannelID: c.Ctx.Input.Param(":channelID")}
	stats := map[string]bool{"History": true}

	channel := database.ChannelService{}.GetWithChannelStatistic(filter, stats)

	if channel.Name == "" {
		c.Abort("404")
	}

	url := beego.AppConfig.String("appUrl") + beego.URLFor("ChannelController.GetChannel", ":channelID", channel.ChannelID)

	c.Data["Meta"] = &utilities.Meta{
		Title:       channel.Name + " YouTube Channel Statistics Overview",
		Description: "Track " + channel.Name + "'s YouTube channel statistics about daily growth of subscribers, net worth and videos views with progress charts on overview.",
		Url:         url,
		Image:       channel.Avatar,
	}
	c.Data["Channel"] = channel
	c.Layout = "layouts/app.gohtml"
	c.TplName = "channel/show.gohtml"
}

func (c *ChannelController) GetChannelVideos() {
	filter := models.Channel{ChannelID: c.Ctx.Input.Param(":channelID")}
	stats := map[string]bool{"Video": true}

	channel := database.ChannelService{}.GetWithChannelStatistic(filter, stats)

	url := beego.AppConfig.String("appUrl") + beego.URLFor("ChannelController.GetChannelVideos", ":channelID", channel.ChannelID)

	c.Data["Meta"] = &utilities.Meta{
		Title:       channel.Name + " Latest Youtube Videos Statistics",
		Description: "Check " + channel.Name + " Youtube channel's latest videos statistics. Get more information about views, comments, earnings and likes rating per video.",
		Url:         url,
		Image:       channel.Avatar,
	}
	c.Data["Channel"] = channel
	c.Layout = "layouts/app.gohtml"
	c.TplName = "channel/videos.gohtml"

}

func (c *ChannelController) GetSimilarChannel() {
	filter := models.Channel{ChannelID: c.Ctx.Input.Param(":channelID")}
	stats := map[string]bool{}

	channel := database.ChannelService{}.Get(filter, stats)
	channels := database.ChannelService{}.Find(
		models.Channel{ChannelTypeID: channel.Type.ID},
		utilities.QueryFilter{
			Limit: 63,
		},
	)

	url := beego.AppConfig.String("appUrl") + beego.URLFor("ChannelController.GetChannelVideos", ":channelID", channel.ChannelID)

	c.Data["Meta"] = &utilities.Meta{
		Title:       "Discover Other Youtube Channels Similar to " + channel.Name,
		Description: "Discover other channels and youtubers on YouTube similar to " + channel.Name + "'s YouTube Channel by content, category or country.",
		Url:         url,
		Image:       channel.Avatar,
	}
	c.Data["Channel"] = channel
	c.Data["Channels"] = channels
	c.Layout = "layouts/app.gohtml"
	c.TplName = "channel/similar.gohtml"

}
