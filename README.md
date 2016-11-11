# demo

> test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 目录结构

```
.
├── build/               # Webpack 编译相关文件
├── config/              # Webpack 配置目录
├── dist/                # build 生成的生产环境下的项目
├── src/                 # 源码目录（开发都在这里进行）
│   ├── assets/            # 放置需要经由 Webpack 处理的静态文件
│   ├── components/        # 组件（COMPONENT）
│   ├── directives/        # 指令
│   ├── filters/           # 过滤器
│   ├── routes/            # 路由
│   ├── services/          # 服务（SERVICE，用于统一管理 XHR 请求）
│   ├── views/             # 路由视图基页（VIEW）
│   ├── app.js             # 启动文件
│   ├── index.html         # 静态基页
├── static/              # 放置无需经由 Webpack 处理的静态文件
├── .babelrc             # Babel 转码配置
├── .eslintignore        # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc.js         # ESLint 配置
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # （这个就不用多解释了吧）
```


## 常见问题

此项目基于 vue-cli init webpack 项目为基础运行

#### PhantomJS 单元测试不能正常运行

确保设置了下面配置，并安装了 npm 包 `phantomjs-prebuilt karma-phantomjs-launcher`

```
export PHANTOMJS_BIN=/usr/local/lib/node_modules/phantomjs-prebuilt/bin/phantomjs
```


#### 不使用 PhantomJS 改为 Chrome，无法找到路径

确保设置下面配置（在 ~/.zshrc` 中），并安装 npm 包  `karma-chrome-launcher`

```
export CHROME_BIN=/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
```


#### 无法运行 UI 测试

报错 `Unsupported major.minor version 52.0`，是因为 selenium-server 由 2.x 升级到 3.x，需要 java JESDK8 环境支持

参见：http://stackoverflow.com/questions/22489398/unsupported-major-minor-version-52-0
