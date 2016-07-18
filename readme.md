# salt web

基于 node、react 的前端框架

## 分支计划：

* dev: 开发主分支，提供核心功能
* master：打包用分支
* dev-ant: 前端使用 ant 作为开发的主要前端工具
* dev-redux: 前端使用 redux
* dev-redux-ant: 前端使用 redux 和 ant


## 开发计划：

➣  sass 打包 √

➣  图片，css-sprite 的调整

➣  静态文件上传cdn策略

➣  js、css 线上发布版本号的控制逻辑

➣  图片策略，开发环境加载本地图片，发布上传 cdn，线上环境从 cdn 读取图片

➣  ant 加入，包括样式，调整 ant 的样式

➣  client 文件目录调整，先不使用 redux

➣  client 文件上传问题，server 对于这种功能的转发

➣  server 的转发问题

➣  单页面加载单独 css 的策略


## draft

 +------dev------+
 +       |       +
 +       |       +
 +       |       +
 +      / \      +
 +     /   \     +
 +    /     \    +
 + master    ant +

