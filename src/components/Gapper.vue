<template>
  <v-card color="red" height="7rem">
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex flexbox>
          <div class="display-2 font-weight-light red" :id="sectionText">{{sectionText}}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: ["sectionText"]
};
</script>