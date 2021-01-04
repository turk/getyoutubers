package utilities

import (
	"time"
)

func DiffHour(date time.Time) float64 {
	now := time.Now()
	diff := now.Sub(date)

	return diff.Hours()
}
