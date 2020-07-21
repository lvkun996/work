<template>
    <div class="TagViews-container">
        <div :class="['tag', 'cp', 'of', tag.isOk? 'select' : '']" v-for="(tag, index) in tagViews" :key="index" @click="jumpRouter(tag)">
            {{tag.meta.title }}
            <span class="delete-tab" @click="deleteTab(tag,index)">x</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TagViews',
  computed: {
    ...mapGetters(['tagViews'])
  },
  methods: {
    jumpRouter (tag) {
      this.$router.push(`${tag.path}`)
      this.$store.commit('routes/CLEAR_TAGVIEWS_STYLE')
      this.$set(tag, 'isOk', true)
    },

    deleteTab (tag, index) {
      console.log(tag, index)
      // this.tagView = this.tagViews.map(item => {
      //   item.isOk = false
      //   return item
      // })

      // this.$set(item, 'isOk', true)
      const data = {
        tag,
        index
      }
      this.$store.dispatch('routes/remove_tagViews', data)
    }
  }
}
</script>
<style scoped lang="scss">
.TagViews-container {
    display: flex;
}
.tag {
    min-width: 80px;
    height: 30px;
    border: 1px solid #409EFF;
    margin-right: 10px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    padding: 0 10px;
}
.select {
  background-color: #409EFF;
  color: #fff;
}
.delete-tab {
    color: skyblue;
}
</style>
