import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutSteps from './components/CheckoutSteps';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<CheckoutSteps />, div);

    ReactDOM.unmountComponentAtNode(div);
});
