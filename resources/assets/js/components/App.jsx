import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Movies from "./movies/Movies";
import People from "./people/People";

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
                            <Route exact path='/movies' component={Movies} />
                            <Route exact path='/people' component={People} />
                        </Switch>
                    </Main>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
