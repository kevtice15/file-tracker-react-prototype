import React from 'react';
import PropTypes from 'prop-types';
import { OuterTableRow } from './OuterTableRow.js';
import '../styles/OuterTable.css';
import FileStore from "../stores/FileStore.js";
import MenuStore from "../stores/MenuStore.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class OuterTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            files: FileStore.getAll(),
            selectedPage: MenuStore.getCurrentlySelectedPage(),
            filesToShow: FileStore.getFileListBySubjectArea(MenuStore.getCurrentlySelectedPage().title)
        }

        this.hideAllInnerTables = this.hideAllInnerTables.bind(this);
        this.updateFileTable = this.updateFileTable.bind(this);
    }

    updateFileTable(){
        this.setState({
            filesToShow: FileStore.getFileListBySubjectArea(MenuStore.getCurrentlySelectedPage().title)
        });
    }

    hideAllInnerTables() {
        this.setState({
            files: FileStore.hideAllInnerTables()
        })
    }

    componentWillMount() {
        MenuStore.on("selected", this.updateFileTable);
        MenuStore.on("hide_all_inner_tables", this.hideAllInnerTables);
        FileStore.on("open_table_row", this.updateFileTable);
        FileStore.on("table_selection", this.updateFileTable);
        FileStore.on("close_table_row", this.updateFileTable);
        FileStore.on("select_table_row", this.updateFileTable);
        FileStore.on("unselect_table_row", this.updateFileTable);
    }

    componentWillUnmount() {
        MenuStore.removeListener("selected", this.updateFileTable);
        MenuStore.removeListener("hide_all_inner_tables", this.hideAllInnerTables);
        FileStore.removeListener("open_table_row", this.updateFileTable);
        FileStore.removeListener("table_selection", this.updateFileTable);
        FileStore.removeListener("close_table_row", this.updateFileTable);
        FileStore.removeListener("select_table_row", this.updateFileTable);
        FileStore.removeListener("unselect_table_row", this.updateFileTable);
    }

    render() {
        if(this.state.filesToShow){
            const fileRows = this.state.filesToShow.map((item, index) =>
                <OuterTableRow 
                    key={index} 
                    id={item.id} 
                    is_selected={item.is_selected} 
                    is_open={item.is_open} 
                    subject_area={item.subject_area} 
                    year={item.year} 
                    part_of_cycle={item.part_of_cycle} 
                    sub_cycle={item.sub_cycle} 
                    due_date={item.due_date} 
                    complete_group={item.complete_group} 
                    status={item.status} 
                    exceptions={item.exceptions} 
                    evaluate={item.evaluate} 
                    campus_list={item.campusList} 
                />
            );
            return (
                <div className="table-section">
                    <ReactCSSTransitionGroup
                        transitionName="fadeTable"
                        transitionEnterTimeout={350}
                        transitionLeave={false}
                        >
                        <table key={MenuStore.getCurrentlySelectedPage().id} className="files-table">
                            <thead>
                            <tr>
                                <th></th>
                                <th className="table-header">Part of Cycle</th>
                                <th className="table-header">Due Date</th>
                                <th className="table-header">Complete Group</th>
                                <th className="table-header">Status</th>
                                <th className="table-header">Exceptions</th>
                                <th className="table-header">Evaluate</th>
                            </tr>
                            </thead>
                            <tbody>
                                {fileRows}    
                            </tbody>
                        </table>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
        else {
            return (
                <div className="table-section">
                    <h3>Error: No Files Found</h3>    
                </div>
            );
        }
    }
}

OuterTable.propTypes = {
    key: PropTypes.number.isRequired, 
    id: PropTypes.number.isRequired, 
    is_selected: PropTypes.bool.isRequired, 
    is_open: PropTypes.bool.isRequired, 
    subject_area: PropTypes.string.isRequired, 
    year: PropTypes.number.isRequired, 
    part_of_cycle: PropTypes.string.isRequired, 
    sub_cycle: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
    complete_group: PropTypes.bool.isRequired, 
    status: PropTypes.string.isRequired,
    exceptions: PropTypes.string.isRequired,
    evaluate: PropTypes.string.isRequired, 
    campus_list: PropTypes.array.isRequired
};