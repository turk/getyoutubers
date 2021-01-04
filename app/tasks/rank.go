package tasks

import (
	"github.com/astaxie/beego/toolbox"
	redisservice "youtubers/app/services/redis"
)

type RankTask struct {
}

func (task RankTask) Register() {
	rankTask := toolbox.NewTask("rankTask", "0 0 * * * *", func() error {
		redisservice.RedisRankService{}.CreateRank()
		return nil
	})

	toolbox.AddTask("rankTask", rankTask)
}
