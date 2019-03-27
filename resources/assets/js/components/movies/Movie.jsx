import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
        let movie = this.props.movie;

        return movie ? (
            <div className="card">
                <div className="card-header">
                    <h5>{movie.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {movie.release_year}
                    </p>
                </div>
            </div>
        ) : null;
    }
}
