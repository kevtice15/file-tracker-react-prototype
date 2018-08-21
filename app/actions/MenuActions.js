import dispatcher from "../dispatcher.js";

export function dispatchToggleSubMenu(id) {
    dispatcher.dispatch({
        type: "TOGGLE_SUBMENU",
        id
    });
}

export function dispatchSelectMenuItem(id) {
    dispatcher.dispatch({
        type: "SELECT_MENUITEM",
        id
    });
}

export function dispatchSelectSubMenuItem(id, parentId) {
    dispatcher.dispatch({
        type: "SELECT_SUBMENUITEM",
        id,
        parentId
    });
}