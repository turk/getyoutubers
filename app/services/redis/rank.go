package redisservice

import (
	"sort"
	"strconv"
	"youtubers/app/repositories/redis"
	"youtubers/app/services/database"
	"youtubers/app/utilities"
	"youtubers/models"
)

type RedisRankService struct {
}

func (s RedisRankService) CreateRank() {
	channels := database.ChannelService{}.Find(models.Channel{}, utilities.QueryFilter{})
	redisRepository := redis.ChannelRedisRepository{}

	sort.SliceStable(channels, func(i, j int) bool {
		return channels[i].SubscriberCount > channels[j].SubscriberCount
	})

	for i, c := range channels {
		redisRepository.HSet(strconv.Itoa(int(c.ID)), "SubscriberRank", i+1)
	}

	sort.SliceStable(channels, func(i, j int) bool {
		return channels[i].ViewCount > channels[j].ViewCount
	})

	for i, c := range channels {
		redisRepository.HSet(strconv.Itoa(int(c.ID)), "ViewRank", i+1)
	}
}
