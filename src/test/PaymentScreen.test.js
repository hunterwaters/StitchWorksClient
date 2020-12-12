import React from 'react';
import ReactDOM from 'react-dom';
import PaymentScreen from '../PaymentScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<PaymentScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
