<template>
  <div>
    <v-layout column class="hidden-xs-only">
      <!-- hidden for mobilephone -->
      <v-card
        class="mx-5 my-3"
        v-for="(exp, index) in experiences"
        :key="index"
        xs12
        data-aos="fade-right"
        data-aos-offset="70"
        data-aos-easing="ease-in-sine"
      >
        <v-card-title primary-title>
          <v-layout column>
            <v-layout row>
              <div class="display-1 mb-2 red--text">{{exp.title}}</div>
              <v-spacer></v-spacer>
              <div class="headline font-weight-light">{{exp.time}}</div>
            </v-layout>
            <v-divider class="mt-2"></v-divider>
            <v-layout column>
              <div
                class="headline mt-3 mb-1 font-weight-light"
                v-for="(subtitle, index) in exp.subtitles"
                :key="index"
              >
                {{subtitle.name}}
                <!-- <v-list v-for="(detail,index) in subtitle.details" :key="index" dense>
                <v-subheader class="subheading font-weight-regular">- {{ detail }}</v-subheader>-->
                <ul class="mt-2">
                  <li
                    class="subheading font-weight-medium"
                    v-for="(detail,index) in subtitle.details"
                    :key="index"
                  >{{ detail }}</li>
                </ul>
                <!-- <v-divider></v-divider> -->
                <!-- </v-list> -->
              </div>
            </v-layout>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-layout>

    <!-- showing for mobilephone -->
    <v-layout column class="hidden-sm-and-up">
      <v-card
        class="ma-2"
        v-for="(exp, index) in experiences"
        :key="index"
        xs12
        data-aos="fade-right"
        data-aos-offset="70"
        data-aos-easing="ease-in-sine"
      >
        <v-card-title primary-title>
          <v-layout column>
            <v-layout row>
              <div class="headline mb-2 red--text">{{exp.title}}</div>
              <v-spacer></v-spacer>
              <div class="subheading font-weight-light">{{exp.time}}</div>
            </v-layout>
            <v-divider class="mt-2"></v-divider>
            <v-layout column>
              <div
                class="headline mt-3 mb-1 font-weight-light"
                v-for="(subtitle, index) in exp.subtitles"
                :key="index"
              >
                {{subtitle.name}}
                <!-- <v-list v-for="(detail,index) in subtitle.details" :key="index" dense>
                <v-subheader class="subheading font-weight-regular">- {{ detail }}</v-subheader>-->
                <ul class="mt-2">
                  <li
                    class="body-2 font-weight-medium"
                    v-for="(detail,index) in subtitle.details"
                    :key="index"
                  >{{ detail }}</li>
                </ul>
                <!-- <v-divider></v-divider> -->
                <!-- </v-list> -->
              </div>
            </v-layout>
          </v-layout>
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
          title: "Freelancer of full-stack web development",
          time: "2016 - current",
          subtitles: [
            {
              name: "Front-End",
              details: [
                "Modern front-end framework creating SPA (Vue, React and etc.)",
                "State management system manage state and data (Vuex, Redux and etc.)",
                "Webpack, NPM and tools for auto scripting",
                "Responsive design UI library such as Bootstrap, material, bulma",
                "Creating custome plugin or utility modules using on the other components"
              ]
            },
            {
              name: "Back-End",
              details: [
                "Creating back-end using node and express",
                "Practiced with middleware and common useful packages",
                "Fledged MongoDB and mongoose skills",
                "Authentication and encrypt for login system"
              ]
            }
          ]
        },
        {
          title: "Mobilise IT Pty. Ltd, Melbourne",
          time: "Jun 2015 – Sep 2015",
          subtitles: [
            {
              name: "Multiplatform Application Developer",
              details: [
                "Making front-end UI components for a govement project called NSW E-health",
                "Application improvement and enhancement of performance and user experience",
                "Real mobile and computer device testing"
              ]
            }
          ]
        },
        {
          title: "Banacola Pty. Ltd, Sydney",
          time: "Nov 2014 – Jun 2015",
          subtitles: [
            {
              name: "Game Developer",
              details: [
                "Unity 3D engine with c#",
                "Create object and module for game using",
                "Testing on real mobile device"
              ]
            }
          ]
        },
        {
          title: "ABC Media Company, 370 Pitt St., Sydney",
          time: "Feb 2013 – May 2013",
          subtitles: [
            {
              name: "Website Designer and Administration Assistant",
              details: [
                "IT support, graphic design and information editor for the company website and social media press",
                "Designed advertisement video for the event that was sponsored by this company",
                "Daily website and social media post maintenance"
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
