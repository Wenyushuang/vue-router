const addRouteRecord = (route, pathList, pathMap, parentPath) => {
    let path = parentPath ? `${parentPath.path}/${route.path}` : route.path
    let record = { //根据当前路由产生一个记录 一个path 一个component
        path: route.path,
        component: route.component, //....
        parent: parentPath //保存爸爸
    }
    if(!pathMap[path]) { //防止用户编路由重复不去覆盖
        pathMap[path] = record
        pathList.push(path)
    }
    if(route.children) { //子路也放进去R
        route.children.forEach(subRoute => {
            addRouteRecord(subRoute, pathList, pathMap,record)
        })
    }
}
//新增和添加的功能
export default function createRouteMap(routes, oldPathList, oldPathMap) { //
    let pathList = oldPathList || []
    let pathMap = oldPathMap || {}
    routes.forEach(route => {
        addRouteRecord(route, pathList, pathMap)
    })
    return {
        pathList,
        pathMap
    }
}
