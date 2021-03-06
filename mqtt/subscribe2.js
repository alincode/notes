var mqtt = require('mqtt')

const options = {
  host: 'localhost',
  protocol: 'mqtt',
  will: {
    topic: 'lastWillTopic',
    payload: 'unexpected exit',
    qos: 2,
    retain: false,
  },
}

// var client = mqtt.connect('mqtt://localhost')
var client = mqtt.connect(options)

client.on('connect', function() {
  client.subscribe('hello', function(err) {
    if (!err) {
      // client.publish('hello', 'Hello mqtt')
    }
  })

  client.subscribe('lastWillTopic', function(err) {
    if (!err) {
      // client.publish('hello', 'Hello mqtt')
    }
  })
})

client.on('message', function(topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})
