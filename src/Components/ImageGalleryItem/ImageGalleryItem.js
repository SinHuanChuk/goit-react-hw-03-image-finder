import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {

    render() {
        return(
            this.props.mass.map(({id, largeImageURL, tags}) => {
                return <li onClick = {this.props.handleOpen} key = {id} className = 'ImageGalleryItem'><img alt = {tags} className = 'ImageGalleryItem-image' src = {largeImageURL} data-img = {largeImageURL}/></li>
            })
        )
    }
}