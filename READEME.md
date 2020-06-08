## 使用 @vue/cli-service-global快速原型工具生成项目

## 前端路由常见俩个方案 
### hash 
- onhashChange是不会发生跳转 变化时切换页面内容 /#/
- 浏览器的历史记录 是一个栈形结构用来存放历史 内部通过俩个栈来实现的 当后退时会把第一个栈顶的路由存放到另一个栈中 当再次输入路径 清空第二个栈
- window.location.hash = '/app';
- window.onhasechange = function() {}


### history
- history.pushState({}, null,) 数据， 占位符， 路径
- 实现增加路径
- 强制 直接回车的时候路径变化 请求页面 服务器没有该路径就会 404  服务器去解决

- history.popState({}, null, )
- window.onpopostate = function () {} 监控浏览器路径的变化

### 源码中 在hash模式 如果支持 onpopState会优先采用 如果不支持 会使用hashchange 只监控路径变化