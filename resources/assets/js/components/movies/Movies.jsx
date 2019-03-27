import React, { Component } from 'react';
import MoviesList from "./MoviesList";
import Movie from "./Movie";

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMovie: null,
        };
        this.onClickShowMovie = this.onClickShowMovie.bind(this);
    }

    onClickShowMovie(movie_id) {
        axios.get('/api/movies/' + movie_id).then(response => {
            this.setState({
                currentMovie: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let currentMovie = this.state.currentMovie ? (
            <div className="col-sm-6"><Movie movie={this.state.currentMovie} /></div>
        ) : null;

        return (
            <div className="row">
                <div className="col-sm-6"><MoviesList onClickShowMovie={this.onClickShowMovie} /></div>
                {currentMovie}
            </div>
        );
    }
}
