<template>
  <div
    :style="{ backgroundImage: 'url(' + require('@/assets/img/bg.jpg') + ')' }"
    style="background-repeat: repeat;background-attachment: fixed;"
  >
    <!-- sidemenu and navbar -->
    <side-menu></side-menu>

    <!-- Main container -->

    <v-content>
      <v-container fill-height fluid class="pa-0 ma-0">
        <v-layout>
          <v-flex>
            <!-- carousels section -->
            <carousels></carousels>
            <!-- about section -->
            <gapper sectionText="About"></gapper>
            <about></about>

            <!-- experienct section -->
            <gapper sectionText="Experiences"></gapper>
            <experiences></experiences>

            <!-- projects section -->
            <gapper sectionText="Projects"></gapper>
            <projects></projects>

            <!-- skill section -->
            <gapper sectionText="Skills"></gapper>
            <skills></skills>

            <!-- education section -->
            <gapper sectionText="Education"></gapper>
            <educations></educations>

            <!-- footer section -->
            <footer-section></footer-section>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
// import Toobar from "../components/Toobar.vue";
import Carousels from '../components/Carousels.vue';
import Gapper from '../components/Gapper.vue';
import About from '../components/About.vue';
import Experiences from '../components/Experiences.vue';
import Projects from '../components/Projects.vue';
// import NameCard from "../components/NameCard";
import Skills from '../components/Skills.vue';
import Educations from '../components/Educations.vue';
import FooterSection from '../components/Footer.vue';

export default {
  components: {
    SideMenu,
    // Toobar,
    Carousels,
    Gapper,
    About,
    Experiences,
    Projects,
    FooterSection,
    Skills,
    Educations,
  },
  data() {
    return {
      currentSection: null,
    };
  },
};
</script>
