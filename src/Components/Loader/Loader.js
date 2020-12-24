import React, { Component } from 'react';
import Spinner from "react-loader-spinner";

export default class Loader extends Component {

    render() {
        return(
            <Spinner className = "Loader" type="Puff" color="#00BFFF" />
        )
    }
}