import React, { Component } from 'react';
import SearchResultDetails from '../SearchResultDetails/SearchResultDetails';
import Customer from '../state/Customer';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SearchResultDetails customer={new Customer("Netzalist GmbH & Co. KG", "Altmarkt", "9", "98574", "Schmalkalden")}/>
      </div>
    );
  }
}

export default App;
