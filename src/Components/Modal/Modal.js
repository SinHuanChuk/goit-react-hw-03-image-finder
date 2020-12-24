import React, { Component } from 'react';

export default class Modal extends Component {

    render() { 
        return(
            <div className={this.props.active ? "Overlay active" : "Overlay"} onClick = {this.props.handleClose}>
                <div className="Modal" onClick = {(e) => {e.stopPropagation()}}>
                    <img src={this.props.dataURL} alt="" />
                </div>
            </div>
        )
    }
}