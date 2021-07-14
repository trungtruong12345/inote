import Vue from 'vue'
import Router from 'vue-router';

// component
import Notes from './views/pages/notes/index.vue'
import Vocabularies from './views/pages/vocabularies/index.vue'
import Login from './views/pages/users/login.vue'
import Register from './views/pages/users/registration.vue'
import Change_password from './views/pages/users/change_password.vue'

// middleware
import VueRouteMiddleware from 'vue-route-middleware'
import auth from './middleware/auth.js'

Vue.use(Router)

const routers = new Router({
    mode: 'history',
    routes: [
        { path: '/sign_in', component: Login },
        { path: '/sign_up', component: Register },
        { path: '/change_password', component: Change_password },
        {
            path: '/notes', 
            component: Notes, 
            meta: {
                middleware: auth,
            }
        },
        {
            path: '/vocabularies', 
            component: Vocabularies, 
            meta: {
                middleware: auth,
            }
        },
    ]
})

routers.beforeEach(VueRouteMiddleware());

export default routers