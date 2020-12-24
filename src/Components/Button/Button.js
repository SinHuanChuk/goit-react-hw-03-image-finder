import React, { Component } from 'react';

export default class Button extends Component {
    
    render() {
        return(
            <button onClick = {this.props.handlePlus} className = 'Button'>Load More</button>
        )
    }
}