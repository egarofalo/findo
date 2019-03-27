import React, { Component } from 'react';

export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            do_ajax: false,
            people: []
        };
    }

    componentDidMount() {
        axios.get('/api/people').then(response => {
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
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
        );
    }

    cells(person) {
        return (
            <React.Fragment>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
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

    render() {
        if (this.state.people.length > 0) {
            return (
                <React.Fragment>
                    <div className="table-responsive">
                        <table className="table">
                            {this.thead()}
                            {this.tbody()}
                        </table>
                    </div>
                </React.Fragment>
            );
        } else if (this.state.do_ajax) {
            return (
                <div className="alert alert-warning">
                    <p className="m-0">People not found</p>
                </div>
            );
        }
        return '';
    }
}
