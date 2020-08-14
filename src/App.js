import React from 'react';
import './App.css';

import TableHeader from './Component/Tableheader';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {ProtectedRoute} from "./Component/Protected.route";
import Login2 from './Login2';



function App() {

  return (
    <div className="App">
    
        <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/k" component={Login2} />
          <Route exact path="/content" component={TableHeader} />
          <Route path="*" component={Login} />
          </Switch>
        </Router>
    
    </div>
  );
}

export default App;
