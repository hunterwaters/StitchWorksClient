import React from 'react';
import ReactDOM from 'react-dom';
import PaypalButton from './components/PaypalButton';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<PaypalButton />, div);

    ReactDOM.unmountComponentAtNode(div);
});