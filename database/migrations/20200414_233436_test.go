package main

import (
	"github.com/astaxie/beego/migration"
)

// DO NOT MODIFY
type Test_20200414_233436 struct {
	migration.Migration
}

// DO NOT MODIFY
func init() {
	m := &Test_20200414_233436{}
	m.Created = "20200414_233436"

	migration.Register("Test_20200414_233436", m)
}

// Run the migrations
func (m *Test_20200414_233436) Up() {
	// use m.SQL("CREATE TABLE ...") to make schema update

}

// Reverse the migrations
func (m *Test_20200414_233436) Down() {
	// use m.SQL("DROP TABLE ...") to reverse schema update

}
