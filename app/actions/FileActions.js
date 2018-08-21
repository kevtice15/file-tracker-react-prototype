import dispatcher from "../dispatcher.js";

export function dispatchOpenTableRow(id) {
    dispatcher.dispatch({
        type: "OPEN_TABLE_ROW",
        id
    });
}

export function dispatchToggleTableRow(id) {
    dispatcher.dispatch({
        type: "TOGGLE_INNER_TABLE",
        id
    });
}

export function dispatchOpenInnerTable(parent_id) {
    dispatcher.dispatch({
        type: "OPEN_INNER_TABLE",
        parent_id
    })
}

export function dispatchCloseInnerTable(parent_id) {
    dispatcher.dispatch({
        type: "CLOSE_INNER_TABLE",
        parent_id
    })
}

export function dispatchSelectTableRow(id) {
    dispatcher.dispatch({
        type: "SELECT_TABLE_ROW",
        id
    })
}

export function dispatchUnselectTableRow(id) {
    dispatcher.dispatch({
        type: "UNSELECT_TABLE_ROW",
        id
    })
}