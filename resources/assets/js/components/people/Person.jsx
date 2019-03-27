import React, { Component } from 'react';
import Modal from "./../Modal";

export default class Person extends Component {
    getMoviesAsActorActress() {
        return (
            <React.Fragment>
                <h6>Movies as actor/actress:</h6>
                <ul>
                    {this.props.person.movies_as_actor_actress.map(movie => {
                        return (
                            <li key={`movies_as_actor_actress-${movie.id}`}>
                                {movie.title} ({movie.release_year})
                            </li>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }

    getMoviesAsDirector() {
        return (
            <React.Fragment>
                <h6>Movies as director:</h6>
                <ul>
                    {this.props.person.movies_as_director.map(movie => {
                        return (
                            <li key={`movies_as_directors-${movie.id}`}>
                                {movie.title} ({movie.release_year})
                            </li>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }

    getMoviesAsProducer() {
        return (
            <React.Fragment>
                <h6>Movies as producer:</h6>
                <ul>
                    {this.props.person.movies_as_producer.map(movie => {
                        return (
                            <li key={`movies_as_producers-${movie.id}`}>
                                {movie.title} ({movie.release_year})
                            </li>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }

    render() {
        const person = this.props.person;

        let modalBody = (
            <div>
                <p>
                    <b>Full Name:</b> {person.first_name} {person.last_name}
                    {person.aliases ? `<b>Aliases:</b> + ${person.aliases}` : null}
                </p>
                <div>
                    {this.getMoviesAsActorActress()}
                    {this.getMoviesAsDirector()}
                    {this.getMoviesAsProducer()}
                </div>
            </div>
        );
        const modalFooter = <button className="btn btn-primary" data-dismiss="modal" onClick={this.props.onClickCloseModalPerson}>Close</button>;

        return person ? (
            <Modal title={person.last_name} body={modalBody} footer={modalFooter} id="modal-person" />
        ) : null;
    }
}
