import React, { Component } from 'react';
import $ from "jquery";



class Cover extends Component {
    render() {

        return (
            <div className="cover">
                <h1 className="coverContent">{this.props.title}</h1>
            </div>

        )
    }
}

export default Cover