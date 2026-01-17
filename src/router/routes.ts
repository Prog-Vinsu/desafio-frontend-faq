import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'agendar', component: () => import('pages/SchedulePage.vue') },
      { path: 'meus-agendamentos', component: () => import('pages/AppointmentsPage.vue') },
      { path: 'faq', component: () => import('pages/FaqPage.vue') },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
