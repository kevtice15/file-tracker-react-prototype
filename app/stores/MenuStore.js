import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";
import menuList from '../data/menuItemsData.json';

class MenuStore extends EventEmitter {
    constructor() {
        super();
        this.menus = menuList;
    }

    getAll() {
        return this.menus;
    }

    getCurrentlySelectedPage() {
        var found =  this.menus.find(function(element){
            return element.is_selected === true;
        });
        // console.log("founderooni", found);
        if(found.subItems){
            var subFound = found.subItems.find(function(el){
                return el.is_selected === true;
            });
            // console.log("found selected in submenu", subFound);
            return subFound;
        }
        // console.log("found selected in outer menu", found);
        return found;
    }

    toggleSubMenu(id) {
        this.menus[id].submenu_open = true;
        this.menus[id].is_selected = true;
        this.emit("toggle");
    }

    selectMenuItem(id) {
        //Turn off all other selections
        for(let item of this.menus){
            item.is_selected = false;
            item.submenu_open = false;
        }
        //Turn on this selection

        if(this.menus[id].is_selected === true){
            console.log("ALREADY SELECTED");
            return;
        }
        else {
            console.log("NOT ALREADY SELECTED");
            this.menus[id].is_selected = true;
            this.emit("selected");
            this.emit("hide_all_inner_tables");
            console.log("YO, HIDE ALL THE INNER TABLES!");
        }
        
    }

    selectSubMenuItem(id, parentId) {
        if(this.menus[parentId].subItems[id].is_selected === true){
            console.log("ALREADY SELECTED");
            return;
        }
        else {
            console.log("NOT ALREADY SELECTED");
            for(let item of this.menus[parentId].subItems){
                item.is_selected = false;
            }
            this.menus[parentId].subItems[id].is_selected = true;
            this.emit("selected");
            this.emit("hide_all_inner_tables");
            console.log("YO, HIDE ALL THE INNER TABLES!");
        }
        
    }

    handleActions(action) {
        switch(action.type) {
            case "TOGGLE_SUBMENU": {
                // console.log("received toggle submenu action", action);
                this.toggleSubMenu(action.id);
                break;
            }
            case "SELECT_MENUITEM": {
                // console.log("received select menu item action", action);
                this.selectMenuItem(action.id);
                break;
            }
            case "SELECT_SUBMENUITEM": {
                // console.log("received select sub menu item actions", action);
                this.selectSubMenuItem(action.id, action.parentId);
                break;
            }
        }
    }
}

const menuStore = new MenuStore;
dispatcher.register(menuStore.handleActions.bind(menuStore));

export default menuStore;