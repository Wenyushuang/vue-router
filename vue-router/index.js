import install from './install'
import createMatcher from './createMatcher'
import HashHistory from './history/hashHistory'
import BroswerHistory from './history/broswerHistory'
class VueRouter {
    constructor(options) {
        let routes = options.routes || []
        //创建匹配器
        this.matcher = createMatcher(routes) //传入的时用户定义的 routes 数组
        this.mode = options.mode || 'hash'
        switch(this.mode) {
            case 'hash': 
                this.history = new HashHistory(this) // 历史管理
                break;
            case 'history':
                this.history = new BroswerHistory(this)  //当前路由的实例 
                break;
        }
    }
    match(location) {
        return this.matcher.match(location)
    }
    init(app) { //目前指代最外层new Vue
        // 根据用户配置做出一个路由映射表
        //需要根据当前路径实现页面跳转逻辑
        const history = this.history
        let setHashListener = () => {
            history.setUpListener()
        }
        //跳转路由 跳转过程中进行匹配操作 根据路径获取对应的记录  跳转以后 监听hash变化
        history.transitionTo(history.getCurrentLocation(),setHashListener)
       

        //初始化 都需要调用更新_route的方法
        history.listen((route) => {
            app._route = route
        })
        // transitionTo hash 有
        //getCurrentListener hash brwoser 实现不一样
        // setUpListener hase监听
    }
}
VueRouter.install = install

export default VueRouter