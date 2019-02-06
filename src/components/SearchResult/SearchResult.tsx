import React, { Component } from 'react';
import Customer from '../state/Customer';
import SearchResultDetails from '../SearchResultDetails/SearchResultDetails';

interface SearchResultProps {
    customerList: Customer []
}

class SearchResult extends Component <SearchResultProps> {
    render() {

        return (
            <div className="SearchResult">
                { this.props.customerList.map(value => <SearchResultDetails key={value.company} customer={value}/>) }
            </div>
        );
    }
}

export default SearchResult;
