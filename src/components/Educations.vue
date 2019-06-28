<template>
  <v-layout align-center justify-center row>
    <v-flex xs11>
      <!-- <v-card class="my-5" color="grey darken-2" v-for="i in 2" :key="i"> -->
      <v-card class="my-5">
        <v-card-title primary-title>
          <v-layout align-center>
            <img
              :src="require(`../assets/icons/csu.png`)"
              alt="Text"
              height="70"
              class="mx-4 hidden-xs-only"
            >
            <img
              :src="require(`../assets/icons/csu.png`)"
              alt="Text"
              height="40"
              class="mr-2 mb-2 hidden-sm-and-up"
            >
            <span class="headline hidden-xs-only mb-3">Bachelor of Information Technology</span>
            <span class="title hidden-sm-and-up mb-3">Bachelor of Information Technology</span>
          </v-layout>
          <div class="subheading">
            <v-divider></v-divider>

            <br>Future-proof your career and open up opportunities in information technology, computing and mathematics, where you could work for national or global industry leaders. Spend your days developing websites or mobile applications, programming, coding or putting your technical support skills to the test. If you’re a passionate gamer, we have the ultimate course for you to become an applications developer, games programmer or software engineer.
            <br>Explore your creativity through high-demand web development roles or delve into your analytical side as a network engineer, systems architect, administrator or analyst. If management interests you, we offer postgraduate degrees that enhance your leadership skills so you can use your specialist computing expertise to improve project and process flows, investigate technical issues and make a real difference in your workplace.
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>
