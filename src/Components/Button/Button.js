import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
        handlePlus: PropTypes.func.isRequired
    }
    
    render() {
        return(
            <button onClick = {this.props.handlePlus} className = 'Button'>Load More</button>
        )
    }
}