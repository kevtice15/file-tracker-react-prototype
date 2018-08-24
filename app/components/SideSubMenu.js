import React from 'react';
import { SideSubMenuItem } from './SideSubMenuItem.js';
import '../styles/SideSubMenu.css';


export class SideSubMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            is_open: false
        };
    }

    render(){
        const subMenuItems = this.props.subItems.map((item, index) =>
            <SideSubMenuItem 
                key={index} 
                title={item.title} 
                menuId={item.id} 
                parentId={item.parent_id} 
                isSelected={item.is_selected}
            />
        );
        console.log(this.props);
        console.log(subMenuItems);
        return (
            <div className="sub-menu">
                <nav>
                    <ul>
                        {subMenuItems}
                    </ul>
                </nav>
            </div>
        );
    }
}