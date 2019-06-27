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
        <!-- <v-divider></v-divider>
        <v-list-tile class="mt-3">
          <v-list-tile-title class="grey--text text--darken-1">Made with 💖 by Jason</v-list-tile-title>
        </v-list-tile>-->
      </v-list>
    </v-navigation-drawer>

    <!-- toolbar -->
    <toobar @drawerSwitcher="onDrawerSwitcher"></toobar>
  </div>
</template>

<script>
import NameCard from "./NameCard";
import Toobar from "../components/Toobar";

export default {
  components: {
    NameCard,
    Toobar
  },
  props: ["drawer"],
  data: () => ({
    drawerSwticher: null,
    drawer: null,
    items: [
      { icon: "person", text: "About", color: "lime" },
      { icon: "trending_up", text: "Experiences", color: "teal lighten-1" },
      { icon: "business", text: "Projects", color: "purple lighten-3" },
      { icon: "insert_chart", text: "Skills", color: "red darken-2" },
      { icon: "school", text: "Education", color: "indigo lighten-2" },
      { icon: "email", text: "Contact", color: "cyan" },
      { icon: "list_alt", text: "Resume", color: "pink darken-1" }
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ],
    section: false
  }),
  methods: {
    onDrawerSwitcher() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped>
.selected {
  border-left: 3px solid red;
  background-color: rgba(0, 0, 0, 0.206);
}
</style>
