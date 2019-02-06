import React, { Component } from 'react';
import Customer from '../state/Customer';
import SearchResult from '../SearchResult/SearchResult';


class App extends Component {
  render() {
    const cust1 = new Customer("Netzalist GmbH & Co. KG", "Altmarkt", "9", "98574", "Schmalkalden");
    const cust2 = new Customer("Bratwurst Heinz", "Neumarkt", "55", "98574", "Schmalkalden");
    const customerList= [cust1, cust2]
    
    return (
      <div className="container-fluid">
        <SearchResult customerList= {customerList}/>
      </div>
    );
  }
}

export default App;
