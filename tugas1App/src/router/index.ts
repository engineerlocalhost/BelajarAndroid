import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Example from '/home/kali/kampus/BelajarAndroid/tugas1App/src/components/ExploreContainer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: Example,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('/home/kali/kampus/BelajarAndroid/tugas1App/src/views/HomePage.vue'),
      },
      {
        path: 'radio',
        component: () => import('/home/kali/kampus/BelajarAndroid/tugas1App/src/views/RadioPage.vue'),
      },
      {
        path: 'library',
        component: () => import('/home/kali/kampus/BelajarAndroid/tugas1App/src/views/LibraryPage.vue'),
      },
      {
        path: 'search',
        component: () => import('/home/kali/kampus/BelajarAndroid/tugas1App/src/views/SearchPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;