# Javascript Zero to Hero

* [npm trends: Compare NPM package downloads](https://www.npmtrends.com/)
* [stephentian/33-js-concepts](https://github.com/stephentian/33-js-concepts)
* [30 seconds of code](https://30secondsofcode.org/)
* [[學習筆記目錄] JS30 系列文章](https://pjchender.blogspot.tw/2017/06/js30.html)
* [[學習筆記目錄] JavaScript: Understanding the Weird Part（JavaScript 全攻略：克服JS 的奇怪部分）](https://pjchender.blogspot.tw/2017/06/javascript-understanding-weird-part.html)

### theory / principle
* [A crash course in memory management – Mozilla Hacks](https://hacks.mozilla.org/2017/06/a-crash-course-in-memory-management/)
* [A cartoon intro to ArrayBuffers and SharedArrayBuffers – Mozilla Hacks](https://hacks.mozilla.org/2017/06/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/)
* [Avoiding race conditions in SharedArrayBuffers with Atomics – Mozilla Hacks](https://hacks.mozilla.org/2017/06/avoiding-race-conditions-in-sharedarraybuffers-with-atomics/)

### managing projects

* [lerna](https://lernajs.io): A tool for managing JavaScript projects with multiple packages.
    * [Lerna Tutorial -  Managing Monorepos with Lerna](http://opensourceforgeeks.blogspot.com/2018/10/lerna-tutorial-managing-monorepos-with.html)
    * [Lerna Tutorial - Managing Monorepos with Lerna - YouTube](https://www.youtube.com/watch?v=Nn8G91x8tJI)

### IndexedDB

* [IndexedDB 基礎概念](https://developer.mozilla.org/zh-TW/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB)
* [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)

### Repo

* [GitHub - i0natan/nodebestpractices](https://github.com/i0natan/nodebestpractices): The largest Node.JS best practices list. Curated from the top ranked articles and always updated
* [GitHub - nefe/You-Dont-Need-jQuery](https://github.com/nefe/You-Dont-Need-jQuery): Examples of how to do query, style, dom, ajax, event etc like jQuery with plain javascript.
* [GitHub - micromata/awesome-javascript-learning: A tiny list limited to the best JavaScript Learning Resources](https://github.com/micromata/awesome-javascript-learning)
* [GitHub - iangilman/learning-javascript: Helpful information for learning JavaScript.](https://github.com/iangilman/learning-javascript)
* [GitHub - paddingme/Learning-JavaScript: 学 JavaScript 的历程](https://github.com/paddingme/Learning-JavaScript)
[GitHub - ShanaMaid/frontend-guidelines-zh-CN: 前端指南汉化版](https://github.com/ShanaMaid/frontend-guidelines-zh-CN)

### useful plugin

* [slick - the last carousel you'll ever need](http://kenwheeler.github.io/slick/)

### hell

#### async / await

* [如何避免async/await地狱 - 众成翻译](https://www.zcfy.cc/article/how-to-escape-async-await-hell)

### Resource

#### Video

* [List of Youtube Channels for a JavaScript Developer](https://vladimirponomarev.com/blog/youtube-channels-for-a-javascript-developer)

#### Ebook

* [Exploring JS: JavaScript books for programmers](http://exploringjs.com/)
* [Professor Frisby’s mostly Adequate Guide to Functional Programming](https://jigsawye.gitbooks.io/mostly-adequate-guide/content/)

## Promise

* controll flow
* chaining promises
* Promise.all
* Promise.race

* [Promise.promisifyAll | bluebird](http://bluebirdjs.com/docs/api/promise.promisifyall.html)

```js
var fs = Promise.promisifyAll(require("fs"));
fs.readFileAsync("myfile.js", "utf8").then(function(contents) {
    console.log(contents);
}).catch(function(e) {
    console.error(e.stack);
});
```

### Video

* [Workping with Promise](https://www.youtube.com/watch?v=CqTGssuLftE)

### Ebook

* [JavaScript Promise迷你书（中文版）](http://liubin.org/promises-book/)

## Framework

### Vanilla JS

* [Vanilla JS](http://vanilla-js.com/)

### Jest
* [Getting Started · Jest](https://jestjs.io/docs/en/getting-started)
* [Jest Crash Course - Unit Testing in JavaScript - YouTube](https://www.youtube.com/watch?v=7r4xVDI2vho)