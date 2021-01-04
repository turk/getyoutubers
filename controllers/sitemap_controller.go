package controllers

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/snabb/sitemap"
	"strconv"
	"youtubers/db"
	"youtubers/models"
)

type SitemapController struct {
	beego.Controller
}

func (controller *SitemapController) Index() {
	smi := sitemap.NewSitemapIndex()
	site := beego.AppConfig.String("appUrl")

	for i := 0; i <= 10; i++ {
		smi.Add(&sitemap.URL{
			Loc: fmt.Sprintf("%s/youtubers-sitemap/%d.xml", site, i),
		})
	}

	controller.Data["xml"] = smi
	controller.ServeXML()
}

func (controller *SitemapController) Page() {
	page := controller.Ctx.Input.Param(":page")
	start, _ := strconv.Atoi(page)

	startCount := start * 5000

	endCount := 5000
	sm := sitemap.New()

	var channels []models.Channel
	db.Conn.Offset(startCount).Limit(endCount).Find(&channels)
	site := beego.AppConfig.String("appUrl")
	for _, c := range channels {
		sm.Add(&sitemap.URL{
			Loc:        site + beego.URLFor("ChannelController.GetChannel", ":channelID", c.ChannelID),
			LastMod:    &c.UpdatedAt,
			ChangeFreq: sitemap.Daily,
		})
	}

	controller.Data["xml"] = sm
	controller.ServeXML()
}
