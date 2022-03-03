import { createRouter, createWebHashHistory } from "vue-router";
import Calculator from "../views/Calculator.vue";
import Feedback from "../views/Feedback.vue";
import RegisterUser from "../views/UserRegistration.vue";
import Login from "../views/LogIn.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/calculator",
    name: "calculator",
    component: Calculator,
  },
  {
    path: "/Feedback",
    name: "feedback",
    component: Feedback,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
