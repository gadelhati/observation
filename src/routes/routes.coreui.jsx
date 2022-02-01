import React from 'react';
import { constants } from "../types/constants.permissions"

const ShipSynopList = React.lazy(() => import ('../components/shipsynop/shipsynop.list'))
const ShipSynopItem = React.lazy(() => import('../components/shipsynop/shipsynop.item.coreui'))
const ShipSynopMaps = React.lazy(() => import ('../components/map/shipsynop.maps'))
const ShipSynopUpload = React.lazy(() => import ('../components/upload/shipsynop.upload'))
// const Lista = React.lazy(() => import ('../components/shipsynop/shipsynop.list.coreui'))
const AuthItem = React.lazy(() => import ('../components/auth/auth.item'))
// const Profile = React.lazy(() => import ('../containers/profile"'))
// const TokenRoutes = React.lazy(() => import ('./routes.token'))

const routes = [
    // {path: '/', requiredPermissions:[...constants.ROLE_ADMIN,...constants.ROLE_USER], exact: true, name: 'Principal', component: Movimentacao},
    {path: '/list', requiredPermissions:[...constants.ROLE_ADMIN,...constants.ROLE_USER], isPrivate: false, isAdmin: false, name: 'Item', component: ShipSynopList},
    {path: '/signin', requiredPermissions:[...constants.ROLE_ADMIN,...constants.ROLE_USER], isPrivate: false, isAdmin: false, name: 'Item', component: AuthItem},
    {path: '/signup', requiredPermissions:[...constants.ROLE_ADMIN,...constants.ROLE_USER], isPrivate: false, isAdmin: false, name: 'Item', component: AuthItem},
    {path: '/land', requiredPermissions:[...constants.ROLE_ADMIN,...constants.ROLE_USER], isPrivate: false, isAdmin: false, name: 'Item', component: ShipSynopMaps},
    {path: '/upload', requiredPermissions:[...constants.ROLE_ADMIN,...constants.ROLE_USER], isPrivate: false, isAdmin: false, name: 'Item', component: ShipSynopUpload},
    
    // {path: ['/item, /item/:id'], requiredPermissions:[...constants.ROLE_ADMIN,...constants.ROLE_USER], isPrivate: false, isAdmin: false, name: 'Item', component: ShipSynopItem},
];

export default routes;
