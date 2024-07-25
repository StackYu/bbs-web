/**
 * 将组件路径转换成组件对象
 * @param path 组件路径
 * @returns {function(*): any}
 */
async function routerCom(path) {
    return () => import(path);
}

export function Menu2Router(menus) {
    if (menus === undefined || menus === null || menus.length === 0) {
        return
    }

    const routerArray = []

    // 循环操作
    menus.forEach(menu => {
        if (!menu.component) {
            return null;
        } else {
            let route = {}

            if (menu.id) {
                route.id = menu.id
            }
            if (menu.path) {
                route.path = menu.path
            }
            if (menu.redirect) {
                route.redirect = menu.redirect
            }
            if (menu.alwaysShow) {
                route.alwaysShow = menu.alwaysShow
            }
            if (menu.name) {
                route.name = menu.name
            }
            if (menu.hasChildren) {
                route.hasChildren = menu.hasChildren
            }

            route.component = routerCom(menu.component)

            if (menu.meta) {
                const {meta} = menu
                route.meta = {}

                if (meta.title) {
                    route.meta.title = meta.title
                }
                if (meta.noCache) {
                    route.meta.noCache = meta.noCache
                }
                if (meta.activeMenu) {
                    route.meta.activeMenu = meta.activeMenu
                }
                if (meta.icon) {
                    route.meta.icon = meta.icon
                }
            }

            if (menu.children) {
                route.children = []
                const children = menu.children
                route.children.push(Menu2Router(children));
            }
            routerArray.push(menu)
        }
    });

    return routerArray
}

export function isNotEmpty(value) {
    return value !== null &&
        value !== undefined &&
        value !== '';
}

