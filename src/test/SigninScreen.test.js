import React from 'react';
import ReactDOM from 'react-dom';
import SigninScreen from '../SigninScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<SigninScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
