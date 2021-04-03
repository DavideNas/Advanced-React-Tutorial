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
            {/* this can render only if "/" is on address bar */}
            <Route exact path="/">
                <Home/>
            </Route>
            {/* type the string you want to view on address bar */}
            <Route path="/about">
                {/* and the page to render */}
                <About/>
            </Route>
            <Route path="/people">
                <People/>
            </Route>
        </Router>
    )
}

export default ReactRouterSetup
