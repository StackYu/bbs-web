<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
        >
          <v-card>
            <v-subheader>{{ card }}</v-subheader>

            <v-list two-line>
              <template v-for="n in 10">
                  <v-list-item :key="n" style="border-bottom:solid 1px rgba(0,0,0,.12); " @click="toArticle">
                    <v-list-item-avatar color="grey darken-1"></v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>
                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio
                        similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
<!--                  <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>-->
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="3">
      <v-sheet rounded="lg">
        <v-list color="transparent">
          <v-list-item
              v-for="n in 5"
              :key="n"
              link
          >
            <v-list-item-content>
              <v-list-item-title>
                List Item {{ n }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item
              link
              color="grey lighten-4"
          >
            <v-list-item-content>
              <v-list-item-title>
                Refresh
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      cards: ['今日热门', '新发文章', '最新回复', '评论最多'],
    }
  },
  methods:{
    toArticle() {

    },
  }
}
</script>
<style>
.v-card.on-hover.theme--dark {
background-color: rgba(#FFF, 0.8)
}

>.v-card__text {
color: #000
}

</style>