package utilities

import (
	"strconv"
	"strings"
)

type Converter struct {
}

func FromAbbreviationToNumber(abbreviation string) int64 {

	var value int64

	switch {
	case strings.Contains(abbreviation, "B"):
		scString := strings.Replace(abbreviation, "B", "", -1)
		values := strings.Split(scString, ".")

		if len(values) == 1 {
			tmpCount, _ := strconv.Atoi(values[0])
			value = int64(tmpCount * 1000000000)
		} else {

			tmpCount1, _ := strconv.Atoi(values[0])
			tmpCount2, _ := strconv.Atoi(values[1])

			var multiplier int

			if len(values[1]) > 1 {
				multiplier = 10000000
			} else {
				multiplier = 100000000
			}
			value = int64(tmpCount1*1000000000) + int64(tmpCount2*multiplier)
		}
	case strings.Contains(abbreviation, "M"):
		scString := strings.Replace(abbreviation, "M", "", -1)
		values := strings.Split(scString, ".")

		if len(values) == 1 {
			tmpCount, _ := strconv.Atoi(values[0])
			value = int64(tmpCount * 1000000)
		} else {

			tmpCount1, _ := strconv.Atoi(values[0])
			tmpCount2, _ := strconv.Atoi(values[1])
			var multiplier int

			if len(values[1]) > 1 {
				multiplier = 10000
			} else {
				multiplier = 100000
			}

			value = int64(tmpCount1*1000000) + int64(tmpCount2*multiplier)
		}
	case strings.Contains(abbreviation, "K"):
		scString := strings.Replace(abbreviation, "K", "", -1)
		values := strings.Split(scString, ".")

		if len(values) == 1 {
			tmpCount, _ := strconv.Atoi(values[0])
			value = int64(tmpCount * 1000)
		} else {

			tmpCount1, _ := strconv.Atoi(values[0])
			tmpCount2, _ := strconv.Atoi(values[1])
			var multiplier int

			if len(values[1]) > 1 {
				multiplier = 10
			} else {
				multiplier = 100
			}

			value = int64(tmpCount1*1000) + int64(tmpCount2*multiplier)
		}
	default:
		tmpCount, _ := strconv.Atoi(abbreviation)
		value = int64(tmpCount)
	}

	return value

}
