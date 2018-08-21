import React from 'react';
import '../styles/SideSubMenuItem.css';
import * as MenuActions from '../actions/MenuActions.js';

export class SideSubMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
        e.preventDefault();
        MenuActions.dispatchSelectSubMenuItem(this.props.menuId, this.props.parentId);
    }

    render() {
        return (
            <a href="#" className="link-button" onClick={this.handleSelection}>
                <li className={"ssmi" + (this.props.isSelected ? " ssmi-selected" : "")} >{this.props.title}</li>
            </a>
        );
    }
}