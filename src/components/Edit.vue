<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <h3>Change Task</h3>
                    <v-text-field v-model=task v-on:keyup.enter="editTodo"></v-text-field>
                </v-col></v-row>
            <v-row>
                <v-col>
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
                                    label="Change or pick date"
                                    prepend-icon="event"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" @input="datePick = false"></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
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
                                    label="Change or pick time"
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
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="2">
                    <v-btn v-on:click="editTodo">Save</v-btn>
                </v-col>
                <v-col cols="2">
                    <v-btn to="/">Cancel</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Done',
        data: () => ({
            task: '',
            date: '',
            time:'',
            datePick: false,
            timePicker: false
        }),
        mounted(){
            this.task = this.sourceTodos[this.$route.params.id].textTodo,
            this.date = this.sourceTodos[this.$route.params.id].date,
            this.time = this.sourceTodos[this.$route.params.id].time
        },
        methods:{
            editTodo(){
                this.$store.commit('editTodo', {i:this.$route.params.id,
                    id: this.sourceTodos[this.$route.params.id].id,
                    task: this.task,
                    date: this.date,
                    time: this.time,
                })
                this.$router.push('/')
            }

        },
        computed: {
            sourceTodos(){
                return this.$store.state.todos
            }
        }
    }

</script>