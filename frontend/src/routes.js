import Vue from 'vue'
import Router from 'vue-router';

// component
import Notes from './views/pages/notes/index.vue'
import Vocabularies from './views/pages/vocabularies/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/notes', component: Notes },
        { path: '/vocabularies', component: Vocabularies },
    ]
})



