<template>
    <div>
        <v-container>
    <v-row>
        <v-col>
            <v-list dense>
            <v-subheader>Done Tasks</v-subheader>
            <v-list-item-group color="red accent-1">
                <v-list-item v-for="(doneTask, id) in doneTasks" v-bind:key="id"><v-card-text>{{ doneTask.textTodo }}</v-card-text><v-btn v-on:click="delTasks(doneTasks.indexOf(doneTask))">delete</v-btn></v-list-item>
            </v-list-item-group>
            </v-list>
        </v-col></v-row>
    </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Done',
        props: ['doneTasks'],
        methods:{
            delTasks(a){
                this.doneTasks.splice(a, 1)
            }
        }
    }

</script>