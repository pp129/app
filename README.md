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

### 常用指令

```shell
  ionic g page YourPageName #创建新页面
  ionic g directive YourPageName #创建指令
  ionic g component YourComponentName #创建组件
  ionic g provider YourProviderName #创建服务
  ionic g pipe YourPipeName #创建过滤器
```

### 打包/真机调试（以Android为例）

```shell
  ionic cordova platform add android #添加Android平台支持
  ionic cordova run android #在虚拟器上运行程序
  ionic cordova build android #开始打包apk
```

#### 更多指令：[ionic-cli：command list](https://ionicframework.com/docs/cli/commands.html)

#### 伪造数据： [easy-mock](https://www.easy-mock.com/)

#### 自定义图标：[阿里图表库](http://www.iconfont.cn/home/index), [引用方法](https://jingyan.baidu.com/article/3ea51489acddf452e61bba33.html)

## 项目结构

**hooks：** 编译 cordova 时自定义的脚本命令，方便整合到我们的编译系统和版本控制系统中

**node_modules：** node 各类依赖包

**resources：** android/ios 资源（更换图标和启动动画）

**src：** 开发工作目录，页面、样式、脚本和图片都放在这个目录下

**www：** 静态文件

**platforms：** 生成 android 或者 ios 安装包路径（platforms\android\build\outputs\apk：apk所在位置）执行cordova platform add android 后会生成

**plugins：** 插件文件夹，里面放置各种 cordova 安装的插件 config.xml: 打包成 app 的配置文件 package.json: 配置项目的元数据和管理项目所需要的依赖

**tsconfig.json：** TypeScript 项目的根目录，指定用来编译这个项目的根文件和编译选项tslint.json：格式化和校验 typescript

### **src** 工作目录：

> ***app：*** 应用根目录  <br/>
***assets：*** 资源目录（静态文件（图片，js 框架。。。  <br/>
***pages：*** 页面文件，放置编写的页面文件，包括：html，scss，ts。
***theme：*** 主题文件，里面有一个 scss 文件，设置主题信息。 <br/>
***providers：*** 也就是ng里的service。 当重复的需要一个类中的方法时，可封装它为服务类，以便重复使用，如http。 <br/>
可能还会有 ***directive、component、pipe ...***

<img src="https://img-blog.csdn.net/20170905131004085?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvWmhhaUt1bjY4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">
