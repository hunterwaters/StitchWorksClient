import React from 'react';
import ReactDOM from 'react-dom';
import CartScreen from '../CartScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<CartScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});


