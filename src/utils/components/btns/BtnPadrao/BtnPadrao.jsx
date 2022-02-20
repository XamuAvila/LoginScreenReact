import React, { Component } from 'react';
import "./BtnPadrao.css";
class BtnPadrao extends Component {
    render() {
        return (
            <button className="btn-grad">{this.props.btnNome}</button>
        );
    }
}

export default BtnPadrao;
