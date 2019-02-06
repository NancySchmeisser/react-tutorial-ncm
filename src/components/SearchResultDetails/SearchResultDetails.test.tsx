import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultDetails from './SearchResultDetails';
import Customer from '../state/Customer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testdata=new Customer("Netzalist", "Altmarkt", "9", "98574", "Schmalkalden");
  ReactDOM.render(<SearchResultDetails customer={testdata}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
