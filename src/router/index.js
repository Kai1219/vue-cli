import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/IndexView.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'adminproducts',
        name: 'adminproducts',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/OrderView.vue')
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../views/AdminCoupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active' // 定義要啟用的active樣式class的名稱，當啟用時會將linkActiveClass這個classname補上
})

export default router
