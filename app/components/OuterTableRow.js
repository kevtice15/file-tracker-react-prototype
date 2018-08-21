import React from 'react';
import '../styles/OuterTableRow.css';
import { PrimaryButton } from './PrimaryButton.js';
import { InnerTable } from './InnerTable';
import * as FileActions from '../actions/FileActions.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class OuterTableRow extends React.Component {
    constructor (props) {
        super(props);

        this.handleTableRowSelection = this.handleTableRowSelection.bind(this);
        
    }

    handleTableRowSelection(){
        //FileActions.dispatchToggleTableRow(this.props.id);
        if(this.props.is_selected){
            FileActions.dispatchCloseInnerTable(this.props.id);
            console.log("SELECTED TABLE ROW CLICK");
        }
        else {
            FileActions.dispatchSelectTableRow(this.props.id);
            console.log("UNSELECTED TABLE ROW CLICK");
            FileActions.dispatchOpenInnerTable(this.props.id);
        }
    }

    openInnerTable() {
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }



    render() {
        // console.log("rendering outer table row", this.props);
            return (
                <React.Fragment>
                    <tr className={this.props.is_selected ? "selected-row-a" : ""} onClick={this.handleTableRowSelection}>
                        <td className="caret-column"><div className="selected-col-border"></div><i className={"fas fa-caret-right " + (this.props.is_open ? "rotate90" : "unrotate90")}></i></td>
                        <td>
                            <div>
                                <p className="emphasized">{this.props.subject_area}</p>
                                <p>{this.props.year} - {this.props.part_of_cycle} {this.props.sub_cycle ? " - " + this.props.sub_cycle : ""} </p>
                            </div>
                        </td>
                        <td>{this.props.due_date}</td>
                        <td>{this.props.complete_group ? "Yes" : "No" }</td>
                        <td>{this.props.status}</td>
                        <td>{this.props.exceptions}</td>
                        <td><PrimaryButton buttonText="Certify this Group" /></td>
                    </tr>
                    <tr className={"selected-row-b " + (this.props.is_selected ? "" : "displayNone")}>
                        <InnerTable campus_list={this.props.campus_list} parent_id={this.props.id}
                        is_open={this.props.is_open}/>
                    </tr>
                </React.Fragment>
            );
       
    }
}