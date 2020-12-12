import React from 'react';
import ReactDOM from 'react-dom';
import PlaceOrderScreen from '../PlaceOrderScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<PlaceOrderScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
