# yarn workspaces example

```
yarn init -y
```

### 設定 workspace root

package.js

```json
{
  "name": "yarn-workspaces-example",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "workspaces": ["app-api-server", "app-socket-server", "app-core"]
}
```

### 建立 app-core

```
mkdir app-core
touch app-core/index.js
touch app-core/package.js
```

編輯 app-core/index.js 檔

```js
function hello() {
  return 'Hello World'
}

module.exports = {
  hello,
}
```

編輯 app-core/package.js 檔

```json
{
  "name": "app-core",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {}
}
```

### 建立 app-api-server

```
mkdir app-api-server
touch app-api-server/index.js
touch app-api-server/package.js
yarn workspace app-api-server add koa
```

編輯 app-api-server/index.js 檔

```js
const appCore = require('app-core')
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = appCore.hello()
})

app.listen(3000)
```

編輯 app-api-server/package.js 檔

```json
{
  "name": "app-api-server",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "koa": "^2.8.1"
  }
}
```

**啟動 API server**

```
node app-api-server/index.js
```

測試 <http://localhost:3000>
