import { constants } from "../types/constants.permissions"
// import { cilPeople, cilListRich, cilTag, cilCloudUpload, cilLocationPin } from '@coreui/icons';

export const navigation = [
    {
        _tag: 'CSidebarNavItem',
        name: 'Observations',
        icon: 'cilListRich',
        to: '/observation/#/dashboard',
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Cadastros'],
        requiredPermission: [...constants.ROLE_USER],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Item',
        to: '/observation/#/item',
        icon: 'cilTag',
        requiredPermission: [...constants.ROLE_USER],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Upload',
        to: '/observation/#/upload',
        icon: 'cilCloudUpload',
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Land',
        to: '/observation/#/land',
        icon: 'cilLocationPin',
        public: 'public',
        requiredPermission: [...constants.ROLE_USER],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Signin',
        to: '/observation/#/signin',
        icon: 'cilPeople',
        public: 'public',
        requiredPermission: [...constants.ROLE_USER],
    }
]