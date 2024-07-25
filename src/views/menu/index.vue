<script>
import {getAllSystemInfo, getSystemInfoChildren} from "@/api/SystemInfo";
import {deleteMenu, getAllMenuBySystemInfo, saveMenu, updateMenu} from "@/api/menu";
import {isNotEmpty} from "@/utils/ObjectUtil";

export default {
  data: () => ({
    // systemInfo-start
    systemInfoTreeItems: [],
    systemInfoTreeActive: [],
    // systemInfo-end

    // systemInfo-start
    menuTreeItems: [],
    menuTreeActive: [],
    // systemInfo-end

    // 提示信息-start
    snackbar: false,
    snackbarText: '',
    // 提示信息-end

    // dialog显示
    dialog: false,
    // 提示dialog显示
    deleteDialog: false,

    menu: {meta: {}},

    // editor Dialog状态（-1:null,0：add,1:delete,2:update,3:select）
    updateStatus: -1
  }),
  methods: {
    // 新增菜单按钮事件
    addMenu() {
      this.menu = {meta: {}}
      // 是否选择父菜单
      if (this.menuTreeActive.length !== 0) {
        this.menu.parentId = this.menuTreeActive[0].id
      }
      // 判断是否选择系统
      else if (this.systemInfoTreeActive.length !== 0) {
        this.menu.systemInfoId = this.systemInfoTreeActive[0]
      }
      // 都未选择
      else {
        this.snackbarText = '亲选择菜单父类或系统信息'
        this.snackbar = true
        return
      }
      this.updateStatus = 0
      this.dialog = true
    },
    // 删除菜单按钮事件
    deleteMenu() {
      this.menu = {meta: {}}
      // 是否选择菜单
      if (this.menuTreeActive.length !== 0) {
        this.menu.id = this.menuTreeActive[0].id
        this.updateStatus = 1
        this.deleteDialog = true
      } else {
        this.snackbarText = '请选择需要删除的菜单'
        this.snackbar = true
      }
    },
    // 修改菜单按钮事件
    editorMenu() {
      this.menu = {meta: {}}
      // 是否选择菜单
      if (this.menuTreeActive.length !== 0) {
        this.menu = this.menuTreeActive[0]
        this.updateStatus = 2
        this.dialog = true
      } else {
        this.snackbarText = '请选择需要修改的菜单'
        this.snackbar = true
      }
    },
    // dialog提交事件
    submitMenuForm() {
      const menuFormData = new FormData()
      if (isNotEmpty(this.menu.id)) {
        menuFormData.append('id', this.menu.id);
      }
      if (isNotEmpty(this.menu.parentId)) {
        menuFormData.append('parentId', this.menu.parentId);
      }
      if (isNotEmpty(this.menu.systemInfoId)) {
        menuFormData.append('systemInfoId', this.menu.systemInfoId);
      }
      if (isNotEmpty(this.menu.menuName)) {
        menuFormData.append('menuName', this.menu.menuName);
      }
      if (isNotEmpty(this.menu.name)) {
        menuFormData.append('name', this.menu.name);
      }
      if (isNotEmpty(this.menu.meta.title)) {
        menuFormData.append('meta.title', this.menu.meta.title);
      }
      if (isNotEmpty(this.menu.path)) {
        menuFormData.append('path', this.menu.path);
      }
      if (isNotEmpty(this.menu.componentPath)) {
        menuFormData.append('componentPath', this.menu.componentPath);
      }
      if (isNotEmpty(this.menu.redirect)) {
        menuFormData.append('redirect', this.menu.redirect);
      }
      if (isNotEmpty(this.menu.meta.icon)) {
        menuFormData.append('meta.icon', this.menu.meta.icon);
      }
      if (isNotEmpty(this.menu.hidden)) {
        menuFormData.append('hidden', this.menu.hidden);
      }
      switch (this.updateStatus) {
        case -1:
          this.snackbarText = '无效操作'
          this.snackbar = true
          break
        case 0:
          saveMenu(menuFormData).then(response => {
            const {data} = response
            if (data.error === 0) {
              this.loadMenu(this.systemInfoTreeActive[0])
            }
            this.snackbarText = data.message
            this.snackbar = true
          });
          break
        case 2:
          updateMenu(menuFormData).then(response => {
            const {data} = response
            if (data.error === 0) {
              this.loadMenu(this.systemInfoTreeActive[0])
            }
            this.snackbarText = data.message
            this.snackbar = true
          });
          break
        default:
          this.snackbarText = 'submitMenuForm似乎出现问题'
          this.snackbar = true
      }
      this.dialog = false
    },
    // 删除dialog提交事件
    deleteDialogHandler(flag) {
      if (flag) {
        deleteMenu(this.menu.id).then(response => {
          const {data} = response
          if (data.error === 0) {
            this.loadMenu(this.systemInfoTreeActive[0])
          }
          this.snackbarText = data.message;
          this.snackbar = true
        })
      } else {
        this.snackbarText = '删除取消'
        this.snackbar = true
      }
      this.deleteDialog = false
    },
    // 加载系统信息
    loadSystemInfo() {
      getAllSystemInfo().then(response => {
        const {data} = response
        if (data.error === 0) {
          data.data.forEach(i => {
            i.children = []
          })
          this.systemInfoTreeItems = data.data
        } else {
          this.snackbar = true
          this.snackbarText = data.message
        }
      })
    },
    // 通过系统信息加载菜单信息
    loadMenu(systemInfoId) {
      getAllMenuBySystemInfo(systemInfoId).then(response => {
        const {data} = response
        if (data.error === 0) {
          if (data.data === null) {
            this.menuTreeItems = [];
          } else {
            this.menuTreeItems = data.data;
          }
        } else {
          this.snackbar = true
          this.snackbarText = data.message
        }
      })
    },
    // 系统异步加载
    systemInfoTreeFetchUsers(item) {
      getSystemInfoChildren(item.id).then(response => {
        const {data} = response
        item.children.push(...data.data)
      })
    },
    // 菜单异步加载
    menuTreeFetchUsers(item) {
      getSystemInfoChildren(item.id).then(response => {
        const {data} = response
        item.children.push(...data.data)
      })
    },
  },
  created() {
    this.loadSystemInfo()
  },
  watch: {
    systemInfoTreeActive(newValue, oldValue) {
      if (newValue.length === 0) {
        this.menuTreeItems = []
      } else {
        this.loadMenu(newValue)
      }
    }
  },
}
</script>

<template>
  <v-tabs vertical>
    <v-card>
      <v-card-title class="indigo white--text text-h5">
        菜单信息
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
        <v-col cols="5">
          <!--    SystemInfo tree      -->
          <v-treeview :items="systemInfoTreeItems" :active.sync="systemInfoTreeActive"
                      :load-children="systemInfoTreeFetchUsers"
                      dense hoverable activatable color="warning">
          </v-treeview>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <!--    SystemInfo tree      -->
          <v-treeview :items="menuTreeItems" :active.sync="menuTreeActive"
                      :load-children="menuTreeFetchUsers"
                      dense hoverable activatable return-object color="warning">
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
                <v-text-field v-model="menu.systemInfoId" label="系统信息id" hint="只读" persistent-hint readonly>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.parentId" label="菜单父id" hint="只读" persistent-hint readonly>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.id" label="菜单id" hint="只读" persistent-hint readonly>
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.menuName" label="菜单昵称" hint="菜单标识昵称" persistent-hint required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.name" label="菜单名称" hint="菜单名称，主要显示名称" persistent-hint required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.meta.title" label="菜单标题" hint="菜单标题，页面显示名称" persistent-hint>
                </v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field v-model="menu.path" label="菜单路由路径" hint="前端路由路径" persistent-hint required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="menu.componentPath" label="菜单组件路径" hint="Vue菜单组件路径" persistent-hint required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="menu.redirect" label="重定向路径" hint="被访问路径将重定向路径" persistent-hint>
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="menu.meta.icon" label="菜单图标" hint="显示的图标" persistent-hint>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-switch v-model="menu.hidden" label="是否隐藏"></v-switch>
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