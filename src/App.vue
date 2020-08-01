<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
        <v-list-item @click.stop="main = true, donePage = false; settings = false">
          <v-list-item-action >
            <v-icon>mdi-notebook-edit</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Todo Tasks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="donePage = true; main = false; settings = false">
          <v-list-item-action >
            <v-icon>mdi-notebook-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Done Tasks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="settings = true; donePage = false; main = false">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
              fluid
      >
        <v-row
                align="center"
                justify="center"
        >
          <v-col>

            <div v-if="main">
                <Todo v-on:done="getDone($event)"/>
            </div>
            <div v-else-if="donePage">
              <Done :doneTasks="doneTasks"/>
            </div>
              <div v-else-if="settings">
                <H3>Theme</H3>
                <div class="d-flex justify-center align-center"><h4 class="mx-2">Light</h4><v-switch v-model="$vuetify.theme.dark" :label="Theme" ></v-switch><h4 class="mx-2">Dark</h4></div>

              </div>
            <div v-else>
              <Todo v-on:done="getDone($event)"/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Todo from "@/components/Todo";
  import Done from "@/components/Done";
  export default {
    name: 'App',
    components: {
      Done,
      Todo
    },
    data:() =>
      ({
        doneTasks: [],
        main: null,
        donePage: null,
        settings: null,
        drawer: null
      }),
    methods:{
        getDone(x){
            this.doneTasks = x
        }
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
<style>

</style>