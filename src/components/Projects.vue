<template>
  <v-layout row wrap class="ma-4">
    <v-flex xs12 sm6 md4 v-for="(project,index) in projects" :key="index">
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
                  <div class="headline">{{project.title}}</div>
                  <ul class="mt-2">
                    <li
                      class="subheading font-weight-medium"
                      v-for="(detail,index) in project.details"
                      :key="index"
                    >{{ detail }}</li>
                  </ul>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn outline>Browse</v-btn>
                <v-btn outline>Github</v-btn>
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
          img: "linker",
          title: "Linker (Mobile Only)",
          details: ["Firebase", "Vue", "Balmer"],
          link: "linker-c26d5.firebaseapp.com",
          github: "linker-c26d5.firebaseapp.com"
        },
        {
          img: "linker",
          title: "Linker (Mobile Only)",
          details: ["Firebase", "Vue", "Balmer"],
          link: "linker-c26d5.firebaseapp.com",
          github: "linker-c26d5.firebaseapp.com"
        },
        {
          img: "linker",
          title: "Linker (Mobile Only)",
          details: ["Firebase", "Vue", "Balmer"],
          link: "linker-c26d5.firebaseapp.com",
          github: "linker-c26d5.firebaseapp.com"
        },
        {
          img: "linker",
          title: "Linker (Mobile Only)",
          details: ["Firebase", "Vue", "Balmer"],
          link: "linker-c26d5.firebaseapp.com",
          github: "linker-c26d5.firebaseapp.com"
        },
        {
          img: "linker",
          title: "Linker (Mobile Only)",
          details: ["Firebase", "Vue", "Balmer"],
          link: "linker-c26d5.firebaseapp.com",
          github: "linker-c26d5.firebaseapp.com"
        },
        {
          img: "linker",
          title: "Linker (Mobile Only)",
          details: ["Firebase", "Vue", "Balmer"],
          link: "linker-c26d5.firebaseapp.com",
          github: "linker-c26d5.firebaseapp.com"
        }
      ]
    };
  }
};
</script>
