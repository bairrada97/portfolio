import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Interests from './views/Interests.vue';
import ProjectDetail from './views/ProjectDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CC',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/interests',
      name: 'interests',
      component: Interests,
    },
    {
      path: '/project/:name',
      name: 'projectDetail',
      component: ProjectDetail,
    },
  ],
});
