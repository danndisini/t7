import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
state: () => ({
    todos: []
}),
actions: {
    addTodo(task) {
      const date = new Date().toLocaleString(); // Menyimpan tanggal dan waktu saat tugas ditambahkan
    this.todos.push({ task, completed: false, date });
    },
    removeTodo(index) {
    this.todos.splice(index, 1);
    },
    toggleTodoCompletion(index) {
    this.todos[index].completed = !this.todos[index].completed;
    }
},
getters: {
    unfinishedCount: (state) => state.todos.filter(todo => !todo.completed).length,
    finishedCount: (state) => state.todos.filter(todo => todo.completed).length
}
});
