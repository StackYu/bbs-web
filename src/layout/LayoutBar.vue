<script>
import bus from '@/utils/EventBus'

export default {
  name: "LayoutBar",
  data() {
    return {
      links: [
        '主页',
        '新帖',
        '搜索',
        '开发',
        '娱乐',
        '软件',
        '资源',
        '关于',
      ],
    }
  },
  methods: {
    showUserMenu() {
      bus.$emit('openUserMenu');
    },
  }
}
</script>

<template>
  <v-app-bar app color="grey darken-1" flat>
    <v-container class="py-0 fill-height">
      <v-btn class="white--text" v-for="link in links" :key="link" text> {{ link }}</v-btn>
      <v-spacer></v-spacer>
      <v-responsive max-width="300" style="margin-right: 30px;">
        <v-row>
          <v-col>
            <v-text-field
                dense
                flat
                hide-details
                rounded
                solo-inverted
                label="输入搜索内容"
                prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-responsive>
      <!-- 徽章 -->

      <v-badge bordered bottom color="deep-purple accent-4" dot offset-x="10" offset-y="10" >
        <v-avatar size="40" @click="showUserMenu">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
      <v-btn
          class="ma-2"
          outlined
          color="white"
      >
        登录
      </v-btn>
      <v-btn
          class="ma-2"
          outlined
          color="white"
      >
        注册
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>

</style>