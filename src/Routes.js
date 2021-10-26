import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './_desktop/Home';
import About from './_desktop/About';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact >
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;