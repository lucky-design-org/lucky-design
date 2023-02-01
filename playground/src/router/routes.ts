import dynamicRoutes from './dynamicRoutes'

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
  },
  ...dynamicRoutes(),
]

export default routes
