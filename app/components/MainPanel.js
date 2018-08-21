import React from 'react';
import { OuterTable } from './OuterTable.js';

export class MainPanel extends React.Component {
    render() {
        return (
            <div className="main-content">
                <OuterTable />
            </div>
        );
    }
}