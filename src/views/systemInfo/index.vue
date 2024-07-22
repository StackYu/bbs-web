<script>
import {
  deleteSystemInfo,
  getAllSystemInfo,
  getSystemInfoChildren,
  saveSystemInfo,
  updateSystemInfo
} from "@/api/SystemInfo";

export default {
  data: () => ({
    items: [],
    active: [],
    dialog: false,
    deleteDialog: false,
    snackbar: false,
    snackbarText: '',
    systemInfo: {},
    // 0:新增，1：删除，2：修改
    updateStatus: 0,
  }),
  methods: {
    addSystemInfo() {
      this.updateStatus = 0
      this.openSystemInfoHandlerDialog()
    },
    deleteSystemInfo() {
      this.updateStatus = 1
      if (!this.active || this.active.length === 0) {
        this.snackbar = true
        this.snackbarText = '请选择需要删除的菜单'
        return
      }
      this.deleteDialog = true
    },
    editorSystemInfo() {
      this.updateStatus = 2
      if (!this.active || this.active.length === 0) {
        this.snackbar = true
        this.snackbarText = '请选择需要修改的菜单'
        return
      }
      this.openSystemInfoHandlerDialog(2)
    },
    deleteDialogHandler(flag) {
      if (flag) {
        deleteSystemInfo(this.active[0].id)
      }
      this.deleteDialog = false
    },
    openSystemInfoHandlerDialog() {
      if (this.updateStatus === 2) {
        this.systemInfo = this.active[0]
      } else {
        if (this.active && this.active.length > 0) {
          this.systemInfo.parentId = this.active[0].id;
        }
      }
      this.dialog = !this.dialog;
    },
    submitSystemInfoForm() {

      if (this.updateStatus === 0) {
        const formData = new FormData()
        if (!(this.systemInfo.parentId === null || this.systemInfo.parentId === undefined)) {
          formData.append("parentId", this.systemInfo.parentId);
        }
        formData.append("systemName", this.systemInfo.systemName);
        formData.append("url", this.systemInfo.url);
        formData.append("link", this.systemInfo.link);

        let axiosPromise = saveSystemInfo(formData);
        console.log(axiosPromise)
        axiosPromise.then(response => {
          const {data} = response
          if (data.error === 0) {
            this.snackbarText = '系统信息提交成功'
            this.snackbar = true
            this.dialog = false
          } else {
            this.snackbarText = '系统信息提交失败'
            this.snackbar = true
          }
        })
      }

      if (this.updateStatus === 1) {
        let axiosPromise1 = deleteSystemInfo(this.active[0].id);
        console.log(axiosPromise1)
        axiosPromise1.then(response => {
          const {data} = response
          if (data.error === 0) {
            this.snackbarText = '系统信息提交成功'
            this.snackbar = true
            this.dialog = false
          } else {
            this.snackbarText = '系统信息提交失败'
            this.snackbar = true
          }
        });
      }

      if (this.updateStatus === 2) {
        const formData = new FormData()
        formData.append("id", this.systemInfo.id);
        if (!(this.systemInfo.parentId === null || this.systemInfo.parentId === undefined)) {
          formData.append("parentId", Number.parseInt(this.systemInfo.parentId));
        }
        formData.append("systemName", this.systemInfo.systemName);
        formData.append("url", this.systemInfo.url);
        formData.append("link", this.systemInfo.link);
        updateSystemInfo(formData).then(response => {
          const {data} = response
          if (data.error === 0) {
            this.snackbarText = '系统信息提交成功'
            this.snackbar = true
            this.dialog = false
          } else {
            this.snackbarText = '系统信息提交失败'
            this.snackbar = true
          }
        })
      }

    },
    loadSystemInfo() {
      getAllSystemInfo().then(response => {
        const {data} = response
        if (data.error === 0) {
          data.data.forEach(i => {
            i.children = []
          })
          this.items = data.data
        } else {
          this.snackbar = true
          this.snackbarText = data.message
        }
      })
    },
    fetchUsers(item) {
      getSystemInfoChildren(item.id).then(response => {
        const {data} = response
        item.children.push(...data.data);
      })
    },
  },
  created() {
    this.loadSystemInfo()
  }
}
</script>

<template>
  <v-tabs vertical>
    <v-card>
      <v-card-title class="indigo white--text text-h5">
        系统信息
        <v-spacer></v-spacer>
        <v-btn fab dark small color="green" @click="editorSystemInfo">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="cyan" @click="addSystemInfo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red" @click="deleteSystemInfo">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-row class="pa-4" justify="space-between">
        <v-col>
          <v-treeview :items="items" :active.sync="active" :load-children="fetchUsers"
                      dense hoverable activatable return-object color="warning">
          </v-treeview>
        </v-col>
      </v-row>
    </v-card>

    <!--  menu操作dialog  -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title><span class="text-h5">系统信息操作</span></v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="systemInfo.systemName" label="系统名称" hint="系统信息，唯一" persistent-hint
                              required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="systemInfo.url" label="系统访问路径" hint="系统信息请求路径" persistent-hint>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="systemInfo.link" label="系统内部访问路由" hint="系统内部请求链接"
                              persistent-hint>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">取消</v-btn>
          <v-btn color="blue darken-1" text @click="submitSystemInfoForm">提交</v-btn>
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