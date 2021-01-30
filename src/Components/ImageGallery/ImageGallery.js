import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
    static propTypes = {
        mass: PropTypes.array,
        handleOpen: PropTypes.func.isRequired
    }

    render() {
        return(
            <ul className = 'ImageGallery'>
                <ImageGalleryItem mass = {this.props.mass} handleOpen = {this.props.handleOpen} />
            </ul>
        )
    }
}