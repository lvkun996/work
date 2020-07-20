<template>
    <div class="login-container">
      <el-button @click="$router.push('/home')">click me</el-button>
    </div>
</template>

<script>

import ICON from '_ICON'
export default {
  name: 'login',
  mixins: [ICON],
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">

</style>
