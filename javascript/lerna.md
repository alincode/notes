# lerna.js

* lernajs
  * <https://lernajs.io/>
  * Lerna · A tool for managing JavaScript projects with multiple packages.


```sh
git init lerna-sandbox && cd lerna-sandbox
lerna init
```

```
.
├── lerna.json
├── package.json
└── packages
```

```sh
lerna create module-core -y
lerna create module-api -y
lerna create module-web -y
```

```
.
├── lerna-debug.log
├── lerna.json
├── package.json
└── packages
    ├── module-api
    │   ├── README.md
    │   ├── __tests__
    │   │   └── module-api.test.js
    │   ├── lib
    │   │   └── module-api.js
    │   └── package.json
    ├── module-core
    │   ├── README.md
    │   ├── __tests__
    │   │   └── module-core.test.js
    │   ├── lib
    │   │   └── module-core.js
    │   └── package.json
    └── module-web
        ├── README.md
        ├── __tests__
        │   └── module-web.test.js
        ├── lib
        │   └── module-web.js
        └── package.json

10 directories, 15 files
```

```
lerna bootstrap
npm install lerna-changelog --save-dev
```

### 常用指令

#### init

Fixed/Locked mode

```sh
lerna init
```

Independent mode

```sh
lerna init --independent
```

#### ls

```sh
lerna ls --long
```

```
lerna notice cli v3.5.0
module-api  v0.0.0 packages/module-api
module-core v0.0.0 packages/module-core
module-web  v0.0.0 packages/module-web
lerna success found 3 packages
```

#### clean

```sh
lerna clean
```

```
lerna notice cli v3.5.0
lerna info Removing the following directories:
lerna info clean packages/module-api/node_modules
lerna info clean packages/module-core/node_modules
lerna info clean packages/module-web/node_modules
? Proceed? Yes
```

#### publish

```sh
lerna publish                                                                                                                  
```

```
lerna notice cli v3.5.0
lerna info Verifying npm credentials
lerna http fetch GET 200 https://registry.npmjs.org/-/whoami 1241ms
lerna info current version 0.0.0
lerna info Looking for changed packages since initial commit.
? Select a new version (currently 0.0.0) (Use arrow keys)
❯ Patch (0.0.1)
  Minor (0.1.0)
  Major (1.0.0)
  Prepatch (0.0.1-alpha.0)
  Preminor (0.1.0-alpha.0)
  Premajor (1.0.0-alpha.0)
  Custom Prerelease
  Custom Version
```

#### help

```sh
lerna -h                                                                                                                       
```

```
Usage: lerna <command> [options]

命令：
  lerna add <pkg> [globs..]  Add a single dependency to matched packages
  lerna bootstrap            Link local packages together and install remaining package dependencies
  lerna changed              List local packages that have changed since the last tagged release                                         [別名: updated]
  lerna clean                Remove the node_modules directory from all packages
  lerna create <name> [loc]  Create a new lerna-managed package
  lerna diff [pkgName]       Diff all packages or a single package since the last release
  lerna exec [cmd] [args..]  Run an arbitrary command in each package
  lerna import <dir>         Import a package into the monorepo with commit history
  lerna init                 Create a new Lerna repo or upgrade an existing repo to the current version of Lerna.
  lerna link                 Symlink together all packages that are dependencies of each other
  lerna list                 List local packages                                                                                      [別名: ls, la, ll]
  lerna publish [bump]       Publish packages in the current project.
  lerna run <script>         Run an npm script in each package that contains that script
  lerna version [bump]       Bump version of packages changed since the last release.

Global Options:
  --loglevel       What level of logs to report.                                                                                   [字串] [預設值: info]
  --concurrency    How many processes to use when lerna parallelizes tasks.                                                           [數字] [預設值: 4]
  --reject-cycles  Fail if a cycle is detected among dependencies.                                                                                [布林]
  --progress       Enable progress bars. (Always off in CI)
                   Pass --no-progress to disable.                                                                                  [布林] [預設值: true]
  --sort           Sort packages topologically (dependencies before dependents).
                   Pass --no-sort to disable.                                                                                      [布林] [預設值: true]
  --max-buffer     Set max-buffer (in bytes) for subcommand execution                                                                             [數字]
  -h, --help       顯示說明                                                                                                                       [布林]
  -v, --version    顯示版本                                                                                                                       [布林]

When a command fails, all logs are written to lerna-debug.log in the current working directory.

For more information, find our manual at https://github.com/lerna/lerna
```

### babel 參考

* [lerna.json](https://github.com/babel/babel/blob/master/lerna.json)
* [labels](https://github.com/babel/babel/labels)

### Mise

* [REPO 风格之争：MONO VS MULTI](https://zhuanlan.zhihu.com/p/31289463)