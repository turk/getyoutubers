package routers

import (
	"github.com/astaxie/beego"
	"youtubers/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/channel/:channelID", &controllers.ChannelController{}, "get:GetChannel")
	beego.Router("/channel/:channelID/videos", &controllers.ChannelController{}, "get:GetChannelVideos")
	beego.Router("/channel/:channelID/similar", &controllers.ChannelController{}, "get:GetSimilarChannel")

	beego.Router("/channels/:slug", &controllers.ChannelController{}, "get:List")

	beego.Router("/api", &controllers.ApiController{}, "post:Create")
	beego.Router("/api/get-all-channels", &controllers.ApiController{}, "get:GetAllChannel")
	beego.Router("/api/create-channel-video", &controllers.ApiController{}, "post:CreateChannelVideo")

	beego.Router("/api/show-image", &controllers.ApiController{}, "get:ShowImage")

	beego.Router("/youtubers-sitemap/index", &controllers.SitemapController{}, "get:Index")
	beego.Router("/youtubers-sitemap/:page.xml", &controllers.SitemapController{}, "get:Page")
}
