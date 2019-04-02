import React, { Component } from 'react';

export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            do_ajax: false,
            people: []
        };
        this.handleClickShowPerson = this.handleClickShowPerson.bind(this);
    }

    componentDidMount() {
        axios.get(route('people')).then(response => {
            this.setState({
                do_ajax: true,
                people: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    thead() {
        return (
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Aliases</th>
                </tr>
            </thead>
        );
    }

    cells(person) {
        return (
            <React.Fragment>
                <td><a onClick={this.handleClickShowPerson} href="#" data-id={person.id}>{person.id}</a></td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.aliases ? person.aliases : '--'}</td>
            </React.Fragment>
        );
    }

    rows() {
        let people = [];
        this.state.people.forEach(person => {
            people.push(
                <tr key={person.id}>
                    {this.cells(person)}
                </tr>
            );
        });
        return people;
    }

    tbody() {
        return (
            <tbody>
                {this.rows()}
            </tbody>
        );
    }

    handleClickShowPerson(e) {
        e.preventDefault();
        this.props.onClickShowPerson(e.target.getAttribute('data-id'));
    }

    render() {
        if (this.state.people.length > 0) {
            return (
                <div className="table-responsive">
                    <table className="table table-striped">
                        {this.thead()}
                        {this.tbody()}
                    </table>
                </div>
            );
        } else if (this.state.do_ajax) {
            return (
                <div className="alert alert-warning">
                    <p className="m-0">People not found</p>
                </div>
            );
        }
        return null;
    }
}
