import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/HomePage.vue';
import AboutPage from '@/Pages/AboutPage.vue';
import ContactPage from '@/Pages/ContactPage.vue';
import CssPage from '@/Resorces/CssPage.vue';
import HtmlPage from '@/Resorces/HtmlPage.vue';
import DockerPage from '@/Resorces/DockerPage.vue';
import PodmanPage from '@/Resorces/PodmanPage.vue';
import ResourcePage from '@/Pages/ResourcePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/contact-us',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/CSS',
    name: 'CssPage',
    component: CssPage
  },
  {
    path: '/HTML',
    name: 'HtmlPage',
    component: HtmlPage
  },
  {
    path: '/Docker',
    name: 'DockerPage',
    component: DockerPage
  },
  {
    path: '/Podman',
    name: 'PodmanPage',
    component: PodmanPage
  },
  {
    path: '/resources',
    name: 'ResourcePage',
    component: ResourcePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
