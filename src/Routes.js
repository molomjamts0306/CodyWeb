import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './_desktop/Home';
import About from './_desktop/About';
import MobileHome from './_mobile/Home'
import Switcher from './utils/ScreenSwitcher'

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Switcher mobile={MobileHome} desktop={Home} />
                </Route>
                <Route path="/about" exact >
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;