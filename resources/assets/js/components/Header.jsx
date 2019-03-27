import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

export default class Header extends Component {
    render() {
        return (
            <header role="banner">
                <Navbar />
            </header>
        );
    }
}
