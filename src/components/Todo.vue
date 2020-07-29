<template>
    <div>
        <v-text-field label="New Task" hide-details="auto" v-model=task v-on:keyup.enter="AddNewTodo"></v-text-field>
    <v-list>{{ todo }}</v-list>
    <v-btn v-on:click="AddNewTodo(task)">Add</v-btn>
    </div>
</template>
<script>
    export default {
        name: 'Todo',
        data: () => ({
                todo: [
                    {id: Number, textTodo: String, date: String, done: Boolean}
                    ],
                task: ''
        }),
        methods:{
            AddNewTodo() {
                this.todo.push({id: new Date(), textTodo: this.task, date: new Date(), done: false})
                this.task = ''
            },
            DelTodo(){
                console.log('Remove')
            }
        }

    }
</script>