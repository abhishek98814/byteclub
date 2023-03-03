import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue"
import EventView from "../view/EventView.vue"
import ourpresence from "../view/ourpresence.vue"
import team from "../view/team.vue"
import blog from "../view/Blogview.vue"
import contactv from "../view/contactview.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        
        {
            path: "/event",
            name:"event",
            component: EventView
        },
        {
            path:"/presence",
            name:"presence",
            component: ourpresence
        },
        {
            path:"/team",
            name:"ourteam",
            component: team
        },
        {
            path:"/blog",
            name:"blog",
            component:blog
        },
    {
        path:"/contact",
        name:"contact",
        component: contactv
    }
    ]
})

export default router