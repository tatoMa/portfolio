<template>
  <v-layout column>
    <v-card class="ma-5" color="grey darken-2" v-for="i in 3" :key="i">
      <v-img :src="require('../assets/img/landing_05.jpg')" height="120px"></v-img>

      <v-card-title primary-title>
        <div>
          <div class="display-1">Experience</div>
          <br>
          <div class="subheading">
            SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns
            DEVELOP PRODUCT
            <br>
            <br>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)
            Lead front-end development, creating and documenting app-wide design system
            Oversee transition from page-based styles to modular component styles
            Guide best practices around accessible, semantic UI/UX
            Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml
            ACCOMPLISHMENTS
            <br>
            <br>Dramatically increased speed of UI development using atomic, scalable CSS
            Built tool to convert HRIS data into user accounts to simplify onboarding
            Implemented inline @tagging feature to increase app share-ability
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-layout>
</template>

<script>
export default {};
</script>
