import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
    static propTypes = {
        active: PropTypes.bool,
        handleClose: PropTypes.func.isRequired,
        dataURL: PropTypes.string
    }

    render() { 
        return(
            <div className={this.props.active ? "Overlay active" : "Overlay"} onClick = {this.props.handleClose}>
                <div className="Modal" onClick = {(e) => {e.stopPropagation()}}>
                    <img src = {this.props.dataURL} alt = 'any text'></img>
                </div>
            </div>
        )
    }
}