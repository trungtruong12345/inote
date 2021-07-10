import Vue from 'vue'
import Router from 'vue-router';

// component
import Notes from './views/pages/notes/index.vue'
import Vocabularies from './views/pages/vocabularies/index.vue'
import Login from './views/pages/users/login.vue'
import Register from './views/pages/users/registration.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/login', component: Login},
        { path: '/register', component: Register},
        { path: '/notes', component: Notes },
        { path: '/vocabularies', component: Vocabularies },
    ]
})