import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";

import Matches from './Matches';
import Table from './Table';
import News from './News';
import Players from './Players';


export default function Tableheader(props) {
        let token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        function removeAuth(){
            localStorage.removeItem("token");
            // return <Redirect to="/" />
        } 

        if (loggedIn === false) {
            return <Redirect to="/" />
        }
        else {
            return (
                <div>
                    <div className="row" style={{ height: "80px" }}>
                        <div className="col-sm-3 bg-dark text-white">Logo</div>
                        <div className="col-sm-7 bg-dark text-white">Premier League</div>
                        <NavLink className="col-sm-2 bg-dark text-white"  onClick ={removeAuth} to="/">LogOut</NavLink>
                    </div>
                    <Router>
                        <ul className="row" >
                            <NavLink exact to="/matches" className="col-md btn btn-outline-light  bg-dark text-white">
                                MATCHES
                        </NavLink>
                            <NavLink exact to="/news" className="col-md btn btn-outline-light  bg-dark text-white">
                                NEWS
                        </NavLink>
                            <NavLink exact to="/table" className="col-md btn btn-outline-light  bg-dark text-white">
                                TABLE
                        </NavLink>
                            <NavLink exact to="/players" className="col-md btn btn-outline-light  bg-dark text-white">
                                PLAYERS
                        </NavLink>
                        </ul>
                        <Switch>
                            <Route path="/matches" exact> <Matches /> </Route>
                            <Route path="/news" exact> <News /> </Route>
                            <Route path="/table" exact>  <Table /> </Route>
                            <Route path="/players" exact>  <Players /> </Route>
                        </Switch>
                    </Router>
                </div>
            )
        }
    }
