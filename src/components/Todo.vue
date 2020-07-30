<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field label="New Task" hide-details="auto" v-model=task v-on:keyup.enter="AddNewTodo"></v-text-field>
                    <v-btn v-on:click="AddNewTodo(task)">Add</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list v-for="(todo, id) in todos" v-bind:key="id">{{ todo.textTodo }}<v-btn v-on:click="DoneTodo(todos.indexOf(todo))">Done</v-btn></v-list>
                </v-col></v-row>
                {{ doneTasks }}
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Todo',
        data: () => ({
                todos: [],
                task: '',
                doneTasks: []
        }),
        methods:{
            AddNewTodo() {
                if(this.task === '')
                    return
                this.todos.push({id: new Date(), textTodo: this.task, date: new Date(), alarm: ''})
                this.task = ''
            },
            DoneTodo(a){
                this.doneTasks.push(this.todos[a])
                this.todos.splice(a,1)
            }
        }

    }
</script>