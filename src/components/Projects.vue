<template>
  <v-layout row wrap class="ma-4">
    <v-flex xs4 v-for="i in 6" :key="i">
      <v-card class="ma-3">
        <v-img :src="require('../assets/img/landing_05.jpg')" height="240px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Project</div>
            <span class="grey--text">the web site</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-layout>
            <v-flex xs6>
              <v-btn block>Browser</v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn block>Github</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>
