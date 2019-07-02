<template>
  <v-layout align-center justify-center row>
    <v-flex xs11>
      <v-card v-for="( skill, index) in skills" class="my-3" :key="index">
        <v-layout row align-center>
          <img
            :src="require(`../assets/icons/${skill.img}.png`)"
            alt="Text"
            height="50"
            style="filter: invert(100%);"
            class="ma-4 hidden-xs-only"
          />
          <img
            :src="require(`../assets/icons/${skill.img}.png`)"
            alt="Text"
            height="30"
            style="filter: invert(100%);"
            class="ma-4 hidden-sm-and-up"
          />
          <div class="display-1 hidden-xs-only">{{skill.name}}</div>
          <div class="headline hidden-sm-and-up">{{skill.name}}</div>
        </v-layout>

        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex
            xs6
            sm3
            md2
            v-for="(detail, index) in skill.details"
            class="pa-4"
            :key="index"
            data-aos="zoom-in"
          >
            <div class="text-xs-center">
              <img
                class="hidden-xs-only"
                :src="require(`../assets/icons/${detail.img}.png`)"
                alt="Text"
                height="90"
              />
              <img
                class="hidden-sm-and-up"
                :src="require(`../assets/icons/${detail.img}.png`)"
                alt="Text"
                height="64"
              />
              <div class="headline font-weight-light hidden-xs-only">{{detail.name}}</div>
              <div class="title font-weight-light hidden-sm-and-up">{{detail.name}}</div>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'Javascript',
          img: 'js',
          details: [
            { name: 'Javascript', img: 'javascript' },
            { name: 'ES6', img: 'es6' },
            { name: 'React', img: 'react' },
            { name: 'Vue', img: 'vue' },
            { name: 'Eslint', img: 'eslint' },
            { name: 'PWA', img: 'pwa' },
          ],
        },
        {
          name: 'Language & API',
          img: 'html',
          details: [
            { name: 'HTML5', img: 'html5' },
            { name: 'JSX', img: 'react' },
            { name: 'Typescript', img: 'typescript' },
            { name: 'C#', img: 'csharp' },
            { name: 'PHP', img: 'php' },
          ],
        },
        {
          name: 'CSS & UI',
          img: 'css',
          details: [
            { name: 'CSS3', img: 'css3' },
            { name: 'SASS', img: 'sass' },
            { name: 'Bootstrap', img: 'bootstrap' },
            { name: 'Vuetify', img: 'vuefity' },
            { name: 'Bulma', img: 'bulma' },
          ],
        },

        {
          name: 'Back-End',
          img: 'backend',
          details: [
            { name: 'Node', img: 'nodejs' },
            { name: 'Express', img: 'express' },
            { name: 'MongoDB', img: 'mongodb' },
            { name: 'Firebase', img: 'firebase' },
            { name: 'GraphQL', img: 'graphql' },
          ],
        },
        {
          name: 'Tools',
          img: 'frontend',
          details: [
            { name: 'Webpack', img: 'webpack' },
            { name: 'Github', img: 'github' },
            { name: 'Heroku', img: 'heroku' },
            { name: 'Photoshop', img: 'photoshop' },
            { name: 'WrodPress', img: 'wordpress' },
          ],
        },
      ],
    };
  },
};
</script>
