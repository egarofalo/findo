import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Movies from "./movies/Movies.jsx";
import PeopleList from "./people/PeopleList.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            people: [],
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Main>
                        <Switch>
                            <Route exact path='/api/movies' component={Movies} />
                            <Route exact path='/api/people' component={PeopleList} />
                        </Switch>
                    </Main>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
