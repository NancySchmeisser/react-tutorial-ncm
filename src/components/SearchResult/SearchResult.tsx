import React, { Component } from 'react';
import Customer from '../state/Customer';
import SearchResultDetails from '../SearchResultDetails/SearchResultDetails';

interface SearchResultProps {
    customerList: Customer []
}

class SearchResult extends Component <SearchResultProps> {
    render() {

        return (
            <div className="SearchResult" style={ { width: "600px", marginTop:"40px" }}>
                { this.props.customerList.map(value => <div><SearchResultDetails key={value.company} customer={value}/><hr /></div>) }
            </div>
        );
    }
}

export default SearchResult;
