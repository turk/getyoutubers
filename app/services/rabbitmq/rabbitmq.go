package rabbitmq

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/streadway/amqp"
	"log"
)

type RabbitMQ struct {
	conn *amqp.Connection
	ch   *amqp.Channel
	err  error
}

func (r *RabbitMQ) Main() {
	r.conn, r.err = amqp.Dial(fmt.Sprintf("amqp://%s:%s@%s/", beego.AppConfig.String("rabbitmqUser"), beego.AppConfig.String("rabbitmqUser"), beego.AppConfig.String("rabbitmqHost")))
	failOnError(r.err, "Failed to connect to RabbitMQ")
}

func (r *RabbitMQ) UpdateChannel(channelID string) {
	r.Main()
	defer r.conn.Close()

	r.ch, r.err = r.conn.Channel()
	failOnError(r.err, "Failed to open a channel")
	defer r.ch.Close()

	var q amqp.Queue
	q, r.err = r.ch.QueueDeclare(
		"updateChannel", // name
		true,            // durable
		false,           // delete when unused
		false,           // exclusive
		false,           // no-wait
		nil,             // arguments
	)
	failOnError(r.err, "Failed to declare a queue")

	r.err = r.ch.Publish(
		"",     // exchange
		q.Name, // routing key
		false,  // mandatory
		false,  // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(channelID),
		})
	log.Printf(" [x] Sent %s", channelID)
	failOnError(r.err, "Failed to publish a message")
}

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}
