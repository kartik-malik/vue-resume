import {createRouter, createWebHistory} from 'vue-router';
import About from './components/Portfolio.vue';
import Home from './components/Home.vue'
import Contact from './components/ContactForm.vue'
import ProjectPage from './components/ProjectPage.vue'
const router =createRouter({
    history:createWebHistory(), 
    routes:[
        {
            path:'/',component:Home
        },
        {
            path:'/about',component:About
        },
        {
            path:'/contact',component:Contact
        },
        {
            path:'/projects',component:ProjectPage
        }
        
    ]
});

export default router;