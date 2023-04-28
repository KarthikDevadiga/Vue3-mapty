import { createRouter, createWebHistory } from 'vue-router';
import AppUserD from '../components/AppUserD.vue';
import LandingPage from '../views/AppLandingPage.vue';
import UserDetail from '../views/AppUserDetails.vue';

const routes = [
  {
    name: 'landing',
    path: '/',
    components: { main: LandingPage },
  },
  {
    name: 'user',
    path: '/user',
    components: { main: AppUserD },
  },
  {
    name: 'userDetail',
    path: '/user/detail',
    components: {
      userInfo: UserDetail,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
