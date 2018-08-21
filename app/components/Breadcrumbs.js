import React from 'react';
import '../styles/Breadcrumbs.css';

export class Breadcrumbs extends React.Component {
    render() {
        if(this.props.parentId != undefined){
            return(
                <ul className="breadcrumbs">
                    <li><h3 className="title-3">All Files</h3></li>
                    <li><h3 className="title-3">></h3></li>
                    <li><h3 className="title-3">{this.props.title}</h3></li>
                </ul>
            );
        }
        else {
            return(
                <ul className="breadcrumbs">
                    <li><h3 className="title-3">{this.props.title}</h3></li>
                </ul>
            );
        }
    }
}