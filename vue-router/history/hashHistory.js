import History from './base'
const ensureSlash = () => {
    if(window.location.hash) {
        return 
    }
    window.location.hash = '/'
}
export default class HashHistory extends History {
    constructor(router) {
        super(router)
        //router参数是指 router实例
        this.router = router
        //如果使用hash 默认没有hash应该跳转到首页
        ensureSlash()
    }
    getCurrentLocation() {
        return window.location.hash.slice(1)
    }
    setUpListener() {
       window.addEventListener('hashchange', () => {
           //hash变化后 再次执行匹配操作 this指向当前hashHistory的实例
           this.transitionTo(this.getCurrentLocation())
       }) 
    }
}