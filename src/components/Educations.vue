<template>
  <v-layout align-center justify-center row>
    <v-flex xs11 data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
      <!-- <v-card class="my-5" color="grey darken-2" v-for="i in 2" :key="i"> -->
      <v-card class="my-5">
        <v-card-title primary-title>
          <v-layout align-center>
            <img
              :src="require(`../assets/icons/csu.png`)"
              alt="Text"
              height="70"
              class="mx-4 hidden-xs-only"
            />
            <img
              :src="require(`../assets/icons/csu.png`)"
              alt="Text"
              height="40"
              class="mr-2 mb-2 hidden-sm-and-up"
            />
            <v-flex>
              <span class="headline mb-3">Bachelor of Information Technology</span>
              <v-spacer></v-spacer>
              <span class="headline font-weight-light mb-3">Charles Sturt University</span>
            </v-flex>
          </v-layout>
          <div class="subheading">
            <v-divider></v-divider>

            <br />With a strong focus on employability, the Bachelor of Information Technology incorporates major business applications of IT and includes subjects based on the Help Desk Analyst and Certified Desktop Technician certifications, helping you secure your first job in the industry. The Good Universities Guide 2018/19 lists Charles Sturt University's computing and information systems grads as having the highest graduate employment rate in Australia.
            <!-- <br />Explore your creativity through high-demand web development roles or delve
            into your analytical side as a network engineer, systems architect, administrator
            or analyst. If management interests you, we offer postgraduate degrees that enhance
            your leadership skills so you can use your specialist computing expertise to improve
            project and process flows, investigate technical issues and make a real difference
            in your workplace.-->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>
