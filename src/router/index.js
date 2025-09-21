import { createRouter, createWebHistory } from 'vue-router';
import PortfolioList from '../views/PortfolioList.vue';
import PortfolioForm from '../views/PortfolioForm.vue';
import UserList from '../components/UserList.vue';
import UserForm from '../components/UserForm.vue';

const routes = [
  { path: '/', redirect: '/portfolios' },
  { path: '/portfolios', component: PortfolioList },
  { path: '/portfolios/new', component: PortfolioForm },
  { path: '/portfolios/:id/edit', component: PortfolioForm },
  { path: '/users', component: UserList },
  { path: '/users/new', component: UserForm },
  { path: '/users/:id/edit', component: UserForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
