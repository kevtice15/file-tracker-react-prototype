import React from 'react';
import '../styles/LinkButton.css';

export class LinkButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button className={this.props.buttonType}>{this.props.buttonText}</button>
    }
}