import directorCard from '../pages/DirectorCard'
import error404 from '../pages/error404'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/ashurovvitaly',
        name: 'ashurovvitaly',
        component: directorCard
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error404',
        component: error404
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router