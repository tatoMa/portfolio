<template>
  <div>
    <!-- Side menu -->
    <side-menu :drawer="drawer"></side-menu>
    <v-toolbar color="red" dense clipped-left class="hidden-lg-and-up">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Youtube</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height fluid class="pa-0 ma-0">
        <v-layout>
          <v-flex>
            <carousels></carousels>
            <gapper sectionText="About"></gapper>
            <about></about>
            <gapper sectionText="Experiences"></gapper>
            <experiences></experiences>
            <experiences></experiences>
            <experiences></experiences>
            <experiences></experiences>
            <experiences></experiences>
            <gapper sectionText="Projects"></gapper>
            <projects></projects>
            <projects></projects>
            <projects></projects>
            <projects></projects>
            <gapper sectionText="Skills"></gapper>
            <gapper sectionText="Education"></gapper>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu";
import Carousels from "../components/Carousels";
import Gapper from "../components/Gapper";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

export default {
  components: {
    SideMenu,
    Carousels,
    Gapper,
    About,
    Experiences,
    Projects
  },
  data: () => ({
    drawer: true
  })
};
</script>

