### 缘起
此次肺炎疫情波及甚广，只能自封于家中看看新闻、打打游戏。
昨天看了```山月```大佬的[《武汉肺炎疫情实时动态省市地图开发》](https://juejin.im/post/5e312aedf265da3e3e7548ff)心潮澎湃，决定拿起键盘照撸一个。开发时间较短，bug在所难免，各位大佬见谅。

![](http://blog.likeyo.net/project-ncov2019-1.jpg)

### 程序基本介绍
1. 数据抓取自```腾讯新闻```
2. 图表采用Echarts(内部使用了vue-echarts)
3. 支持【省】级地图
4. Vue-cli@3脚手架项目
5. [查看源代码](https://github.com/border-1px/2019-nCov)
6. [线上示例](http://101.200.145.232)

### 快速开始
```
# 安装依赖
npm i

# 抓取腾讯新闻数据
node ./build-data.js

# 开发模式
npm run serve
```

### 未实现
定时执行 build-data.js，抓取最新数据。
