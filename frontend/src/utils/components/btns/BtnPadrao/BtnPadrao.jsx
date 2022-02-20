import React, { Component } from 'react';
import "./BtnPadrao.css";
class BtnPadrao extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <button onClick={this.props.fnct} className="btn-grad">{this.props.btnNome}</button>
        );
    }
}

export default BtnPadrao;
