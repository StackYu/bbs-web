<script>
import {login} from "@/api/auth";
import store from '@/store'
import {mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {
      // 用户名
      name: '',
      // 密码
      password: '',
      // 密码显示和隐藏
      passwordShow: false,
      // 记住密码
      rememberPassword: false,

      // 是否处于登录状态
      isLogin: false,

      // 输入框规则
      rules: {
        required: value => !!value || '必填',
        min: v => v.length >= 8 || '字符必须大于8个',
      },

      snackbar: false,
      snackbarText: ``,
    }
  },
  methods: {
    userLogin() {
      this.isLogin = true

      const formData = new FormData();
      formData.append('category',0)
      formData.append('userName', this.name)
      formData.append('password', this.password)
      formData.append('rememberPassword', this.rememberPassword)

      // 登录
      login(formData).then(response => {
        const {data} = response
        if (data.error === 0) {
          // 保存用户信息
          store.dispatch('user/saveUserInfo', data.data)

          this.snackbarText = `登录成功，即将跳转主页`
          this.snackbar = true
          this.$router.push("/")
        } else {
          this.snackbarText = data.message
          this.snackbar = true
          this.isLogin = false
        }
      })
    },
    userRegister() {
      this.$router.push('/register')
    },
  },
  computed: {
    ...mapGetters(['user', 'isVisitor', 'token']),
  },
  watch: {
    // 监听记住密码按钮是否选中
    rememberPassword(newValue, oldValue) {
      if (newValue) {
        if (!this.snackbar) {
          this.snackbar = true;
          this.snackbarText = '记住密码有效期为三天';
        }
      }
    }
  },
  created() {
    if (!this.isVisitor) {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <v-app>
    <v-sheet style="height: 100%;" class="d-flex align-center justify-center">
      <v-sheet style="width: 300px;border: 1px solid #e4e4e4;padding: 15px;border-radius: 10px; ">
        <v-text-field v-model="name" label="用户名" prepend-icon="mdi-account"></v-text-field>
        <v-text-field
            style="margin-top: 10px;"
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="passwordShow ? 'text' : 'password'"
            label="密码"
            hint="必须包含大小写字符、数字和特殊符号"
            @click:append="passwordShow = !passwordShow">
        </v-text-field>
        <v-sheet class="d-flex justify-space-between">
          <v-checkbox v-model="rememberPassword" label='记住密码'></v-checkbox>
          <a style="line-height: 66px;color: rgba(0,0,0,.6);">忘记密码</a>
        </v-sheet>
        <v-sheet align="center">
          <v-progress-circular v-show="isLogin" indeterminate color="green"></v-progress-circular>
          <v-btn @click="userLogin" v-show="!isLogin" color="success" class="mr-4">登录</v-btn>
          <v-btn @click="userRegister" v-show="!isLogin" color="success" class="mr-4">注册</v-btn>
        </v-sheet>
      </v-sheet>
    </v-sheet>

    <v-bottom-navigation color="teal" grow>
      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!--  提示信息  -->
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">关闭</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>