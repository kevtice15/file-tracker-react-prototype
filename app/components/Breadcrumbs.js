import React from 'react';
import '../styles/Breadcrumbs.css';

export class Breadcrumbs extends React.Component {
    render() {
        //If props has a parentId value (is a sub menu item; the only submenu items are beneath "All Files")
        if(this.props.parentId != undefined){
            // Return "All Files > " + props title (probably should get the parent name programmatically)
            return(
                <ul className="breadcrumbs">
                    <li><h3 className="title-3">All Files</h3></li>
                    <li><h3 className="title-3">></h3></li>
                    <li><h3 className="title-3">{this.props.title}</h3></li>
                </ul>
            );
        }
        else {
            // Return just the props title
            return(
                <ul className="breadcrumbs">
                    <li><h3 className="title-3">{this.props.title}</h3></li>
                </ul>
            );
        }
    }
}