import React from 'react';
import { FiltersBar } from './FiltersBar.js';
import { Breadcrumbs } from './Breadcrumbs.js';
import '../styles/PageTitle.css';
import MenuStore from '../stores/MenuStore.js';

export class PageTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPage: MenuStore.getCurrentlySelectedPage()
        }

        this.changeSelectedPage = this.changeSelectedPage.bind(this);
    }

    componentWillMount() {
        MenuStore.on("selected", this.changeSelectedPage);
    }

    componentWillUnmount() {
        MenuStore.removeListener("selected", this.changeSelectedPage);
    }

    changeSelectedPage() {
        this.setState({
            selectedPage: MenuStore.getCurrentlySelectedPage()
        })
    }

    render () {
        return(
        <div className="page-title-section">
            <div className="title-bar">
                <Breadcrumbs title={this.state.selectedPage.title} parentId={this.state.selectedPage.parent_id}/>
                <FiltersBar />
            </div>  
        </div>
        );
    }
}