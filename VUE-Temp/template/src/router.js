import { createRouter, createWebHistory } from "vue-router"

import HomePage from "@/pages/HomePage.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/other',
        name: 'other',
        component: () => import('@/pages/OtherPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router