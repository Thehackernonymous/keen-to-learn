import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/HomePage.vue';
import AboutPage from '@/Pages/AboutPage.vue';
import ContactPage from '@/Pages/ContactPage.vue';
import CssPage from '@/Resorces/Frontend/CssPage.vue';
import HtmlPage from '@/Resorces/Frontend/HtmlPage.vue';
import DockerPage from '@/Resorces/Devops/DockerPage.vue';
import PodmanPage from '@/Resorces/Devops/PodmanPage.vue';
import JsPage from '@/Resorces/Frontend/JsPage.vue';
import NodePage from '@/Resorces/Backend/NodePage.vue';
import MongoDB from '@/Resorces/Database/MongoDB.vue';
import Postgres from '@/Resorces/Database/Postgres.vue';
import MySql from '@/Resorces/Database/MySql.vue';
import ResourcePage from '@/Pages/ResourcePage.vue';
import AllEmp from '@/Pages/AllEmp.vue';

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
  },
  {
    path: '/all-emp',
    name: 'AllEmp',
    component: AllEmp
  },
  {
    path: '/JavaScript',
    name: 'JsPage',
    component: JsPage
  },
  {
    path: '/NodeJs',
    name: 'NodePage',
    component: NodePage
  },
  {
    path: '/MongoDb',
    name: 'MongoDB',
    component: MongoDB
  },
  {
    path: '/PostgreSql',
    name: 'Postgres',
    component: Postgres
  },
  {
    path: '/MySql',
    name: 'MySql',
    component: MySql
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
