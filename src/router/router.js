import directorCard from '../pages/DirectorCard'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/ashurovvitaly',
        name: 'ashurovvitaly',
        component: directorCard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router