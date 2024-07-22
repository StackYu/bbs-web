<script>
import editor from "@/views/article/editor.vue";
import {deleteMenuByUid, saveMenu} from "@/api/menu";

export default {
  data: () => ({
    items: [],
    active: [],
    dialog: false,
    deleteDialog: false,
    snackbar: false,
    snackbarText: '',
    menu: {},
  }),
  methods: {
    addMenu() {
      this.openMenuHandlerDialog('add')
    },
    deleteMenu() {
      if (!this.active || this.active.length === 0) {
        this.snackbar = true
        this.snackbarText = '请选择需要删除的菜单'
        return
      }
      this.deleteDialog = true
    },
    editorMenu() {
      if (!this.active || this.active.length === 0) {
        this.snackbar = true
        this.snackbarText = '请选择需要修改的菜单'
        return
      }
      this.openMenuHandlerDialog('editor')
    },
    deleteDialogHandler(flag) {
      if (flag) {
        deleteMenuByUid(this.active[0].id)
      }
      this.deleteDialog = false
    },
    openMenuHandlerDialog(type) {
      if ('editor' === type) {
        this.menu = this.active[0]
      } else {
        if (this.active && this.active.length > 0) {
          this.menu.parentId = this.active[0].id;
        }
      }
      this.dialog = !this.dialog;
    },
    submitMenuForm() {
      const formData = new FormData()
      formData.append("parentId", this.menu.parentId);
      formData.append("userName", this.menu.userName)
      formData.append("title", this.menu.title)
      formData.append("icon", this.menu.icon)
      formData.append("url", this.menu.url)
      formData.append("path", this.menu.path)
      formData.append("path", this.menu.path)
      formData.append("componentPath", this.menu.componentPath)
      formData.append("hidden", this.menu.hidden)

      saveMenu(formData).then(response => {
        const {data} = response
        if (data.error === 0) {
          this.snackbarText = '菜单提交成功'
          this.snackbar = true
          this.dialog = false
        } else {
          this.snackbarText = '菜单提交失败'
          this.snackbar = true
        }
      })

    },
    loadMenu() {

    },
  }
}
</script>

<template>
  <v-tabs vertical>
    <v-card>
      <v-card-title class="indigo white--text text-h5">
        系统信息
        <v-spacer></v-spacer>
        <v-btn fab dark small color="green" @click="editorMenu">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="cyan" @click="addMenu">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red" @click="deleteMenu">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-row class="pa-4" justify="space-between">
        <v-col>
          <v-treeview :items="items" :active.sync="active" dense hoverable activatable return-object color="warning">
          </v-treeview>
        </v-col>
      </v-row>
    </v-card>

    <!--  menu操作dialog  -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title><span class="text-h5">菜单操作</span></v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.menuName" label="菜单名称" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.title" label="菜单标题" hint="菜单标题，页面显示标题" persistent-hint
                              required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.icon" label="菜单图标" hint="菜单图标，参考Vuetify图标" persistent-hint
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field v-model="menu.url" label="菜单路径" hint="请求路径" persistent-hint></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="menu.path" label="菜单路由路径" hint="前端路由路径" persistent-hint
                              required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="menu.componentPath" label="菜单组件路径" hint="Vue菜单组件路径" persistent-hint
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-switch
                    v-model="menu.hidden"
                    label="是否隐藏"
                ></v-switch>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">取消</v-btn>
          <v-btn color="blue darken-1" text @click="submitMenuForm">提交</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--  删除Dialog  -->
    <v-dialog v-model="deleteDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">删除提示</v-card-title>
        <v-card-text>确定要删除选中菜单么？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteDialogHandler(false)">
            取消
          </v-btn>
          <v-btn color="green darken-1" text @click="deleteDialogHandler(true)">
            确认
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--  提示信息  -->
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">关闭</v-btn>
      </template>
    </v-snackbar>
  </v-tabs>
</template>

<style scoped>

</style>