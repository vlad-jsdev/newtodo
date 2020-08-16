<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    {{ sourceTodos[$route.params.id] }}
                    <v-text-field v-model=sourceTodos[$route.params.id].textTodo v-on:keyup.enter="editTodo"></v-text-field>
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
            editTodo(){
                this.$store.commit('editTodo', {i:this.$route.params.id, task: this.sourceTodos[this.$route.params.id].textTodo, date: "", time: ""})
            }
        },
        computed: {
            sourceTodos(){
                return this.$store.state.todos
            }
        }
    }

</script>