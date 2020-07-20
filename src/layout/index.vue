<template>
    <div class="Layout-container">
      <SideBar class="SideBar-conatiner"/>
      <NavBar class="NavBar-container"/>

    </div>
</template>

<script>
import NavBar from './NavBar'
import SideBar from './SideBar'
export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar
  }
}
</script>
<style scoped lang="scss">

</style>
