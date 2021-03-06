# Debug Zero To Hero

* [Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging)
* [Easy profiling for Node.js Applications | Node.js](https://nodejs.org/en/docs/guides/simple-profiling/)
* [Tools and resources regarding Node.js and Performance Tools Integration · Issue #4 · thlorenz/v8-perf · GitHub](https://github.com/thlorenz/v8-perf/issues/4)
* [Node 调试工具入门教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2018/03/node-debugger.html)
### Performance Tool


### Network Analyser Tool

#### Wireshark

* [The Complete Wireshark Course: Beginner to Network Admin! - YouTube](https://www.youtube.com/watch?v=XTSc2mPF4II)
* [Wireshark Tutorial -  The Network Analyser - YouTube](https://www.youtube.com/watch?v=Yo8zGbCbqd0)
* [Wireshark 抓包分析实战 - YouTube](https://www.youtube.com/watch?v=QcapJPYUY58)

#### Fiddler

* [Fiddler - Free Web Debugging Proxy - Telerik](https://www.telerik.com/fiddler)
* [Configure Fiddler for iOS](http://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/ConfigureForiOS)
* [Configure Fiddler for Android / Google Nexus 7](http://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/ConfigureForAndroid)
* [fiddler 手机 https 抓包 - CSDN博客](https://blog.csdn.net/wangjun5159/article/details/52202059)
* [记一次 Node.js 应用内存暴涨分析 | Taobao FED | 淘宝前端团队](http://taobaofed.org/blog/2016/01/14/nodejs-memory-leak-analyze/)

### Mise

```
node --prof app.js
node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt 
```

### Keyword

* CPU profiler
* heap
* heapdump
* memwatch


### Q nad A

* node --prof 可以查看哪些函數調用次數多
* memwatch和heapdump獲得內存快照進行對比，查找內存溢出