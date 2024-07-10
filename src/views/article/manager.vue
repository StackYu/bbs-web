<script>
export default {
  name: "manager",
  data() {
    return {
      items: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    }
  },
}
</script>

<template>
  <div class="d-flex flex-column" style="background-color: white">
    <div class="d-flex" style="margin: 10px 20px;text-align: left;">
      <v-btn
          disabled
          class="pa-2"
          color="grey"
          plain
      >
        状态
      </v-btn>
      <v-btn
          :disabled="loading"
          class="pa-2"
          color="grey"
          plain
      >
        全部
      </v-btn>
      <v-btn
          :disabled="loading"
          class="pa-2"
          color="grey"
          plain
      >
        全部可见
      </v-btn>
      <v-btn
          :disabled="loading"
          class="pa-2"
          color="grey"
          plain
      >
        仅我可见
      </v-btn>
      <v-btn
          :disabled="loading"
          class="pa-2"
          color="grey"
          plain
      >
        审核
      </v-btn>
      <v-btn
          :disabled="loading"
          class="pa-2"
          color="grey"
          plain
      >
        草稿
      </v-btn>
      <v-btn
          :disabled="loading"
          class="pa-2"
          color="grey"
          plain
      >
        回收站
      </v-btn>

    </div>
    <div class="d-flex mb-6" style="margin: 0 20px;">
      <div style="width: 100px;">
        <v-select
            :items="items"
            label="年"
            dense
            outlined
            hide-details
        ></v-select>
      </div>
      <div style="width: 100px;margin-left: 5px;">
        <v-select
            :items="items"
            label="月"
            dense
            outlined
            hide-details
        ></v-select>
      </div>
      <div style="width: 200px;margin-left: 20px;">
        <v-select
            :items="items"
            label="文章类型"
            dense
            outlined
            hide-details
        ></v-select>
      </div>
      <div style="width: 200px;margin-left: 20px;margin-right: 20px;">
        <v-select
            :items="items"
            label="分类专栏"
            dense
            outlined
            hide-details
        ></v-select>
      </div>
      <v-text-field
          label="Outlined"
          single-line
          outlined
          dense
          hide-details
      ></v-text-field>
      <v-btn
          style="margin-left: 20px;"
          :disabled="loading"
          class="pa-2"
          color="red"
          outlined
      >
        搜索
      </v-btn>
    </div>
    <div class="d-flex" style="margin: 0 20px;border-bottom: 1px dotted #ddd;padding: 20px 0;">
      <div style="border: 1px solid #f0f0f0">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="90"
            width="160"
            src="http://localhost:8080/favicon.ico"
        ></v-img>
      </div>
      <div class="d-flex justify-space-between flex-column" style="width: 100%;margin-left: 20px;">
        <div class="d-flex justify-space-between">
          <a style="font-size: 16px;color: #555666;">我是测试文章的标题</a>
          <span style="color: #999;font-size: 16px;">2021-12-23 06:00:00</span>
        </div>
        <div>
          <span
              style="color: #fc5531;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #fff5f2">原创</span>
          <span
              style="color: #999aaa;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #f5f5f5">草稿</span>
        </div>
        <div class="d-flex justify-space-between">
          <div style="color: #999aaa;font-size: 14px;">
            展示量<span>0</span>
            阅读<span>0</span>
            评论<span>0</span>
            收藏<span>0</span>
          </div>
          <div>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">查看数据</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">编辑</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">浏览</a>
            <v-icon style="margin-left: 10px;">mdi-dots-horizontal</v-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex" style="margin: 0 20px;border-bottom: 1px dotted #ddd;padding: 20px 0;">
      <div style="border: 1px solid #f0f0f0">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="90"
            width="160"
            src="http://localhost:8080/favicon.ico"
        ></v-img>
      </div>
      <div class="d-flex justify-space-between flex-column" style="width: 100%;margin-left: 20px;">
        <div class="d-flex justify-space-between">
          <a style="font-size: 16px;color: #555666;">我是测试文章的标题</a>
          <span style="color: #999;font-size: 16px;">2021-12-23 06:00:00</span>
        </div>
        <div>
          <span
              style="color: #fc5531;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #fff5f2">原创</span>
          <span
              style="color: #999aaa;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #f5f5f5">草稿</span>
        </div>
        <div class="d-flex justify-space-between">
          <div style="color: #999aaa;font-size: 14px;">
            展示量<span>0</span>
            阅读<span>0</span>
            评论<span>0</span>
            收藏<span>0</span>
          </div>
          <div>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">查看数据</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">编辑</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">浏览</a>
            <v-icon style="margin-left: 10px;">mdi-dots-horizontal</v-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex" style="margin: 0 20px;border-bottom: 1px dotted #ddd;padding: 20px 0;">
      <div style="border: 1px solid #f0f0f0">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="90"
            width="160"
            src="http://localhost:8080/favicon.ico"
        ></v-img>
      </div>
      <div class="d-flex justify-space-between flex-column" style="width: 100%;margin-left: 20px;">
        <div class="d-flex justify-space-between">
          <a style="font-size: 16px;color: #555666;">我是测试文章的标题</a>
          <span style="color: #999;font-size: 16px;">2021-12-23 06:00:00</span>
        </div>
        <div>
          <span
              style="color: #fc5531;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #fff5f2">原创</span>
          <span
              style="color: #999aaa;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #f5f5f5">草稿</span>
        </div>
        <div class="d-flex justify-space-between">
          <div style="color: #999aaa;font-size: 14px;">
            展示量<span>0</span>
            阅读<span>0</span>
            评论<span>0</span>
            收藏<span>0</span>
          </div>
          <div>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">查看数据</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">编辑</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">浏览</a>
            <v-icon style="margin-left: 10px;">mdi-dots-horizontal</v-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex" style="margin: 0 20px;border-bottom: 1px dotted #ddd;padding: 20px 0;">
      <div style="border: 1px solid #f0f0f0">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="90"
            width="160"
            src="http://localhost:8080/favicon.ico"
        ></v-img>
      </div>
      <div class="d-flex justify-space-between flex-column" style="width: 100%;margin-left: 20px;">
        <div class="d-flex justify-space-between">
          <a style="font-size: 16px;color: #555666;">我是测试文章的标题</a>
          <span style="color: #999;font-size: 16px;">2021-12-23 06:00:00</span>
        </div>
        <div>
          <span
              style="color: #fc5531;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #fff5f2">原创</span>
          <span
              style="color: #999aaa;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #f5f5f5">草稿</span>
        </div>
        <div class="d-flex justify-space-between">
          <div style="color: #999aaa;font-size: 14px;">
            展示量<span>0</span>
            阅读<span>0</span>
            评论<span>0</span>
            收藏<span>0</span>
          </div>
          <div>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">查看数据</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">编辑</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">浏览</a>
            <v-icon style="margin-left: 10px;">mdi-dots-horizontal</v-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex" style="margin: 0 20px;border-bottom: 1px dotted #ddd;padding: 20px 0;">
      <div style="border: 1px solid #f0f0f0">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="90"
            width="160"
            src="http://localhost:8080/favicon.ico"
        ></v-img>
      </div>
      <div class="d-flex justify-space-between flex-column" style="width: 100%;margin-left: 20px;">
        <div class="d-flex justify-space-between">
          <a style="font-size: 16px;color: #555666;">我是测试文章的标题</a>
          <span style="color: #999;font-size: 16px;">2021-12-23 06:00:00</span>
        </div>
        <div>
          <span
              style="color: #fc5531;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #fff5f2">原创</span>
          <span
              style="color: #999aaa;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #f5f5f5">草稿</span>
        </div>
        <div class="d-flex justify-space-between">
          <div style="color: #999aaa;font-size: 14px;">
            展示量<span>0</span>
            阅读<span>0</span>
            评论<span>0</span>
            收藏<span>0</span>
          </div>
          <div>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">查看数据</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">编辑</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">浏览</a>
            <v-icon style="margin-left: 10px;">mdi-dots-horizontal</v-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex" style="margin: 0 20px;border-bottom: 1px dotted #ddd;padding: 20px 0;">
      <div style="border: 1px solid #f0f0f0">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="90"
            width="160"
            src="http://localhost:8080/favicon.ico"
        ></v-img>
      </div>
      <div class="d-flex justify-space-between flex-column" style="width: 100%;margin-left: 20px;">
        <div class="d-flex justify-space-between">
          <a style="font-size: 16px;color: #555666;">我是测试文章的标题</a>
          <span style="color: #999;font-size: 16px;">2021-12-23 06:00:00</span>
        </div>
        <div>
          <span
              style="color: #fc5531;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #fff5f2">原创</span>
          <span
              style="color: #999aaa;width:32px;padding:2px;height: 18px;margin-right: 8px;border-radius: 2px;font-size:12px;background: #f5f5f5">草稿</span>
        </div>
        <div class="d-flex justify-space-between">
          <div style="color: #999aaa;font-size: 14px;">
            展示量<span>0</span>
            阅读<span>0</span>
            评论<span>0</span>
            收藏<span>0</span>
          </div>
          <div>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">查看数据</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">编辑</a>
            <a style="margin-left: 10px;font-size: 16px;color: #555666;">浏览</a>
            <v-icon style="margin-left: 10px;">mdi-dots-horizontal</v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  color: yellow;
}
</style>