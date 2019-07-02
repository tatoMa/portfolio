<template>
  <div>
    <v-layout column class="hidden-xs-only">
      <!-- hidden for mobilephone -->
      <v-card 
      class="mx-5 my-4" 
      v-for="(exp, index) in experiences" 
      :key="index" 
      xs12
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine">
        <!-- <v-img :src="require('../assets/img/landing.jpg')" height="40px"></v-img> -->
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
      <v-card class="my-2" v-for="i in 3" :key="i">
        <v-img :src="require('../assets/img/landing.jpg')" height="70px"></v-img>
        <v-card-title primary-title>
          <div>
            <div class="display-1">Experience</div>
            <br />
            <div class="subheading">
              SaaS platform that enables enterprise companies to build, run,
              and measure their positive impact campaigns
              DEVELOP PRODUCT
              <br />
              <br />Contribute core features across entire stack (20k+ lines of code, 250+ pulls)
              Lead front-end development, creating and documenting app-wide design system
              Oversee transition from page-based styles to modular component styles
              Guide best practices around accessible, semantic UI/UX
              Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml
              ACCOMPLISHMENTS
              <br />
              <br />Dramatically increased speed of UI development using atomic, scalable CSS
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
          title: 'Full-Stack Development',
          time: '19/04/2018',
          subtitles: [
            {
              name: 'Front-End',
              details: [
                'Making front-end UI components',
                'Design the UI components by Adoby XD',
                'Review the performance of the APP',
              ],
            },
            {
              name: 'Back-End',
              details: [
                'Node.js skeleton',
                'Authentication by OAuth2 with Google',
                'Design back-end RESTful API',
              ],
            },
          ],
        },
        {
          title: 'Full-Stack Development',
          time: '19/04/2018',
          subtitles: [
            {
              name: 'Front-End',
              details: [
                'Making front-end UI components',
                'Design the UI components by Adoby XD',
                'Review the performance of the APP',
              ],
            },
            {
              name: 'Back-End',
              details: [
                'Node.js skeleton',
                'Authentication by OAuth2 with Google',
                'Design back-end RESTful API',
              ],
            },
          ],
        },
        {
          title: 'Full-Stack Development',
          time: '19/04/2018',
          subtitles: [
            {
              name: 'Front-End',
              details: [
                'Making front-end UI components',
                'Design the UI components by Adoby XD',
                'Review the performance of the APP',
              ],
            },
            {
              name: 'Back-End',
              details: [
                'Node.js skeleton',
                'Authentication by OAuth2 with Google',
                'Design back-end RESTful API',
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
