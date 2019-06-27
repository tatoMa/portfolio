<template>
  <v-toolbar color="red" clipped-left dense class="hidden-lg-and-up">
    <v-toolbar-side-icon @click.stop="$emit('drawerSwitcher')"></v-toolbar-side-icon>
    <v-toolbar-title class="mr-5 align-center">
      <v-layout>
        <v-icon large class="mr-3">portrait</v-icon>
        <span class="title my-auto">Portfolio & Blog</span>
      </v-layout>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-layout row align-center style="max-width: 650px"></v-layout>
  </v-toolbar>
</template>

<script>
export default {
  methods: {},
};
</script>
