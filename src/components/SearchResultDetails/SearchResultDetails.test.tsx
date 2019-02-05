import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultDetails from './SearchResultDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResultDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
