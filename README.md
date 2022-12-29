## 简介

本项目是基于可视化课程完成的课程Project

基于城市居民行为数据的生活模式分析
## 前序准备
你需要了解 [vue3.0](https://github.com/vuejs/vue-next)的新特性和Api方法后才开始熟悉本项目，大部分数据采用[Mock.js](https://github.com/nuysoft/Mock) 进行模拟，[axios](https://github.com/axios/axios)请求数据，最大还原了请求后台接口数据，由于[element-ui](https://github.com/ElemeFE/element) 还未支持vue3.0（不过好像在憋大招）,所以这里自己手写了几个项目中遇到的UI组件，正在持续更新中...

同时，这里我还写了个[vue3.0](https://github.com/vuejs/vue-next) 新特性方法的文章，包含vue2.0常用的各种方法在vue3.0中的使用。

- [vue3.0,你想知道的这里都有](https://juejin.im/post/6870392360946106382)

## 功能

```
个体生活模式
群体生活模式
区域分析
```

### 文件目录说明
```

├── mock                             ---mock模拟数据
├── public                           ---静态资源文件
├── src          
│  ├── api                           ---接口     
│  ├── assets                        ---图片和字体
│  ├── componentApi                  ---可复用的vue方法
│  ├── components                    ---可复用的vue组件
│  ├── layouts                       ---布局方式
│  ├── router                        ---路由
│  ├── store                         ---vuex
│  ├── styles                        ---sass样式
│  ├── utils                         ---方法函数
│  ├── views                         ---页面
│  ├── App.vue                       
│  ├── main.js                       
├── tests                            ---单元测试文件
├── UI                               ---自定义UI组件库
├── .browserslistrc
├── .env.development
├── .env.production
├── .eslintrc.js
├──  babel.config.js
├── .jest.config.js                  ---jest的配置
├──  package.json
├──  package-lock.json
├──  README.md
└──  vue.config.js                   ---webpack的配置


```


 
## 安装

```
# 克隆项目
git clone https://github.com/biubiubiu01/vue3-bigData.git
# 进入项目目录
cd vue3-bigData
# 安装依赖
npm i
# 本地开发 启动项目
npm run serve
```


### 部署

```
# 打包项目
npm run build
# 单元测试
npm run test
```

## Online Demo

[在线 Demo](http://106.52.18.61:888/#/)






