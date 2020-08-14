import React, { Component } from "react";
import {Route, Redirect} from "react-router-dom";
import login from '../Login';

export const ProtectedRoute = ({component:Component,...rest}) =>{
    return(
        <Route
         {...rest}
        render={props =>{
            if(1){
            return <Component {...props} />
        }
        else{
            return ( <Redirect to={{
                pathname:"/",
                state:{
                    from:props.location
                }
            }}
             /> );
        }}}
        />
    )
}