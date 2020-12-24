import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default class ImageGallery extends Component {

    render() {
        return(
            <ul className = 'ImageGallery'>
                <ImageGalleryItem mass = {this.props.mass} handleOpen = {this.props.handleOpen} />
            </ul>
        )
    }
}