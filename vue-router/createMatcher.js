//匹配功能 match  通过path返回匹配的组件
// 添加匹配 动态路由添加 addRoutes 权限
import {createRoute} from './history/base'
import createRouteMap from './creater-route-map'
export default function createMatcher(routes) { //用户传入的route属性
    //是用户自己配置的 但是用起来不方便  所以需要创建映射表 
    // pathList 会把所有路由 组成一个数组
    let { pathList, pathMap } = createRouteMap(routes)
    function match(location) { //通过path返回匹配极路
        console.log(pathMap)
        let record = pathMap[location] //过去对用的记录
        return createRoute(record, {path: location}) //返回通过记录 匹配到几个组件
    }
    function addRoutes(routes) {
        createRouteMap(routes, pathList, pathMap) //动态添加的路由
    }
    return {
        match,
        addRoutes
    }
}