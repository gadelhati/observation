import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { ShipSynopList } from './components/shipsynop/shipsynop.list'
import { ShipSynopItem } from './components/shipsynop/shipsynop.item'
import { ShipSynopMaps } from './components/shipsynop/shipsynop.maps'
import { ShipSynopUpload } from './components/shipsynop/shipsynop.upload'

import { AuthItem } from "./components/auth/auth.item";
import { Profile } from "./components/auth/profile.item";
import BoardUser from "./components/auth/board-user.component";
import BoardModerator from "./components/auth/board-moderator.component";
import BoardAdmin from "./components/auth/board-admin.component";
import { TokenRoutes } from './routes.token'

const Routes = () => (
    <BrowserRouter>
       <Switch>
           <Route exact path={["/", "/dashboard"]} component={ShipSynopList} />
           <Route exact path="/signin" component={AuthItem} />

           <TokenRoutes exact path="/land" component={ShipSynopMaps} />
           <TokenRoutes exact path="/upload" component={ShipSynopUpload} />
           <TokenRoutes exact path="/profile" component={Profile} />
           <TokenRoutes exact path={"/signup"} component={AuthItem} />
           <TokenRoutes exact path={["/item", "/item/:id"]} component={ShipSynopItem} />

           <Route path="/user" component={BoardUser} />
           <Route path="/mod" component={BoardModerator} />
           <Route path="/admin" component={BoardAdmin} />
        </Switch>
    </BrowserRouter>
)

export default Routes;