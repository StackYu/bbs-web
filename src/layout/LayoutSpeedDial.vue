<script>
import {test} from "@/api/auth";

export default {
  name: "LayoutSpeedDial",
  data: () => ({
    fab: false,
  }),
  methods: {
    testRequest() {
      test().then(response => {
        console.log(JSON.stringify(response))
        console.log(JSON.stringify(response.data))
      })
    },
  }
}
</script>

<template>
  <v-speed-dial
      fixed
      bottom
      right
      open-on-hover
      direction="top"
      transition="slide-y-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn
          v-model="fab"
          color="blue darken-2"
          fab
          dark
      >
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-btn
        fab
        dark
        small
        color="green"
        @click="testRequest"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn
        fab
        dark
        small
        color="indigo"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
        fab
        dark
        small
        color="red"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>