import React from 'react';
import './App.css';

import TableHeader from './Component/Table/Tableheader';
import Login from './Component/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from "./Component/ProtectedRoute";
// import Login2 from './Login2';



function App() {

  return (
    <div className="App">
   
        <Router>
        <>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/content" component={TableHeader} />
          <Route path="*" component={Login} />
          </Switch>
          </>
        </Router>
    
    </div>
  );
}

export default App;
