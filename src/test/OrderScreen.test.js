import React from 'react';
import ReactDOM from 'react-dom';
import OrderScreen from '../OrderScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<OrderScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
