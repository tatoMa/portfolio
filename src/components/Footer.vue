<template>
  <v-footer height="auto">
    <v-flex xs12>
      <v-card flat tile class="red white--text text-xs-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 white" icon>
            <img :src="require(`../assets/icons/${icon}.png`)" alt="Text" height="32">
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 —
          <strong>Made with 💖 by Jason</strong> | Login | Privacy Policy | Sitemap
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
