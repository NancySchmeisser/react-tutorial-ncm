import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';
import Customer from '../state/Customer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const cust1 = new Customer("Netzalist GmbH & Co. KG", "Altmarkt", "9", "98574", "Schmalkalden");
  const cust2 = new Customer("Bratwurst Heinz", "Neumarkt", "55", "98574", "Schmalkalden");
  const customerList= [cust1, cust2]

  ReactDOM.render(<SearchResult customerList={customerList} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
