import { createRouter, createWebHistory } from 'vue-router';

import HomeShopContent from "@/components/HomeShopContent.vue";
import AboutUs from "@/components/AboutUs.vue";
import CategoryProducts from "@/components/CategoryProducts.vue";
import SearchProduct from "@/components/SearchProduct.vue";

const routes = [
    {path: '/', component: HomeShopContent, name: 'Home'},
    {path: '/about', component: AboutUs, name: 'About'},
    {path: '/category/:categoryName', component: CategoryProducts, name: 'CategoryProduct'},
    {path: '/search/:searchText', component: SearchProduct, name: 'SearchProduct'},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;