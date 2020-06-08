import RouterLink from './components/router-link'
import RouterView from './components/router-view'
let Vue = null 
const install = function(_Vue) {
    // 一般用来定义一些全局内容指令 全局组件 给原型扩展方法
    Vue = _Vue
    Vue.component('router-link', RouterLink)
    Vue.component('router-view', RouterView)
    //用户吧router传到 new Vue 上
    // 希望每个子组件都可以获取到当前的router属性
     //Vue.mixin vue中的高阶组件 给每个组件添加方法给生命周期增加合并的方法 
     Vue.mixin({
         beforeCreate(){
             //this.$option.router
             //如果有router说明你在根实例增加了router 
             //渲染流程先父后子 渲染结束 先子后父
             if(this.$options.router){  //根实例
                this._routerRoot = this
                this._router = this.$options.router
                //这里很重要 可以和例子连一起看
                //初始化路由
                this._router.init(this) //this指向当前用户的根实例 调用插件中的init
                // this._router.history.current
                //如果用户更改了current是没有效果的 需要把_route 也更新
                //vue的根实例
                console.log(this._router.history.current)
                // 更改current是没有用的 需要跟新——route
                Vue.util.defineReactive(this, '_route', this._router.history.current)
                console.log(this._route)
             } else {
                this._routerRoot = this.$parent && this.$parent._routerRoot
                this._router = this._routerRoot._router 
             }
             // 所有的组件都有this.routerRoot属性
         }
     })

}
export default install