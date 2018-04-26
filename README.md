# ionic DEMO

> ionic3 app

## 文档

* [Angular](https://angular.cn/docs)
* [Ionic](https://ionicframework.com/docs/components/#overview)

## 环境

* node^6+
* npm^3+
* [Ionic CLI and Cordova](https://ionicframework.com/docs/intro/installation/)

## 使用

如果npm太慢用淘宝镜像[cnpm](https://npm.taobao.org/)

```bash
  #安装依赖
  npm install
  ionic serve #启动本地浏览器调试
```

##### 常用指令

```shell
  ionic g page YourPageName #创建新页面
  ionic g directive YourPageName #创建指令
  ionic g component YourComponentName #创建组件
  ionic g provider YourProviderName #创建服务
  ionic g pipe YourPipeName #创建过滤器
```

##### 打包/真机调试（以Android为例）

```shell
  ionic cordova platform add android #添加Android平台支持
  ionic cordova run android #在虚拟器上运行程序
  ionic cordova build android #开始打包apk
```

##### 更多指令：[ionic-cli：command list](https://ionicframework.com/docs/cli/commands.html)

##### 伪造数据： [easy-mock](https://www.easy-mock.com/)

##### 自定义图标：[阿里图标库](http://www.iconfont.cn/home/index) / [引用方法](https://jingyan.baidu.com/article/3ea51489acddf452e61bba33.html)

## 项目结构

<img src="https://img-blog.csdn.net/20170905131004085?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvWmhhaUt1bjY4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">

## Angular表单的用法

> pages/form   **采用Reactive 响应式表单**

* [Angular表单简介](https://segmentfault.com/a/1190000009971088)

### 响应式表单文档

* [FormGroup](https://angular.cn/api/forms/FormGroup)
* [FormBuilder](https://angular.cn/api/forms/FormBuilder)
* [Validators](https://angular.cn/api/forms/Validators)

## 组件实例 src/components

#### accordion-list 可折叠list

> 使用 pages/list.html+pages/list.ts

#### expandable-header 可扩展Header

> 使用 pages/about.html

## 指令实例 src/directives

#### elastic-header 伸缩Header

> 使用 pages/setting.html

#### scroller-hide 滚动隐藏Header

> 使用 pages/list.html+pages/list.ts

## 地图的使用（baiduMap）

> pages/baidu-map

* **在web端会出现无法拖拽地图等问题，最好在虚拟器或真机下调试地图页面**

1. [申请百度地图密匙](http://lbsyun.baidu.com/apiconsole/key?application=key)
2. 在index.html中引用（尽量靠前）

```html
<script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=你的密匙"></script>
<!-- 写在这上面 -->
<script src="cordova.js"></script>

```

## 图表的使用（echarts）

#### 安装（本项目已装）

```bash
npm install echarts --save
npm install @types/echarts --save
```

#### 使用

> pages/charts
