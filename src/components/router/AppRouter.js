import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import {AboutPage} from '../views/About/AboutPage';
import {ContactPage} from '../views/Contact/ContactPage';
import {HomePage} from '../views/Home/HomePage';


export const AppRouter = () => {
    return(
        <Router>
            <div>
                <div className="container">
                    <div className="row">
                        <nav>
                            <ul>
                                <li> <Link to="/" >Home</Link> </li>
                                <li> <Link to="/About" >About</Link> </li>
                                <li> <Link to="/Contact" >Contact</Link> </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/About" component={AboutPage} />
                            <Route path="/Contact" component={ContactPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}