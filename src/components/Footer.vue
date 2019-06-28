<template>
  <v-footer height="auto">
    <v-flex xs12>
      <v-card flat tile class="red white--text text-xs-center">
        <v-card-text class="hidden-xs-only">
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" icon color="white">
            <img :src="require(`../assets/icons/${icon}.png`)" alt="Text" height="32">
          </v-btn>
        </v-card-text>
        <v-card-text class="hidden-sm-and-up">
          <v-btn v-for="icon in icons" :key="icon" class="mx-2" icon color="white">
            <img :src="require(`../assets/icons/${icon}.png`)" alt="Text" height="32">
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 —
          <strong>Made with 💖 by Jason</strong>
          <br class="hidden-sm-and-up">| Login | Privacy Policy | Sitemap
        </v-card-text>
      </v-card>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["facebook", "twitter", "gplus", "linkedin", "instagram", "email"]
  })
};
</script>
