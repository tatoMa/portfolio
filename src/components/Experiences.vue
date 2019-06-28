<template>
  <div>
    <v-layout column class="hidden-xs-only">
      <!-- hidden for mobilephone -->
      <v-card class="mx-5 my-4" v-for="(exp, index) in experiences" :key="index" xs12>
        <v-img :src="require('../assets/img/landing_05.jpg')" height="120px"></v-img>
        <v-card-title primary-title>
          <div style="width: 100%">
            <div class="display-1">{{exp.title}}</div>
            <br>
            <div class="headline" v-for="(subtitle, index) in exp.subtitles" :key="index">
              {{subtitle.name}}
              <v-list v-for="(detail,index) in subtitle.details" :key="index" dense>
                <v-subheader class="subheading font-weight-regular">- {{ detail }}</v-subheader>

                <!-- <v-divider></v-divider> -->
              </v-list>
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-layout>
    <v-layout column class="hidden-sm-and-up">
      <!-- showing for mobilephone -->
      <v-card class="my-2" v-for="i in 3" :key="i">
        <v-img :src="require('../assets/img/landing_05.jpg')" height="70px"></v-img>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "experience 1",
          time: "19/04/2018",
          subtitles: [
            {
              name: "front-end",
              details: ["front-end1", "front-end1", "front-end1"]
            },
            {
              name: "front-end2",
              details: ["front-end2", "front-end2", "front-end2"]
            }
          ]
        },
        {
          title: "experience 2",
          time: "19/04/2018",
          subtitles: [
            {
              name: "front-end",
              details: ["front-end1", "front-end1", "front-end1"]
            },
            {
              name: "front-end2",
              details: ["front-end2", "front-end2", "front-end2"]
            }
          ]
        },
        {
          title: "experience 3",
          time: "19/04/2018",
          subtitles: [
            {
              name: "front-end",
              details: ["front-end1", "front-end1", "front-end1"]
            },
            {
              name: "front-end2",
              details: ["front-end2", "front-end2", "front-end2"]
            }
          ]
        }
      ]
    };
  }
};
</script>
