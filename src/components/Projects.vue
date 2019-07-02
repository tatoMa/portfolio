<template>
  <v-layout row wrap class="ma-4">
    <v-flex xs12 sm10 offset-sm1 offset-md0 md6 v-for="(project,index) in projects" :key="index">
      <v-card class="ma-3" height="300">
        <v-layout row fill-height>
          <v-flex xs5>
            <v-img
              :src="require(`../assets/img/${project.img}.jpg`)"
              height="300px"
              class="hidden-xs-and-down"
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-layout align-center justify-space-between column fill-height>
              <v-card-title primary-title>
                <div>
                  <div class="headline red--text">{{project.title}}</div>
                  <div class="body-1 font-weight-light">{{project.subTitle}}</div>
                  <ul class="mt-3">
                    <li
                      class="subheading font-weight-regular"
                      v-for="(detail,index) in project.details"
                      :key="index"
                    >{{ detail }}</li>
                  </ul>
                </div>
              </v-card-title>

              <v-card-actions class="mb-2">
                <v-btn outline :href="project.link" color="red" class="mx-2">Browse</v-btn>
                <v-btn outline :href="project.github" color="blue" class="mx-2">Github</v-btn>
              </v-card-actions>
            </v-layout>
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
      projects: [
        {
          title: "Jason's Portfolio",
          subTitle: "My Portfolio Web App",
          img: "portfolio",
          details: [
            "Vue - Front-End",
            "Vuetify - UI Framework",
            "Jest - Testing",
            "Github - Version Control",
            "Netlify - Hosting"
          ],
          link: "https://vigorous-carson-3b6ac5.netlify.com/",
          github: "https://github.com/tatoMa/portfolio"
        },
        {
          title: "Linker (Mobile Only)",
          subTitle: "Online Real-Time Communication App",
          img: "linker",
          details: [
            "Vue - Front-End",
            "VueX - State Management",
            "Bulma - UI",
            "Firebase - Serverless Hosting"
          ],
          link: "linker-c26d5.firebaseapp.com",
          github: "linker-c26d5.firebaseapp.com"
        },

        {
          title: "Firebase Shopping App",
          subTitle: "A serverless Full-Stack Shopping App",
          img: "fireShopping",
          details: [
            "Vue - Front-End",
            "Vuetify - UI Framework",
            "Github - Version Control",
            "FireStore - Serverless Database",
            "Firebase - Serverless Hosting"
          ],
          link: "https://newtest-ad2c2.firebaseapp.com",
          github: "https://github.com/tatoMa/vue_shopping"
        },
        {
          title: "Shopping Cart Backend",
          subTitle: "A Node Backend For Shopping Services",
          img: "shoppingCart",
          details: [
            "Express - Back-End",
            "MongoDB - Database",
            "Mongoose - Object Modeling",
            "Bcryptjs - Encrypt",
            "OAuth2 - Internet Protocol"
          ],
          link: "https://github.com/tatoMa/online_shopping_server",
          github: "https://postandshopping.herokuapp.com/"
        }
      ]
    };
  }
};
</script>
