// cuttent就是个普通变量 希望current变化可以更新视图 current响应式？
// 源码就是 defineReactive 进行响应式的 放在工具包 Vue.util.direactive -- 直接将对象定义成响应式的 可以进行依赖收集 视图响应
export const createRoute = (record, location) => { //根据匹配到的记录来计算匹配到的所有记录
    let matched = []
    if(record) {
        while(record) {
            matched.unshift(record)
            record =  record.parent
        }  
    }
    return {
        ...location,
        matched
    }
}
export default class History{
    constructor(router) {
        // 当前router实例
        this.router = router
        //this.current 很重要的一个属性 代表当前路径匹配出来的记录
        // /about/a 应该有俩个记录 {path: /about, component:'about} {path: '/about/a', comonent: A}
        // this.current = {
        //     path: '/'
        // }
        
        this.current = createRoute(null, {
            path: '/'
        })
    }
    transitionTo(location, complate) { //loaction匹配路径
        //获取当前路径匹配对应的记录 当路径变化时获取对应记录 =》 router-view渲染路径
        //通过路径拿记录 有了记录以后就可以找到对应的匹配
        console.log(location)
        let current = this.router.match(location)
        //匹配的路径和个数都相等 就不需要再次跳转了
    
        if(this.current.path=== location && this.current.mathed.length === current.mathed.length) {
            return 
        }
        this.current = current
        console.log(this.current)
        // 当路径变化后 current属性会进行更新操作
        this.cb && this.cb(current)
        complate && complate()
    }
    listen(cb) { //保存回调函数
        this.cb = this.cb
    }
}