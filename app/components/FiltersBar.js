import React from 'react';
import filters from '../data/filters.json';
import { FilterInput } from './FilterInput.js';
import '../styles/FiltersBar.css';

export class FiltersBar extends React.Component {
    render() {
        const filterItems = filters.map((item, index) =>
            <FilterInput 
                key={index} 
                type={item.type} 
                label={item.label} 
                vals={item.vals} 
            />
        );
        return (
            <div className="filters-bar">
                <ul className="filters-list">
                    {filterItems}
                </ul>
            </div>
        );
    }
}