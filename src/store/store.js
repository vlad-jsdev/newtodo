import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [], // All to do tasks
        doneTasks: [] //All done tasks
    },

    getters: {
        // Here we will create a getter
        sortByIdStore: state => {
            function compare (a, b) {
                if ( a.id > b.id ){
                    return -1;
                }
                if ( a.id < b.id ){
                    return 1;
                }
                return 0;
            }
            return state.todos.sort(compare)
        }
    },

    mutations: {
        startLocal(state){
            if (localStorage.getItem('todos') || localStorage.getItem('doneTasks')) {
                try {
                    state.todos = JSON.parse(localStorage.getItem('todos'))
                    state.doneTasks = JSON.parse(localStorage.getItem('doneTasks'))
                } catch(e) {
                    localStorage.removeItem('todos')
                    localStorage.removeItem('doneTasks')
                }
            }
        },
        addTodo(state, item){
            state.todos.push({id: new Date(), textTodo: item.task, date: item.date, time: item.time}) //push todos to storage
            localStorage.setItem('todos', JSON.stringify(state.todos)) // Write to localStorage todos
        },
        doneTodo(state, i){
            state.doneTasks.push(state.todos[i])
            state.todos.splice(i, 1)
            localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks))
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        delTodo(state, i){
            state.doneTasks.splice(i, 1)
            localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks))
        },
        editTodo(state, i){
            state.todos.splice(i.i, 1, {id: i.id, textTodo: i.task, date: i.date, time: i.time})
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    },

    actions: {
    }
});