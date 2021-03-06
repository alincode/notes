# dotenv

vi .env

```
DB_HOST=localhost
DB_USER=root
DB_PASS=password
MESSAGE=我在測試中文
```

node index.js

```js
require('dotenv').config()

let demo = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  message: process.env.MESSAGE
};

console.log(demo);
```

### Mise

* <https://github.com/motdotla/dotenv>