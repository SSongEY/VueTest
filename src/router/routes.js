import Dashboard from '../views/Dashboard.vue';
import Projects from '../views/Projects.vue';
import Team from '../views/Team.vue';

import Cards from '../views/Cards';
import Buttons from '../views/Buttons.vue';
import Tables from '../views/Tables.vue';
import Charts from '../views/Charts.vue';

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
        icon: 'dashboard',
        component: Cards
    },
    {
        path: '/buttons',
        name: 'Buttons',
        icon: 'dashboard',
        component: Buttons
    },
    {
        path: '/tables',
        name: 'Tables',
        icon: 'dashboard',
        component: Tables
    },
    {
        path: '/charts',
        name: 'Charts',
        icon: 'dashboard',
        component: Charts
    },
    {
        path: '/projects',
        name: 'projects',
        icon: 'dashboard',
        component: Projects
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/team',
        name: 'team',
        icon: 'dashboard',
        component: Team
    }
];
export default routes;
