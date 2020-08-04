<template>
        <div>
            <div class="d-flex justify-center align-center"><h3>Theme</h3></div>
        <div class="d-flex justify-center align-center">
            <h4 class="mx-2">Light</h4>
            <v-switch v-model="$vuetify.theme.dark"></v-switch>
            <h4 class="mx-2">Dark</h4>
        </div>
        </div>
</template>
<script>
    export default {
        name: 'Settings',


    }
</script>