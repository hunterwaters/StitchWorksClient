import React from 'react';
import ReactDOM from 'react-dom';
import ShippingScreen from '../ShippingScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ShippingScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
