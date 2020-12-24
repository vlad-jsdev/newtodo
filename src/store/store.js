import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [], // All to do tasks
        doneTasks: [] //All done tasks
    },

    getters: {

    },

    mutations: {
        startLocal(state) {
            if (localStorage.getItem('todos') || localStorage.getItem('doneTasks')) {
                try {
                    state.todos = JSON.parse(localStorage.getItem('todos'))
                    state.doneTasks = JSON.parse(localStorage.getItem('doneTasks'))
                } catch (e) {
                    localStorage.removeItem('todos')
                    localStorage.removeItem('doneTasks')
                }
            }

            // fetch('https://jsonplaceholder.typicode.com/todos')
            //     .then(response => response.json())
            //     .then(data => state.todos = data)
        },
        addTodo(state, item) {
            state.todos.unshift({ id: new Date(), textTodo: item.task, date: item.date, time: item.time }) //push todos to storage
            localStorage.setItem('todos', JSON.stringify(state.todos)) // Write to localStorage todos
        },
        doneTodo(state, i) {
            state.doneTasks.push(state.todos[i])
            state.todos.splice(i, 1)
            localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks))
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        delTodo(state, i) {
            state.doneTasks.splice(i, 1)
            localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks))
        },
        editTodo(state, i) {
            state.todos.splice(i.i, 1, { id: i.id, textTodo: i.task, date: i.date, time: i.time })
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        saveTodo(state, i) {
            state.todos = i
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    },

    actions: {}
});