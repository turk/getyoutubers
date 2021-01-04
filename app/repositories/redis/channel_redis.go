package redis

import (
	"fmt"
	//"fmt"
	"github.com/astaxie/beego"
	"github.com/go-redis/redis"
)

type ChannelRedisRepository struct {
	SubscriberRank int
	ViewRank       int
	CountryRank    int
	CategoryRank   int
}

const KEY string = "channel:%s"

func (repository *ChannelRedisRepository) Connect() (*redis.Client, *redis.Client) {
	client := redis.NewClient(&redis.Options{
		Addr:     beego.AppConfig.String("redisHost"),
		Password: beego.AppConfig.String("redisPass"), // no password set
		DB:       0,                                   // use default DB
	})

	return client, nil
}

func (repository *ChannelRedisRepository) HSet(key, field string, value interface{}) bool {

	connection, _ := repository.Connect()
	_, err := connection.HSet(fmt.Sprintf(KEY, key), field, value).Result()

	if err != nil {
		fmt.Println(err)
	}
	defer connection.Close()
	return true
}

func (repository *ChannelRedisRepository) HGet(key string, field string) string {
	connection, _ := repository.Connect()
	res, err := connection.HGet(key, field).Result()

	if err != nil {
		fmt.Println(err)
	}

	return res
}
