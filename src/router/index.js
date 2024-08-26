import { createRouter, createWebHistory } from 'vue-router';

import HomeShopContent from "@/components/HomeShopContent.vue";
import AboutUs from "@/components/AboutUs.vue";
import CategoryProducts from "@/components/CategoryProducts.vue";

const routes = [
    {path: '/', component: HomeShopContent, name: 'Home'},
    {path: '/about', component: AboutUs, name: 'About'},
    {path: '/:categoryName', component: CategoryProducts, name: 'CategoryProduct'},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;