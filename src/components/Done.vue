<template>
    <div>
        <v-container>
    <v-row>
        <v-col>
            <v-list dense>
            <v-subheader>Done Tasks</v-subheader>
            <v-list-item-group color="red accent-1">
                <v-list-item v-for="(doneTask, id) in sourceDoneTodos" v-bind:key="id"><v-card-text>{{ doneTask.textTodo }}</v-card-text>
                    <div class="d-flex flex-row">
                        <div v-if="doneTask.date !== ''">
                            <p class="dateList"><v-icon>mdi-calendar</v-icon>
                                {{ doneTask.date }}</p>
                        </div>
                        <div v-if="doneTask.time !== ''">
                            <p class="timeList"><v-icon>mdi-clock-time-eight</v-icon>
                                {{ doneTask.time }}</p>
                        </div>
                    </div>
                    <v-btn icon color="red" v-on:click="delTasks(sourceDoneTodos.indexOf(doneTask))">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-col></v-row>
    </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Done',
        data: () => ({
        }),

        methods:{
            delTasks(i){
                this.$store.commit('delTodo', i)
            }
        },
        computed: {
            sourceDoneTodos(){
                return this.$store.state.doneTasks
            }
        }
    }

</script>
<style scoped>
    .dateList, .timeList{
        width: 100px;
        margin-right: 5px;
    }
    p{
        font-size: 8pt;
    }
</style>