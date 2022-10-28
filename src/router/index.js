import { createRouter, createWebHistory } from 'vue-router';

import Fish from "../components/Fish.vue";
import Main from "../components/Main.vue";
import SeaCreatures from "../components/SeaCreatures.vue";
import Bugs from "../components/Bugs.vue";
import Fossils from "@/components/Fossils.vue";
import Villagers from "../components/Villagers.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main },
    { path: '/fish', component: Fish },
    { path: '/sea-creatures', component: SeaCreatures },
    { path: '/bugs', component: Bugs },
    { path: '/fossils', component: Fossils },
    { path: '/villagers', component: Villagers },
  ]
})

export default router
