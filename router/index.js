import Vue from 'vue' //相同的会 俩个模块的东西是相互独立的
import Router from '../vue-router/index.js'
import Home from '../views/home.vue'
import About from '../views/about.vue'
Vue.use(Router)



//use方法会调用install 会注册全局组件 所以不需要注册 router-link router-vue
let routes = [
    {
        path: '/',
        component: Home
    },
     {
        path: '/about',
        component: About,
        children: [
            {
                path: 'a',
                component: {
                    render: h => <h1>about a</h1> // h('h1', ['about', a])
                }
            },
            {
                path: 'b',
                component: {
                    render: h => <h1>about b</h1>
                }
            }
        ]
    }
]

export default new Router({
    routes
})