import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// App是一个组件对象 new Vue.extend({})
new Vue({
    name: 'route',
    el: '#app',
    render: h => h(App) ,//返回一个虚拟dom
    router //所有子组件都可获取到router
})
// 单页应用 可以实现组件的切换

