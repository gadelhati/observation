import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getLocalRefreshToken } from "../services/service.token"

export const TokenRoutes = ({component: Component, ...rest}) => (
    <Route {...rest} render={props=>
        getLocalRefreshToken() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/#/signin', state: { from: props.location} }} />
        )
    } />
)