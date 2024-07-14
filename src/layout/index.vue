<template>
  <v-app>
    <layout-bar/>
    <v-main class="grey lighten-3">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <layout-footer/>
    <layout-speed-dial/>
    <layout-user-menu/>
  </v-app>
</template>

<script>
import LayoutBar from "@/layout/LayoutBar.vue";
import LayoutFooter from "@/layout/LayoutFooter.vue";
import LayoutSpeedDial from "@/layout/LayoutSpeedDial.vue";
import LayoutUserMenu from "@/layout/LayoutUserMenu.vue";

export default {
  components: {LayoutUserMenu, LayoutSpeedDial, LayoutFooter, LayoutBar},
  data: () => ({}),
  created() {
    console.log('test:' + process.env.NODE_ENV)
  }
}
</script>
