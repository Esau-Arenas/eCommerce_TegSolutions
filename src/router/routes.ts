import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'faq', component: () => import('pages/FAQPage.vue') },
      { path: 'checkout', component: () => import('pages/CheckoutPage.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/checkout',
    component: () => import('pages/CheckoutPage.vue'),
  },
]

export default routes
