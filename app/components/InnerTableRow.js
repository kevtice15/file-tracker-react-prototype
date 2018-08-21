import React from 'react';
import '../styles/InnerTableRow.css';
import { LinkButton } from "../components/LinkButton.js";

export class InnerTableRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        return (
            <tr>
                <td><a href="#"><p className="link-button">{this.props.campus}</p><i className="fas fa-arrow-right"></i></a></td>
                <td>{this.props.received === "empty" ? "--" : <i className={this.props.received === "accepted" ? "fas fa-check table-check" : (this.props.recieved === "failed" ? "fas fa-times table-times table-cross" : "" )}></i>}</td>
                <td>{this.props.data_stage === "empty" ? "--" : <i className={this.props.data_stage === "accepted" ? "fas fa-check table-check" : (this.props.data_stage === "failed" ? "fas fa-times table-times table-cross" : "" )}></i>}</td>
                <td>{this.props.s_and_b === "empty" ? "--" : <i className={this.props.s_and_b === "accepted" ? "fas fa-check table-check" : (this.props.s_and_b === "failed" ? "fas fa-times table-times table-cross" : "" )}></i>}</td>
                <td>{this.props.bi === "empty" ? "--" : <i className={this.props.bi === "accepted" ? "fas fa-check table-check" : (this.props.bi === "failed" ? "fas fa-times table-times table-cross" : "" )}></i>}</td>
                <td>{/*this.props.times_sent*/ getRandomInt(6)}</td>
                <td><LinkButton buttonText="Return" buttonType="small negative"/></td>
            </tr>
        );
    }
}