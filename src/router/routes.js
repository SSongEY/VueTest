import Dashboard from '../views/Dashboard.vue';

import Cards from '../views/_dev/Cards';
import Buttons from '../views/_dev/Buttons.vue';
import Tables from '../views/_dev/Tables.vue';
import Charts from '../views/_dev/Charts.vue';
import Progresses from '../views/_dev/Progresses.vue';
import Login from '../views/Login';

const routes = [
    {
        path: '/',
        type: "menu",
        name: 'Dashboard',
        icon: 'dashboard',
        component: Dashboard
    },
    {
        path : '/login',
        type: 'hidden',
        name: 'Login',
        component : Login
    },
];
export default routes;
