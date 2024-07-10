<script>
export default {
  name: "index",
  data() {
    return {
      show1: false,
      password: '',
      checkbox:'',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
      value: 1,
    }
  },
}
</script>

<template>
  <v-app>
    <v-sheet style="height: 100%;" class="d-flex align-center justify-center">
      <v-sheet style="width: 300px;border: 1px solid #e4e4e4;padding: 15px;border-radius: 10px; ">
        <v-text-field label="用户名" prepend-icon="mdi-account"></v-text-field>
        <v-text-field
            style="margin-top: 10px;"
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="密码"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
            style="margin-top: 10px;"
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="确认密码"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
        ></v-text-field>
        <v-sheet align="center">
          <v-btn
              color="success"
              class="mr-4"
          >
            注册
          </v-btn>
        </v-sheet>
      </v-sheet>
    </v-sheet>
    <v-bottom-navigation v-model="value" color="teal" grow>
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
  </v-app>
</template>