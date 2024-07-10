<script>
import MarkdownEditor from "@/components/MarkdownEditor/index.vue";

export default {
  name: "editor",
  components: {MarkdownEditor}
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
      <v-btn rounded class="ma-2" outlined color="indigo">
        文章管理
      </v-btn>
      <v-text-field placeholder="标题，1~100字" height="36px" dense outlined hide-details style="margin-top: 6px;"></v-text-field>
      <v-btn rounded class="ma-2" outlined color="indigo">
        保存草稿
      </v-btn>
      <v-btn rounded class="ma-2" outlined color="indigo">
        发布文章
      </v-btn>
    </div>
    <div>
      <markdown-editor/>
    </div>
  </div>
</template>

<style scoped>

</style>