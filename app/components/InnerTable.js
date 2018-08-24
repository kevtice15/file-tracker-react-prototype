import React from 'react';
import { InnerTableRow } from './InnerTableRow.js';
import '../styles/InnerTable.css';
import * as FileActions from '../actions/FileActions.js'

export class InnerTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    }

    componentDidMount(){
    }

    componentWillUnmount(){

    }

    handleAnimationEnd(e){
        /*
            ANIMATIONS:
            openTable
            fadeIn
            closeTable
        */
        switch(e.animationName) {
            case "openTable": {
                console.log("open table animation end", e);
                break;
            }
            case "closeTable": {
                console.log("THIS IN THE ANIMATE HANDLER", this.props);
                FileActions.dispatchUnselectTableRow(this.props.parent_id);
                break;
            }
        }
    }

    render(){
        const innerRows = this.props.campus_list.map((item, index) => 
            <InnerTableRow 
                key={index} 
                id={item.id} 
                parent_id={this.parent_id} 
                campus={item.campus} 
                received={item.received} 
                data_stage={item.data_stage} 
                s_and_b={item.s_and_b} 
                bi={item.bi} 
                times_sent={item.times_sent} 
                reject={item.reject} 
            />
        );
        return (
            <td colSpan="7">
                <div className={"flex-table " + (this.props.is_open ? "tableOpen" : "tableClose")}  onAnimationEnd={this.handleAnimationEnd}>
                <table className={"inner-table " + (this.props.is_open ? "tableFadeIn" : "tableFadeOut")}>
                    <thead>
                        <tr>
                            <th>Campus</th>
                            <th>Received</th>
                            <th>Data Stage</th>
                            <th>Stage &amp; Base</th>
                            <th>BI</th>
                            <th>Times Sent Before Acceptance</th>
                            <th>Return File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {innerRows}
                    </tbody>
                </table>
                </div>
            </td>
        );
    }
}