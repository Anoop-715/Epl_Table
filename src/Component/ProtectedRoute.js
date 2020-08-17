import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './UserToken';

export const ProtectedRoute = ({component:Component,...rest}) =>{
    return(
        <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> :
       <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
    )
}