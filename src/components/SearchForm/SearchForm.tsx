import React, { Component } from 'react';


class SearchForm extends Component {
    render() {

        return (
            <div>
                <h1>Search Customer</h1>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        );
    }
}

export default SearchForm;
