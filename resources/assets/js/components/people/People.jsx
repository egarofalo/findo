import React, { Component } from 'react';
import PeopleList from "./PeopleList";
import Person from "./Person";

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPerson: null,
            renderPerson: false,
        };
        this.onClickShowPerson = this.onClickShowPerson.bind(this);
        this.onClickClosePerson = this.onClickClosePerson.bind(this);
    }

    onClickShowPerson(person_id) {
        axios.get(route('person', {person: person_id})).then(response => {
            this.setState({
                currentPerson: response.data,
                renderPerson: true
            });
        }).catch(error => {
            console.log(error);
        });
    }

    onClickClosePerson() {
        this.setState({
            renderPerson: false
        });
    }

    render() {
        const currentPerson = this.state.currentPerson && this.state.renderPerson ? <Person person={this.state.currentPerson} onClickCloseModalPerson={this.onClickClosePerson} /> : null;

        return (
            <div>
                <PeopleList onClickShowPerson={this.onClickShowPerson} />
                {currentPerson}
            </div>
        );
    }
}
