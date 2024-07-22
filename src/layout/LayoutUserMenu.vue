<script>
import bus from '@/utils/EventBus'
import {mapGetters} from "vuex";

export default {
  name: "LayoutUserMenu",
  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'mdi-inbox',
        text: 'Inbox',
      },
      {
        icon: 'mdi-star',
        text: 'Star',
      },
      {
        icon: 'mdi-send',
        text: 'Send',
      },
      {
        icon: 'mdi-email-open',
        text: 'Drafts',
      },
    ],
    model: 1,
  }),
  computed: {
    ...mapGetters(['user', 'token'])
  },
  created() {
    bus.$on('openUserMenu', () => {
      this.drawer = !this.drawer
    })
  }
}
</script>

<template>
  <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
      color="grey lighten-3"
      width="400px"
      style="border-radius: 10px 0 0 10px;"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{this.user.userName}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>洒洒水飒飒</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>洒洒水飒飒</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
