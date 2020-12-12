import React from 'react';
import ReactDOM from 'react-dom';
import ProductScreen from '../ProductScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ProductScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
