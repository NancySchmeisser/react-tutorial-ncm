import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import Customer from '../state/Customer';


class Search extends Component {
    render() {
        const cust1 = new Customer("Netzalist GmbH & Co. KG", "Altmarkt", "9", "98574", "Schmalkalden");
        const cust2 = new Customer("Bratwurst Heinz", "Neumarkt", "55", "98574", "Schmalkalden");
        const customerList= [cust1, cust2]
        

        return (
            <div>
                <SearchForm/>
                <SearchResult customerList= {customerList}/>
            </div>
        );
    }
}

export default Search;
