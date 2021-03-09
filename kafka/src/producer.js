import Kafka from 'kafka-node'
import axios from 'axios'

const cityID = '3873544'
const units = 'metric'
const apiKey = '03d66c99db3b3579cbae1e79fc8244a4' //'a986c1c4b173250916b25fc2a64e42cd'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=${units}&appid=${apiKey}`

export async function produce() {
  let client = new Kafka.KafkaClient({ kafkaHost: 'broker:29092' })

  const response = await axios.get(apiURL)
  const {
    name,
    dt // timestamp
  } = response.data

  const {
    temp
  } = response.data.main


  let rawData = {"city": name ,"temp": temp, "timestamp": dt}
  let jsonData = JSON.stringify(rawData)

  let producer = new Kafka.Producer(client,  { requireAcks: 1 }),
    payloads = [
      { topic: 'Temperature.events', messages: jsonData, partition: 0}
    ];
  producer.on('ready', function () {
    console.log('Productor listo')
  });
  producer.on('error', function (err) {
    console.log(err)
  })

  producer.send(payloads, function (err, data) {
    console.log("Productor: ",payloads, data)
  });
}

export default produce