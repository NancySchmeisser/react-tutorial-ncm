import React, { Component, useImperativeHandle } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import Customer from '../state/Customer';

interface SearchState {
    customerList: Customer [],
    allCustomers: Customer [],
}
class Search extends Component <{}, SearchState> {
    constructor (props:{}) {
        super(props)

        const cust1 = new Customer("Netzalist GmbH & Co. KG", "Altmarkt", "9", "98574", "Schmalkalden");
        const cust2 = new Customer("Bratwurst Heinz", "Neumarkt", "55", "98574", "Schmalkalden");
        const customerList= [cust1, cust2]  

        this.state={
            customerList: customerList,
            allCustomers: customerList,
        }
    }

    handleSearchTextChanged=(newSearchText: string) => {
        newSearchText = newSearchText.toLowerCase();
        const result=this.state.allCustomers.filter(value=> { return value.company.toLowerCase().indexOf(newSearchText)>-1 || value.street.toLowerCase().indexOf(newSearchText)>-1 } )
        this.setState({customerList:result})
    }

    render() {

        return (
            <div>
                <SearchForm handleSearchTextChanged={this.handleSearchTextChanged}/>
                <SearchResult customerList= {this.state.customerList}/>
            </div>
        );
    }
}

export default Search;
