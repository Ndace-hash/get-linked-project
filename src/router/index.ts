import { createWebHistory, createRouter} from 'vue-router'
import HomeView from '../pages/index.vue'

export default createRouter({
    history: createWebHistory(),
    routes:[{
        name: 'home',
        path: '/',
        component: HomeView
    }],


})