<template>
    <div class="SideBarItem-container" v-if="!item.hidden">
         <!-- <svg-icon :icon-name="item.meta.icon" v-if="item.meta && item.meta.icon"/> -->
         <router-link :to="item.path" v-if=" !item.children && item.meta" @click.native="addTags">
            <el-menu-item :index="item.path">
                <Item :icon="item.meta.icon" :title="item.meta.title"/>
            </el-menu-item>
        </router-link>
        <el-submenu :index="item.path" v-else>
            <template slot="title">
                <Item class="item" :icon="item.meta.icon" :title="item.meta.title"/>
            </template>
            <sideBar-item
                v-for="child in item.children"
                :key="child.path"
                :item="child"
                class="sideBar-item"
            />
      </el-submenu>
    </div>
</template>

<script>
import Item from './item'
export default {
  name: 'SideBarItem',
  components: {
    Item
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    base_url: {
      type: String,
      default: '/'
    }
  },
  watch: {
    $router: {
      handler () {
        console.log(this.$router)
      }
    }
  },
  methods: {
    addTags () {
      console.log(this.item)
      this.$store.commit('routes/CLEAR_TAGVIEWS_STYLE')
      this.item.isOk = true
      this.$store.commit('routes/SET_TAGVIEWS', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.sideBar-item {
    display: flex;
}
.el-submenu__title {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.SideBarItem-container {
    // border: 0.1px solid #ccc;
}
</style>
