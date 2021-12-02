import React from "react";
import { Route, Redirect } from "react-router-dom";

import TokenService from './services/service.token'

export const TokenRoutes = ({component: Component, ...rest}) => (
    <Route {...rest} render={props=>
        TokenService.getLocalRefreshToken() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/signin', state: { from: props.location} }} />
        )
    } />
)