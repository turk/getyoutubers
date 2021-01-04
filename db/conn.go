package db

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var Conn *gorm.DB

func Connect(host string, port string, database string, user string, pass string) (db *gorm.DB, err error) {
	dbConnString := fmt.Sprintf("host=%s port=%s user=%s dbname=%s sslmode=disable password=%s", host, port, user, database, pass)
	db, err = gorm.Open("postgres", dbConnString)
	Conn = db
	return
}
