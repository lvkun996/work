<template>
    <div class="Layout-container">
      <SideBar class="SideBar-conatiner"/>
      <div class="main-container">
        <NavBar class="NavBar-container"/>
        <AppMain class="app-container"/>
      </div>
    </div>
</template>

<script>
import NavBar from './NavBar'
import SideBar from './SideBar'
import AppMain from './AppMain'
export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    AppMain
  }
}
</script>
<style scoped lang="scss">

</style>
