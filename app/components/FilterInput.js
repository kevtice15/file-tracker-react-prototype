import React from 'react';
import '../styles/FilterInput.css';

export class FilterInput extends React.Component {
    constructor(props){
        super(props);
        
    }
    render () {
        const filterOptions = this.props.vals.map((item, index) =>
            <option key={index} value={item.val}>{item.text}</option>
        );
        return(
            <li>
                <label htmlFor={this.props.type}>{this.props.label}</label>
                <select id={this.props.type}>
                    {filterOptions}
                </select>
            </li>
        );
    }
}