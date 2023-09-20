import { createWebHistory, createRouter} from 'vue-router'
import HomePage from '@/pages/index.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes:[{
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterPage
    }
],


})