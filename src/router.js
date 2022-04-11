import { createRouter, createWebHashHistory } from "vue-router";
import { R_INDEX, R_WORLD } from "./constants";
import Index from "./pages/Index.vue";
import World from "./pages/World.vue";

const routes = [
    {
        path: '',
        name: R_INDEX,
        component: Index
    },
    {
        path: '/world/:worldId',
        name: R_WORLD,
        component: World
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;