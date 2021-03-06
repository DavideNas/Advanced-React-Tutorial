import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// React Routing index (main page to routing the others)
// Install:
// 1- npm install react-router-dom
// 2- in package.json file "dependencies" -> "react-router-dom": "^5.2.0"

// pages (import all pages of website)
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
    return (
        <Router>
            <Navbar />
            {/* use 'switch' component to routing one page at time */}
            <Switch>
                {/* this can render only if "/" is on address bar */}
                <Route exact path="/">
                    <Home />
                </Route>
                {/* type the string you want to view on address bar */}
                <Route path="/about">
                    {/* and the page to render */}
                    <About />
                </Route>
                <Route path="/people">
                    <People />
                </Route>
                {/* render Person component if I type 'person' on address bar */}
                {/* it also pass ':id' value from people link */}
                {/* if I change ':orange' the value change also in console, as I use params in component */}
                <Route path="/person/:id" children={<Person/>}>

                </Route>
                {/* use "*" to route all other page */}
                <Route path="*">
                    {/* render error page because they doesn't exists */}
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterSetup;
