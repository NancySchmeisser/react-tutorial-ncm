import React, { Component } from 'react';
import Customer from '../state/Customer';

interface SearchResultDetailsProps {
    customer: Customer
}

class SearchResultDetails extends Component <SearchResultDetailsProps> {
    render() {
        return (
            <div className="SearchResultDetails">
                <div className="row">
                    <div className="col-6">
                        <b>{this.props.customer.company}</b><br/>
                        {this.props.customer.street} {this.props.customer.houseNumber}<br/>
                        {this.props.customer.zipCode} {this.props.customer.city}<br/>
                    </div>
                    <div className="col">
                        Telephone
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResultDetails;
