import React, { Component } from 'react';
import MoviesList from "./MoviesList";
import Movie from "./Movie";

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMovie: null,
            renderMovie: false,
        };
        this.onClickShowMovie = this.onClickShowMovie.bind(this);
        this.onClickCloseMovie = this.onClickCloseMovie.bind(this);
    }

    onClickShowMovie(movie_id) {
        axios.get(route('movie', {movie: movie_id})).then(response => {
            this.setState({
                currentMovie: response.data,
                renderMovie: true
            });
        }).catch(error => {
            console.log(error);
        });
    }

    onClickCloseMovie() {
        this.setState({
            renderMovie: false
        });
    }

    render() {
        const currentMovie = this.state.currentMovie && this.state.renderMovie ? <Movie movie={this.state.currentMovie} onClickCloseModalMovie={this.onClickCloseMovie} /> : null;

        return (
            <div>
                <MoviesList onClickShowMovie={this.onClickShowMovie} />
                {currentMovie}
            </div>
        );
    }
}
