<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="d-flex">
                    <v-text-field label="New Task" hide-details="auto" v-model=task v-on:keyup.enter="AddNewTodo"></v-text-field>
                    <v-menu
                            v-model="datePick"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    class="pickers"
                                    v-model="date"
                                    label="Pick date"
                                    prepend-icon="event"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" @input="datePick = false"></v-date-picker>
                    </v-menu>
                    <v-menu
                            ref="menu"
                            v-model="timePicker"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :return-value.sync="time"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    class="pickers"
                                    v-model="time"
                                    label="Pick time"
                                    prepend-icon="access_time"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                                v-if="timePicker"
                                v-model="time"
                                full-width
                                @click:minute="$refs.menu.save(time)"
                        ></v-time-picker>
                    </v-menu>
                    <v-btn large v-on:click="AddNewTodo(task)">Add</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list dense>
                        <v-subheader>Todo Tasks</v-subheader>
                        <v-list-item-group color="primary">
                    <v-list-item v-for="(todo, id) in sourceTodos" v-bind:key="id"><v-card-text>{{ todo.textTodo }}</v-card-text><v-btn v-on:click="DoneTodo(sourceTodos.indexOf(todo))">Done</v-btn></v-list-item>
                    </v-list-item-group>
                    </v-list>
                </v-col></v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Todo',
        data: () => ({
                task: '',
                date: '',
                time:'',
                checkbox1: false,
                timePicker: false,
                datePick: false
        }),
        methods:{
            AddNewTodo() {
                if(this.task === '')
                    return
                this.$store.commit('addTodo', { task: this.task, date: this.date, time: this.time})
                this.task = ''
                this.date = ''
                this.time = ''
            },
            DoneTodo(i){
                this.$store.commit('doneTodo', i)
            }
        },
        computed: {
            sourceTodos(){
                return this.$store.state.todos
            }
        }

    }
</script>
<style>
    .pickers{
        max-width: 200px!important;
    }
</style>