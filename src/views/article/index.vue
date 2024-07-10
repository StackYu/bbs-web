<script>
import highlight from "highlight.js/lib/core";

export default {
  name: "index",
  data() {
    return {
      model: null,
      classes: [
        ['h1', '这是测试文章', '6rem', '300', '-.015625em', -1],
        ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
        ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
        ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
        ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
        ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
        ['subtitle-1', 'Subtitle 1', '1rem', '400', '.009375em', 4],
        ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
        ['body-1', 'Body 1', '1rem', '400', '.03125em', 4],
        ['body-2', 'Body 2', '0.875rem', '400', '.0178571429em', 4],
        ['button', 'Button', '0.875rem', '500', '.0892857143em', 4],
        ['caption', 'Caption', '0.75rem', '400', '.0333333333em', 4],
        ['overline', 'Overline', '0.75rem', '500', '.1666666667em', 4],
      ],
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
    }
  },

  methods: {},
  mounted() {
    highlight.highlightAll();
  }
}
</script>

<template>
  <v-item-group mandatory>
    <v-sheet class="overflow-y-auto" min-height="600" tile>
      <v-item>
        <template>
          <v-sheet class="px-4 pt-4 pb-3 active grey lighten-4" tile @click="toggle">
            <div class="transition-swing text-h3 active mb--1"> 这是测试文章</div>

            <v-expand-transition>
              <v-responsive style="padding-top: 10px;">
                <div class="d-flex justify-space-between text-caption">
                  <div>
                    <div class="grey--text mb-2">作者</div>
                    <div class="font-weight-medium">Xiaoyu</div>
                  </div>
                  <div>
                    <div class="grey--text mb-2">修改时间</div>
                    <div class="font-weight-medium">2024-04-19 20:42:00</div>
                  </div>
                  <div>
                    <div class="grey--text mb-2">阅读</div>
                    <div class="font-weight-medium">6rem</div>
                  </div>
                  <div>
                    <div class="grey--text text-darken-1 mb-2">收藏</div>
                    <div class="font-weight-medium">-.015625em</div>
                  </div>
                  <div>
                    <div class="grey--text mb-2">点赞</div>
                    <div class="font-weight-medium">6rem</div>
                  </div>
                </div>
              </v-responsive>
            </v-expand-transition>

            <v-expand-transition>
              <v-responsive style="padding-top: 10px;">
                <div class="d-flex  text-caption">
                  <div style="width: 100px;">
                    <div class="grey--text mb-1" style="line-height: 48px;font-size: 16px;">分类:</div>
                  </div>
                  <div>
                    <v-chip-group
                        active-class="primary--text"
                        column
                    >
                      <v-chip
                          v-for="tag in tags"
                          :key="tag"
                      >
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </div>
              </v-responsive>
            </v-expand-transition>

            <v-expand-transition>
              <v-responsive style="padding-top: 10px;">
                <div class="d-flex  text-caption">
                  <div style="width: 100px;">
                    <div class="grey--text mb-1" style="line-height: 48px;font-size: 16px;">标签:</div>
                  </div>
                  <div>
                    <v-chip-group
                        active-class="primary--text"
                        column
                    >
                      <v-chip
                          v-for="tag in tags"
                          :key="tag"
                      >
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </div>
              </v-responsive>
            </v-expand-transition>
          </v-sheet>
        </template>
      </v-item>
      <v-item>
        <div class="d-flex text-caption" style="padding: 15px; margin: 15px;border: 1px solid #f0f0f0">
          <div class="mr-auto">
            <v-avatar tile color="blue" style="width: 40px;">
              <v-icon dark>
                mdi-alarm
              </v-icon>
            </v-avatar>
          </div>
          <div class="mr-auto">
            <div style="line-height: 52px;font-size: 16px;color: #222226;padding-left: 10px;">CSS 基础</div>
          </div>
          <v-spacer></v-spacer>
          <div>
            <div style="line-height: 52px;font-size: 14px;color: #999aaa;padding-left: 10px;">阅读:30</div>
          </div>
          <div>
            <div style="line-height: 52px;font-size: 14px;color: #999aaa;padding-left: 10px;">收藏:4</div>
          </div>
          <div>
            <div >
              <v-btn
                  rounded
                  class="ma-2"
                  outlined
                  color="indigo"
              >
                订阅专栏
              </v-btn>
            </div>
          </div>
        </div>
      </v-item>
      <v-item>
        <div class="transition-swing text-body-1 active mb-4 " style="padding: 10px;">
          <p>我的天</p>
          <div data-language="text" class="toastui-editor-ww-code-block">
            <pre>
              <code class="language-java">
                class People{
                  private String name;
                }
              </code>
            </pre>
          </div>
          <table>
            <thead>
            <tr>
              <th><p>1</p></th>
              <th><p>3</p></th>
              <th><p>4</p></th>
              <th><p>4</p></th>
              <th><p>4</p></th>
              <th><p>4</p></th>
              <th><p>4</p></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><p>哈</p></td>
              <td><p>哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
            </tr>
            <tr>
              <td><p>哈</p></td>
              <td><p>哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
            </tr>
            <tr>
              <td><p>哈</p></td>
              <td><p>哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
              <td><p>哈哈哈</p></td>
            </tr>
            </tbody>
          </table>
          <p><img
              src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAnwAAAEwCAMAAAAaQVzuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACu1BMVEUAgAALhgtCoUKKxYq63bro8+j////n8+e53LmHw4c+nz4JhAkqlSq327ev168kkiQXixer1asSiRI6nTr8/vwxmTFisWJSqVJarVpMpkw3mzcsliwIhAj3+/cGgwZ9vn1wuHAQiBALhQtksmRUqlTg7+DI5MgHgwclkiUbjRs8njwvly9VqlVFokWl0qXN5s3o9Ojy+fL4/Pjz+fPu9+7V6tW73buQyJBLpUtRqFGu167p9On+//7Y7NiLxYvk8uRdrl0Nhg18vnzg8OD5/PnH48djsWPc7tz7/ftHo0ccjhy227bw+PCPx49AoEDU6tS02rRJpEnR6NGq1aqFwoV4vHj2+/YmkybS6dK83ryIxIj6/frF4sU1mjVotGij0aNqtWrO587d7t1zuXOo1Kjt9u2UypRptGmMxozv9++CwYLE4sSx2LE4nDje796dzp3j8eM9nj2EwoRgsGDx+PFNpk12u3bD4cPX69ep1KmVypX1+vXK5crr9etTqVODwYPm8+aczpwCgQI0mjSRyJGOx45QqFAhkCEUihRms2as1qzq9erb7duSyZKGw4Y7nTsejx4ymTKWy5aazZoikSKy2bIFggUVihXA4MDf79++376z2bOi0aJ3u3ek0qS43LjG48YDgQNPp09crlyYzJhZrFmg0KAKhQqbzZvh8OGh0KF5vHlut24xmDHa7doZjBnC4cLs9uzl8uV/v3+m06bP588TiRNstmw5nDmn06fi8eIajRqBwIFer17Q6NBYrFgPhw9hsGFlsmXM5szL5cuNxo0fjx+Xy5eJxIlDoUO93r2ZzJn9/v2AwIDW69YRiBF0unSez5612rVXq1f0+vR+v34olChfr1/Z7NlyuXIOhw6w2LCt1q0tli0plCkdjh3J5MkWixZttm3T6dOfz59xuHEMhgwrlStZrVnqRnLdAAASh0lEQVR42u2d+2NU1Z3Ar7F7iTit4M6iVVNQusS6Ugh5COSyMCYkIaS8iiEpQRQhQARNMSAli5JApeALWkBFsEV3sQoiq6LVpcWtWl2k7naLXW2763bbffwZmyc5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"
              alt="SpringMVC" contenteditable="false"><br></p>
          <p><br></p>
          <p>哈哈</p>
          <p><br></p>
          <p>
            <del>sasas</del>
          </p>
        </div>
      </v-item>
    </v-sheet>
  </v-item-group>
</template>

<style scoped>
table {
  width: 80%;
  margin: 30px auto; /* 让表格居中 */
  border-collapse: collapse;
  border: 2px solid #ddd; /* 整体边框颜色 */
}

th,
td {
  line-height: 40px; /* 行高 */
  border: 1px solid #ddd; /* 每行边框 */
  text-align: center;
  font-size: 16px;
}

th {
  background-color: #007bff; /* 表头背景色 */
  color: #ffffff;
}

/* 这次奇偶行用 class 来写 */
tr.even {
  background-color: #eee; /* 偶数行浅灰色 */
}

tr:hover {
  background-color: #ccc; /* 鼠标悬停时的背景色:蓝色 */
}

/* 把90分以上的要特殊标识绿色 */
td.perfect {
  background-color: #00ff00; /* 绿色背景 */
}
</style>