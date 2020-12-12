import React from 'react';
import ReactDOM from 'react-dom';
import ProfileScreen from '../ProfileScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ProfileScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});
