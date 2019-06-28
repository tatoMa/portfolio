<template>
  <div
    :style="{ backgroundImage: 'url(' + require('@/assets/img/bg.jpg') + ')' }"
    style="background-size: cover;background-attachment: fixed;"
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
import SideMenu from "../components/SideMenu";
import Toobar from "../components/Toobar";
import Carousels from "../components/Carousels";
import Gapper from "../components/Gapper";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import NameCard from "../components/NameCard";
import Skills from "../components/Skills";
import Educations from "../components/Educations";
import FooterSection from "../components/Footer";

export default {
  components: {
    NameCard,
    SideMenu,
    Toobar,
    Carousels,
    Gapper,
    About,
    Experiences,
    Projects,
    FooterSection,
    Skills,
    Educations
  },
  data() {
    return {
      currentSection: null
    };
  }
};
</script>

