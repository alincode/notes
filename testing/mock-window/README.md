# Mock Window

**edit package.json**

```
"scripts": {
  "test": "mocha"
},
```

**install module**

```
npm i mocha -D
node_modules/.bin/mocha init test
npm i mock-browser -D
npm i fake-indexeddb -D
npm install kv-idb -D
npm test
```

### relevant project

* mock-browser by darrylwest:<https://github.com/darrylwest/mock-browser>
* fakeIndexedDB by dumbmatter:<https://github.com/dumbmatter/fakeIndexedDB>
* jsdom : <https://github.com/jsdom/jsdom>