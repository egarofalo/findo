import React, { Component } from 'react';
import Modal from "./../Modal";

export default class Movie extends Component {
    getCasting() {
        return (
            <React.Fragment>
                <h6>Casting:</h6>
                <ul>
                    {this.props.movie.casting.map(person => {
                        return (
                            <li key={`casting-${person.id}`}>
                                {person.first_name} {person.last_name}
                            </li>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }

    getDirectors() {
        return (
            <React.Fragment>
                <h6>Directors:</h6>
                <ul>
                    {this.props.movie.directors.map(person => {
                        return (
                            <li key={`directors-${person.id}`}>
                                {person.first_name} {person.last_name}
                            </li>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }

    getProducers() {
        return (
            <React.Fragment>
                <h6>Producers:</h6>
                <ul>
                    {this.props.movie.producers.map(person => {
                        return (
                            <li key={`producers-${person.id}`}>
                                {person.first_name} {person.last_name}
                            </li>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }

    render() {
        const movie = this.props.movie;

        let modalBody = (
            <div>
                <p>
                    <b>Release Year:</b> {movie.release_year}
                </p>
                <div>
                    {this.getCasting()}
                    {this.getDirectors()}
                    {this.getProducers()}
                </div>
            </div>
        );
        const modalFooter = <button className="btn btn-primary" data-dismiss="modal" onClick={this.props.onClickCloseModalMovie}>Close</button>;

        return movie ? (
            <Modal title={movie.title} body={modalBody} footer={modalFooter} id="modal-movie" />
        ) : null;
    }
}
