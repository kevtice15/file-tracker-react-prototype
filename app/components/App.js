import React from 'react';
import { SideMenu } from './SideMenu.js';
import { PageTitle } from './PageTitle.js';
import { MainPanel } from './MainPanel.js';
import '../styles/resets.css';
import '../styles/App.css';

export class App extends React.Component{
    render() {
        return (
            <div className="app-container">
                <SideMenu />
                <PageTitle />
                <MainPanel />
            </div>
        );
    }
}