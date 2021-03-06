import React from 'react';
import { SideMenuItem } from './SideMenuItem';
import '../styles/SideMenu.css';
import Logo from '../img/uc_logo@2x.png';
import MenuStore from '../stores/MenuStore.js';

export class SideMenu extends React.Component {
    constructor(props){
        super(props);
        //Get all menu items from the MenuStore
        //make the first item in the list the selected Menu item
        this.state = {
            menus: MenuStore.getAll(),
            currentSelected: 0
        };
        

        //Bind 'this' to the SideMenu component so the callback functions work
        this.changeSelected = this.changeSelected.bind(this);
        this.getMenus = this.getMenus.bind(this);
    }

    //Set event listeners when before the component mounts
    componentWillMount() {
        MenuStore.on("toggle", this.getMenus);
        MenuStore.on("selected", this.getMenus);
    }

    //Remove listeners when the component is about to unmount
    componentWillUnmount() {
        MenuStore.removeListener("toggle", this.getMenus);
        MenuStore.removeListener("selected", this.getMenus);
    }

    //Set menus in state to all the menu items, usually to refresh which one is selected
    getMenus() {
        this.setState({
            menus: MenuStore.getAll()
        })
    }
    
    //Sets the selected menu item to the one the user just clicked
    changeSelected(newSelected) {
        console.log("Change Selected Called");
        this.setState({selected: newSelected});
    }

    render(){
        const logo = new Image();
        logo.src = Logo;
        const menuItems = this.state.menus.map((item) =>
            <SideMenuItem 
                key={item.id} 
                menuId={item.id} 
                title={item.title} 
                icon={item.icon} 
                isSelected={item.is_selected} 
                subItems={item.subItems} 
                subMenuOpen={item.submenu_open} 
                onClick={this.changeSelected} 
            />
        );

        return (
            <div className="sidebar">
                <div className="title-section">
                    <img className="uc-logo" src={logo.src} />
                    <p className="app-title text-large">File Tracker</p>
                </div>
                <div className="menu-section">
                    <nav>
                        <ul>
                            {menuItems}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}