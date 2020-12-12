import React from 'react';
import ReactDOM from 'react-dom';
import OrdersScreen from '../OrdersScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<OrdersScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
