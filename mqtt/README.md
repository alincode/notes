# MQTT Sandbox

* [MQTT](http://mqtt.org/)

### broker 框架

* [VerneMQ](https://vernemq.com/)
* [Eclipse Mosquitto](https://mosquitto.org/)
* Moquette
* emqttd

<https://github.com/mqtt/mqtt.github.io/wiki/servers>

### 概念

* broker： 類似於代理人的角色，負責轉送訊息
* publisher ：類似出版者，負責發送訊息
* subscriber：類似訂閱者，負責接收訊息

### 在 Mac 安裝本機端 MQTT Boker

```sh
brew install mosquitto
brew services start mosquitto
brew services stop mosquitto
lsof -i -n -P | grep 1883
```

```
==> mosquitto
mosquitto has been installed with a default configuration file.
You can make changes to the configuration by editing:
    /usr/local/etc/mosquitto/mosquitto.conf

To have launchd start mosquitto now and restart at login:
  brew services start mosquitto
Or, if you don't want/need a background service you can just run:
  mosquitto -c /usr/local/etc/mosquitto/mosquitto.conf
```

### 安裝 mqtt client

* [GitHub](https://github.com/mqttjs/MQTT.js)

```
npm install mqtt -g
```

### 測試接收

```
mqtt sub -t 'hello' -h 'localhost' -v
```

```
Usage: mqtt subscribe [opts] [topic]

Available options:

  -h/--hostname HOST    the broker host
  -p/--port PORT        the broker port
  -i/--client-id ID     the client id
  -q/--qos 0/1/2        the QoS of the message
  --no-clean            do not discard any pending message for
                        the given id
  -t/--topic TOPIC      the message topic
  -k/--keepalive SEC    send a ping every SEC seconds
  -u/--username USER    the username
  -P/--password PASS    the password
  -l/--protocol PROTO   the protocol to use, 'mqtt',
                        'mqtts', 'ws' or 'wss'
  --key PATH            path to the key file
  --cert PATH           path to the cert file
  --ca PATH             path to the ca certificate
  --insecure            do not verify the server certificate
  --will-topic TOPIC    the will topic
  --will-message BODY   the will message
  --will-qos 0/1/2      the will qos
  --will-retain         send a will retained message
  -v/--verbose          print the topic before the message
  -H/--help             show this
```

### 測試發送

```
mqtt pub -t 'hello' -h 'localhost' -m 'from MQTT.js'
```

```
Usage: mqtt publish [opts] topic [message]

Available options:

  -h/--hostname HOST    the broker host
  -p/--port PORT        the broker port
  -i/--client-id ID     the client id
  -q/--qos 0/1/2        the QoS of the message
  -t/--topic TOPIC      the message topic
  -m/--message MSG      the message body
  -r/--retain           send a retained message
  -s/--stdin            read the message body from stdin
  -M/--multiline        read lines from stdin as multiple messages
  -u/--username USER    the username
  -P/--password PASS    the password
  -C/--protocol PROTO   the protocol to use, 'mqtt',
                        'mqtts', 'ws' or 'wss'
  --key PATH            path to the key file
  --cert PATH           path to the cert file
  --ca PATH             path to the ca certificate
  --insecure            do not verify the server certificate
  --will-topic TOPIC    the will topic
  --will-payload BODY   the will message
  --will-qos 0/1/2      the will qos
  --will-retain         send a will retained message
  -H/--help             show this
  ```

### how QoS works:

* QoS 0 : received at most once : The packet is sent, and that's it. There is no validation about whether it has been received.
* QoS 1 : received at least once : The packet is sent and stored as long as the client has not received a confirmation from the server. MQTT ensures that it will be received, but there can be duplicates.
* QoS 2 : received exactly once : Same as QoS 1 but there is no duplicates.

About data consumption, obviously, QoS 2 > QoS 1 > QoS 0, if that's a concern to you.

### test env or tool

* [MQTTBox](https://chrome.google.com/webstore/detail/mqttbox/kaajoficamnjijhkeomgfljpicifbkaf/)
  * [MQTTBox | github](https://github.com/workswithweb/MQTTBox)
* [test.mosquitto.org](http://test.mosquitto.org/)

### English more

* [MQTT Essentials Part 9: Last Will and Testament](https://www.hivemq.com/blog/mqtt-essentials-part-9-last-will-and-testament/)
* [MQTT Essentials Part 10: Keep Alive and Client Take-Over](https://www.hivemq.com/blog/mqtt-essentials-part-10-alive-client-take-over/)

### Chineses more

* [Benchmark of MQTT servers.pdf](http://www.scalagent.com/IMG/pdf/Benchmark_MQTT_servers-v1-1.pdf)
* [Introduction · MQTT协议中文版](https://mcxiaoke.gitbooks.io/mqtt-cn/content/)
* [MQTT笔记](https://wbuntu.com/p/1118/)
* [MQTT协议笔记之头部信息](http://www.blogjava.net/yongboy/archive/2014/02/07/409587.html)
* [MQTT协议笔记之消息流](http://www.blogjava.net/yongboy/archive/2014/02/15/409893.html)
* [MQTT协议笔记之连接和心跳](http://www.blogjava.net/yongboy/archive/2014/02/09/409630.html)
* [MQTT入门（8）](https://rensanning.iteye.com/blog/2406770)