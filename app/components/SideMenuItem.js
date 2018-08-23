import React from 'react';
import '../styles/SideMenuItem.css';
import { SideSubMenu } from './SideSubMenu.js';
import * as MenuActions from '../actions/MenuActions.js';
import { Pill } from "./Pill.js";

export class SideMenuItem extends React.Component {
    constructor(props){
        super(props);
        this.handleMenuSelection = this.handleMenuSelection.bind(this);
    }

    handleMenuSelection(e) {
        e.preventDefault();
        console.log("HMS", this.props);
        if(this.props.subItems){
            MenuActions.dispatchSelectMenuItem(this.props.menuId);
            MenuActions.dispatchToggleSubMenu(this.props.menuId);
            return;
        }
        MenuActions.dispatchSelectMenuItem(this.props.menuId);
    }

    render() {
        if(this.props.subItems && this.props.subMenuOpen){
            console.log(this.props);
            return (
                <div className="submenu-item">
                    <a href="#" className="link-button" onClick={this.handleMenuSelection} >
                        <li className={"smi" + (this.props.isSelected ? " is-selected" : "")}>
                            <i className={this.props.icon}></i>
                            <span>
                                {this.props.title}
                            </span>
                            <Pill numOfItems="3" />
                        </li>
                    </a>
                    <SideSubMenu subItems={this.props.subItems} />
                </div>
            );
        }
        else {
            return (
                <a href="#" className="link-button" onClick={this.handleMenuSelection}>
                    <li className={"smi" + (this.props.isSelected ? " is-selected" : "")}>
                        <i className={this.props.icon}></i>
                        <span>
                            {this.props.title}
                        </span>
                        <Pill numOfItems="3" />
                    </li>
                </a>
            );
        }
    }
}