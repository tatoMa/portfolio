<template>
  <div>
    <!-- Side menu -->
    <v-navigation-drawer v-model="drawer" fixed clipped app width="210">
      <name-card></name-card>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.text"
          @click="$vuetify.goTo('#'+item.text)"
          class="my-2"
          :class="{selected:section}"
        >
          <v-list-tile-action>
            <v-icon medium :color="item.color">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile class="mt-3">
          <v-list-tile-title class="grey--text text--darken-1">Made with 💖 by Jason</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- toolbar -->
    <toobar @drawerSwitcher="onDrawerSwitcher"></toobar>
    <v-content>
      <v-container fill-height fluid class="pa-0 ma-0">
        <v-layout>
          <v-flex>
            <carousels></carousels>
            <gapper sectionText="About"></gapper>
            <about></about>
            <gapper sectionText="Experiences"></gapper>

            <v-layout row>
              <v-flex xs12>
                <v-card>
                  <v-container fluid grid-list-sm>
                    <v-layout row wrap>
                      <v-flex xs10 offset-xs1>
                        <experiences></experiences>
                      </v-flex>
                      <v-flex xs10 offset-xs1>
                        <experiences></experiences>
                      </v-flex>
                      <v-flex xs10 offset-xs1>
                        <experiences></experiences>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
            <gapper sectionText="Projects"></gapper>
            <v-layout row>
              <v-flex xs12>
                <v-card>
                  <v-container fluid grid-list-sm>
                    <v-layout row wrap>
                      <v-flex xs4>
                        <projects></projects>
                      </v-flex>
                      <v-flex xs4>
                        <projects></projects>
                      </v-flex>
                      <v-flex xs4>
                        <projects></projects>
                      </v-flex>
                      <v-flex xs4>
                        <projects></projects>
                      </v-flex>
                      <v-flex xs4>
                        <projects></projects>
                      </v-flex>
                      <v-flex xs4>
                        <projects></projects>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
            <gapper sectionText="Skills"></gapper>
            <skills></skills>
            <gapper sectionText="Education"></gapper>
            <educations></educations>
            <footer-section></footer-section>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu';
import Toobar from '../components/Toobar';
import Carousels from '../components/Carousels';
import Gapper from '../components/Gapper';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import NameCard from '../components/NameCard';
import Skills from '../components/Skills';
import Educations from '../components/Educations';
import FooterSection from '../components/Footer';

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
    Educations,
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'person', text: 'About', color: 'lime' },
      { icon: 'trending_up', text: 'Experiences', color: 'teal lighten-1' },
      { icon: 'business', text: 'Projects', color: 'purple lighten-3' },
      { icon: 'insert_chart', text: 'Skills', color: 'red darken-2' },
      { icon: 'school', text: 'Education', color: 'indigo lighten-2' },
      { icon: 'email', text: 'Contact', color: 'cyan' },
      { icon: 'list_alt', text: 'Resume', color: 'pink darken-1' },
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' },
    ],
    section: false,
  }),
  methods: {
    onDrawerSwitcher() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.selected {
  border-left: 3px solid red;
  background-color: rgba(0, 0, 0, 0.206);
}
</style>
