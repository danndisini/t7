<template>
  <div>
    <h1>From Kegiatan</h1>
    <div class="input-container">
      <input v-model="newTask" placeholder="Tambah Kegiatan" @keyup.enter="addTodo" />
      <button @click="addTodo">Tambah Kegiatan</button>
    </div>

    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <input type="checkbox" :checked="todo.completed" @change="toggleCompletion(index)" />
        <div>
          <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
          <small class="todo-date">{{ todo.date }}</small>
        </div>
        <button @click="removeTodo(index)" class="remove-button">Hapus</button>
      </li>
    </ul>

    <p class="unfinished-count">Belum Selesai  {{ unfinishedCount }}</p>
    <p class="finished-count">Selesai   {{ finishedCount }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  setup() {
    const newTask = ref('');
    const todoStore = useTodoStore();

    const addTodo = () => {
      if (newTask.value.trim()) {
        todoStore.addTodo(newTask.value);
        newTask.value = '';
      }
    };

    const removeTodo = (index) => {
      todoStore.removeTodo(index);
    };

    const toggleCompletion = (index) => {
      todoStore.toggleTodoCompletion(index);
    };

    return {
      newTask,
      addTodo,
      removeTodo,
      toggleCompletion,
      todos: computed(() => todoStore.todos),
      unfinishedCount: computed(() => todoStore.unfinishedCount),
      finishedCount: computed(() => todoStore.finishedCount)
    };
  }
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 8px;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  border: none;
  background-color: #024bf6;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff0000;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.todo-item input[type="checkbox"] {
  margin-right: 10px;
}

.todo-item .completed {
  text-decoration: line-through;
  color: #888;
}

.todo-item .todo-date {
  display: block;
  font-size: 0.8em;
  color: #aaa;
}

.remove-button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #d43f3a;
}

.unfinished-count, .finished-count {
  font-weight: bold;
  margin-top: 20px;
}

</style>
