import type { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
import test from '@/router/modules/test'
/**
 * 基础路由
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/table-A',
    // redirect: '/index',
    component: layout,
    meta: { title: '' },
    children: [...test],
  },
]

const routes = [...basePage]

export default routes
