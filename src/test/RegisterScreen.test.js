import React from 'react';
import ReactDOM from 'react-dom';
import RegisterScreen from '../RegisterScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<RegisterScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
