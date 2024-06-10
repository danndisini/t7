import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '../TodoList/TodoList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoList
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
