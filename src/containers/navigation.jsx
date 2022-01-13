import { constants } from "../types/constants.permissions"

export const navigation = [
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Movimentações'],
        requiredPermission: [...constants.ROLE_ADMIN, ...constants.ROLE_USER],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Movimentações',
        to: '/',
        icon: 'cil-swap-horizontal',
        public: 'public',
        requiredPermission: [...constants.ROLE_ADMIN, ...constants.ROLE_USER],
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
        icon: 'cil-people',
        public: 'public',
        requiredPermission: [...constants.ROLE_USER],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Solicitação',
        icon: 'cil-cursor',
        to: '/solicitacao',
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Aprovação',
        icon: 'cil-bell',
        to: '/aprovacao',
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Ratificação',
        icon: 'cil-thumb-up',
        to: '/ratificacao',
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Cadastros'],
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Grupo',
        to: '/grupo',
        icon: 'cil-check-circle',
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Equipamento',
        to: '/equipamento',
        icon: 'cil-compass',
        requiredPermission: [...constants.ROLE_ADMIN],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Fabricante',
        to: '/fabricante',
        icon: 'cil-settings',
        requiredPermission: [...constants.ROLE_ADMIN],
    }
]