import React from 'react';
import '../styles/Pill.css';

export class Pill extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className="pill-container">{this.props.numOfItems}</div>;
    }
}