import React, { Component } from 'react';

interface SearchFormState {
    currentSearchString: string,
}

interface SearchFormProps {
    handleSearchTextChanged: (newSearchText : string) => void
}

class SearchForm extends Component <SearchFormProps, SearchFormState> {
    constructor (props:SearchFormProps){
        super (props)

        this.state= {
            currentSearchString: "",
        }
    }

    handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState ({currentSearchString:event.target.value})
        this.props.handleSearchTextChanged(event.target.value)
    }
    render() {

        return (
            <div>
                <h1>Search Customer</h1>
                <input type="text" className="form-control" placeholder="Search" onChange={this.handleOnChange} value={this.state.currentSearchString} />
            </div>
        );
    }
}

export default SearchForm;
