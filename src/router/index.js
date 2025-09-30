import { createRouter, createWebHistory } from "vue-router";
import UserManagement from "@/views/UserManagement.vue";
import PortfolioManagement from "@/views/PortfolioManagement.vue";
import UserPage from "@/views/UserPage.vue";


const routes = [
  { path: "/", redirect: "/users" },
  { path: "/users", name: "Users", component: UserManagement },
  { path: "/portfolios", name: "Portfolios", component: PortfolioManagement },
  {
    path: "/portfolios/:id",
    name: "PortfolioDetail",
    component: () => import("@/components/PortfolioDetail.vue"),
    props: true,
  },
  {path: "/users/:id", name: "UserPage", component: UserPage, props: true},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
