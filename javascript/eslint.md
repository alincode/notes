# Eslint

<https://eslint.org/>

The pluggable linting utility for JavaScript and JSX

* En: [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)
* Zh: [Configuring ESLint](http://eslint.cn/docs/user-guide/configuring)

**docs**
* cli: <https://eslint.org/docs/user-guide/command-line-interface>

### rules

<https://eslint.org/docs/rules/>

* no-console: disallow the use of console
* indent: enforce consistent indentation
* linebreak-style: enforce consistent linebreak style
* quotes: enforce the consistent use of either backticks, double, or single quotes
* semi: require or disallow semicolons instead of ASI

### .eslintrc

```js
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "mocha"
    ],
    "rules": {
        "no-console": "off",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
```

### relevant article

* 2017-12-22 [使用 ESLint 提高程式碼品質 by Larry Lu](https://larrylu.blog/improve-code-quality-using-eslint-742cf1f384f1)