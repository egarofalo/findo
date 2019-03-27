import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <main className="mt-4">
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </main>
        );
    }
}
