import React from "react";
import Navv from "./Navv";
import Home from  './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Feedback from "./Feedback";

export default function App() {
  return (
    <>
      <Router>
        <Navv />
        <Switch>
          <Route exact path="/feedback">
            <Feedback />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Router exact path='/'>
          <Home />
          </Router>
        </Switch>
      </Router>
    </>
  );
}
