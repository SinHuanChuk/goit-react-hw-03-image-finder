import React, { Component } from 'react';

export default class SearchBar extends Component {

    render() {
        return( 
            <header className="Searchbar">
                <form className="SearchForm" onSubmit = {this.props.onSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                    onChange = {this.props.onChange}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"/>
                </form>
            </header>
        )
    }
}