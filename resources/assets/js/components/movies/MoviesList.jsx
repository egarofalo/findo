import React, { Component } from 'react';

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            do_ajax: false,
            movies: [],
        };
        this.handleClickShowMovie = this.handleClickShowMovie.bind(this);
    }

    componentDidMount() {
        axios.get('/api/movies').then(response => {
            this.setState({
                do_ajax: true,
                movies: response.data
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
                    <th>Title</th>
                    <th>Release Year</th>
                </tr>
            </thead>
        );
    }

    cells(movie) {
        return (
            <React.Fragment>
                <td>
                    <a onClick={this.handleClickShowMovie} href="#" data-id={movie.id}>{movie.id}</a>
                </td>
                <td>{movie.title}</td>
                <td>{movie.release_year}</td>
            </React.Fragment>
        );
    }

    rows() {
        let movies = [];
        this.state.movies.forEach(movie => {
            movies.push(
                <tr key={movie.id}>
                    {this.cells(movie)}
                </tr>
            );
        });
        return movies;
    }

    tbody() {
        return (
            <tbody>
                {this.rows()}
            </tbody>
        );
    }

    handleClickShowMovie(e) {
        e.preventDefault();
        this.props.onClickShowMovie(e.target.getAttribute('data-id'));
    }

    render() {
        if (this.state.movies.length > 0) {
            return (
                <div className="table-responsive">
                    <table className="table">
                        {this.thead()}
                        {this.tbody()}
                    </table>
                </div>
            );
        } else if (this.state.do_ajax) {
            return (
                <div className="alert alert-warning">
                    <p className="m-0">Movies not found</p>
                </div>
            );
        }
        return '';
    }
}
