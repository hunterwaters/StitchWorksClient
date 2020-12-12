import React from 'react';
import ReactDOM from 'react-dom';
import LandingScreen from '../LandingScreen';

it('renders the component without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<LandingScreen />, div);

    ReactDOM.unmountComponentAtNode(div);
});