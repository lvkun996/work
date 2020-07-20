<template>
    <div class="SideBar-container">
       <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :background-color="variables.$menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
       >
       <sideBar-item v-for="route in routes" :key="route.path" :item="route" :base_url="route.path"/>
       </el-menu>
    </div>
</template>

<script>
import variables from '@/styles/variables.scss'
import SideBarItem from './SideBarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  components: {
    SideBarItem
  },
  computed: {
    variables () {
      return variables
    },
    ...mapGetters(['routes'])
  }
}
</script>
<style scoped lang="scss">

</style>
