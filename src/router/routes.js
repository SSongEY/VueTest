import Dashboard from '../views/Dashboard.vue';

import Cards from '../views/Cards';
import Buttons from '../views/Buttons.vue';
import Tables from '../views/Tables.vue';
import Charts from '../views/Charts.vue';
import Progresses from '../views/Progresses.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: 'dashboard',
        component: Dashboard
    },
    {
        path: '/cards',
        name: 'Cards',
        icon: 'settings_system_daydream',
        component: Cards
    },
    {
        path: '/buttons',
        name: 'Buttons',
        icon: 'format_bold',
        component: Buttons
    },
    {
        path: '/tables',
        name: 'Tables',
        icon: 'border_all',
        component: Tables
    },
    {
        path: '/progresses',
        name: 'Progresses',
        icon: 'rotate_right',
        component: Progresses
    },
    {
        path: '/charts',
        name: 'Charts',
        icon: 'insert_chart_outlined',
        component: Charts
    },
    // {
    //     path: '/projects',
    //     name: 'projects',
    //     icon: 'dashboard',
    //     component: Projects
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    // {
    //     path: '/team',
    //     name: 'team',
    //     icon: 'dashboard',
    //     component: Team
    // }
];
export default routes;
