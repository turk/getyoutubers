package main

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/toolbox"
	"github.com/jinzhu/gorm"
	"youtubers/app/tasks"
	"youtubers/app/utilities"
	"youtubers/controllers"
	"youtubers/db"
	_ "youtubers/models"
	_ "youtubers/routers"
)

func main() {

	conn := getDBConnection()
	registerTemplateFuncs()
	defer conn.Close()

	tasks.RankTask{}.Register()
	toolbox.StartTask()
	defer toolbox.StopTask()

	beego.Run()

}

func getDBConnection() *gorm.DB {

	beego.ErrorController(&controllers.ErrorController{})

	dbHost := beego.AppConfig.String("dbHost")
	dbUser := beego.AppConfig.String("dbUser")
	dbName := beego.AppConfig.String("dbName")
	dbPass := beego.AppConfig.String("dbPass")
	dbPort := beego.AppConfig.String("dbPort")

	conn, err := db.Connect(dbHost, dbPort, dbName, dbUser, dbPass)
	if err != nil {
		panic(err.Error())
	}
	if status, _ := beego.AppConfig.Bool("autoMigrate"); status {
		db.AutoMigrate()
	}
	return conn
}

func registerTemplateFuncs() {
	beego.AddFuncMap("inc", utilities.Inc)

}
