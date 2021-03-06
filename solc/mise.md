# solc-js

* 取得 version list
* 取得指定 compiler 物件版本

```js
var compiler
solcjs.version2url((err, select) => {
  var latest = select.releases[0]
  select(latest, (err, url) => {
    solcjs(url, (err, solc) => {
      compiler = solc
    })
  })
})
```

```js
var metadata = compiler.compile(sourcecode)
// console.log(metadata)
var el = smartcontract({ metadata })
```

### solc

Starting from version 0.5.0, `compile`, `compileStandard` and `compileStandardWrapper` all do the same thing - what `compileStandardWrapper` used to do.

*Note*: with 0.5.1, `compileStandard` and `compileStandardWrapper` will be removed.


```js
new BrowserWindow({
	webPreferences: {
		nodeIntegration: false
	}
})
```

```js
var solc = require('solc')

// getting the development snapshot
solc.loadRemoteVersion('latest', function (err, solcSnapshot) {
	if (err) {
		// An error was encountered, display and quit
	}
	var output = solcSnapshot.compile("contract t { function g() {} }", 1)
})
```

**Using the Latest Development Snapshot**

```js
var solc = require('solc')

// getting the development snapshot
solc.loadRemoteVersion('latest', function (err, solcSnapshot) {
	if (err) {
		// An error was encountered, display and quit
	}
	var output = solcSnapshot.compile("contract t { function g() {} }", 1)
})
```

**Linking Bytecode**

```js
var linker = require('solc/linker')

var linkReferences = linker.findLinkReferences(bytecode)
```

更新 ABI

```js
var abi = require('solc/abi')

var inputABI = [{"constant":false,"inputs":[],"name":"hello","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}]
var outputABI = abi.update('0.3.6', inputABI)
// Output contains: [{"constant":false,"inputs":[],"name":"hello","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"type":"fallback","payable":true}]
```

**translate**

用來格式化舊的 JSON assembly output

```js
var translate = require('solc/translate')

// assemblyJSON refers to the JSON of the given assembly and sourceCode is the source of which the assembly was generated from
var output = translate.prettyPrintLegacyAssemblyJSON(assemblyJSON, sourceCode)
```