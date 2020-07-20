<template>
    <div class="TagViews-container">
        <div class="tag cp" v-for="(tag, index) in tagViews" :key="index">
            {{tag.meta.title }}
            <span class="delete-tab" @click="deleteTab(tag)">x</span>
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
    deleteTab (item) {
      console.log(item)
      this.$store.dispatch('routes/remove_tagViews', item)
    }
  }
}
</script>
<style scoped lang="scss">
.TagViews-container {
    display: flex;
}
.tag {
    width: 80px;
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
.delete-tab {
    color: skyblue;
}
</style>
