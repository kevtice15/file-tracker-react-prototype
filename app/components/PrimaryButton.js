import React from 'react';
import '../styles/PrimaryButton.css';

export class PrimaryButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button>{this.props.buttonText}</button>
    }
}