import React from 'react';
import ReactDOM from 'react-dom';
import ProductsScreen from '../ProductsScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ProductsScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
