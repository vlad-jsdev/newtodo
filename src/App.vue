<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action >
            <v-icon>mdi-notebook-edit</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Todo Tasks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/done">
          <v-list-item-action >
            <v-icon>mdi-notebook-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Done Tasks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/settings">
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
        <v-row>
          <v-col>
              <router-view />
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

  export default {
    name: 'App',
    data:() =>
      ({
        main: null,
        donePage: null,
        settings: null,
        drawer: null
      }),
    mounted(){
      this.$store.commit('startLocal')
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
<style>

</style>