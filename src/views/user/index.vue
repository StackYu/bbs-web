<template>
  <v-tabs vertical>
    <v-tab v-for="(item, i) in items" :key="i">
      <v-icon left v-text="item.icon"></v-icon>
      {{item.text}}
    </v-tab>

    <v-tab-item>
      <v-sheet>
        <v-subheader>基本信息</v-subheader>
        <v-divider></v-divider>
        <v-text-field label="用户昵称" placeholder="用户昵称" style="margin:10px 20px 0 20px;" outlined
                      dense></v-text-field>
        <v-text-field label="用户账号" placeholder="用户昵称" style="margin: 0 20px;" outlined dense></v-text-field>
        <v-text-field label="性别" placeholder="用户昵称" style="margin:0 20px;" outlined dense></v-text-field>
        <v-text-field label="个人简历" placeholder="限制300字" style="margin: 0 20px;" outlined dense></v-text-field>
        <v-text-field label="所在地区" placeholder="用户昵称" style="margin:0 20px;" outlined dense></v-text-field>
        <v-text-field label="地址管理" placeholder="用户昵称" style="margin:0 20px;" outlined dense></v-text-field>
        <v-text-field label="出生日期" placeholder="用户昵称" style="margin:0 20px;" outlined dense></v-text-field>
        <v-text-field label="工作时间" placeholder="用户昵称" style="margin:0 20px;" outlined dense></v-text-field>
      </v-sheet>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae
            iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
            adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
            Nunc sed turpis.
          </p>

          <p>
            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae
            iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien,
            a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra
            condimentum.
          </p>

          <p>
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam
            commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
          </p>

          <p>
            Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis
            leo. Fusce fermentum odio nec arcu.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et,
            tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a,
            condimentum nec, nisi.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit
            amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere
            eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis,
            euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus
            interdum sagittis.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-arrow-collapse-right',
          text: '个人资料',
        },
        {
          icon: 'mdi-arrow-collapse-right',
          text: '账号设置',
        },
        {
          icon: 'mdi-arrow-collapse-right',
          text: '隐私设置',
        },
        {
          icon: 'mdi-arrow-collapse-right',
          text: '我的收藏',
        },
        {
          icon: 'mdi-arrow-collapse-right',
          text: '浏览历史',
        },
      ],
      model: 0,
    }
  },
  methods: {

  }
}
</script>