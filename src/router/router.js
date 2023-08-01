import ashurovCard from '../pages/AshurovCard'
import rasulovCard from '../pages/RasulovCard'
import derevitskayaCard from '../pages/DerevitskayaCard'
// import error404 from '../pages/error404'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/ashurovvitaly',
        name: 'ashurovvitaly',
        component: ashurovCard
    },
    {
        path: '/rasulovelshan',
        name: 'rasulovelshan',
        component: rasulovCard
    },
    {
        path: '/derevitskayaevgenia',
        name: 'derevitskayaevgenia',
        component: derevitskayaCard
    }
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'error404',
    //     component: error404
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router