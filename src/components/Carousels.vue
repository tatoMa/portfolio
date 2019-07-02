<template>
  <v-card>
    <v-img height="100vh" :src="require('../assets/img/landing.jpg')">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex flexbox class="hidden-xs-only">
            <div class="display-2 font-weight-light ma-3 black--text">
              Performance is crucial.
              <div class="mt-3 display-2 font-weight-light">
                Every
                <span class="display-2 font-weight-light red white--text">3 more seconds</span>
                of loading, you lose
                <span
                  class="display-2 font-weight-light"
                  style="text-decoration: underline;  text-decoration-color: red;"
                >the half of users.</span>
              </div>
            </div>
          </v-flex>
          <v-flex flexbox class="hidden-sm-and-up">
            <div class="display-1 font-weight-light black--text">
              Performance is crucial.
              <div class="mt-3">
                Every
                <span class="display-1 font-weight-light red white--text">3 more seconds</span>
                <span class="display-1 font-weight-light">of loading, you lose</span>
                <span
                  class="display-1 font-weight-light"
                  style="text-decoration: underline;  text-decoration-color: red;"
                >the half of users.</span>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-card>
</template>
