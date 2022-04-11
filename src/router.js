import { createRouter, createWebHashHistory } from "vue-router";
import Housing from "./pages/Housing.vue";

const routes = [
    {
        path: '',
        name: 'r.index',
        component: Housing
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;