import Kafka from 'kafka-node'
import Temperature from './schemas/temperature.js'

export function consume() {
  var Consumer = Kafka.Consumer,
    client = new Kafka.KafkaClient({ kafkaHost: 'broker:29092' }),
    consumer = new Consumer(
      client,
      [
        { topic: 'Temperature.events', partition: 0 }
      ],
      {
        autoCommit: true
      }
    );

  consumer.on('message', function (message) {
    const tempData = JSON.parse(message.value)
    const temperature = Temperature.create(tempData)
    console.log("Consumer: ",tempData);

    consumer.pause()
  });
}

export default consume