<template>
    <div class="Navbar-container">
      <!-- <breadcrumb /> -->
      <TagViews />
        <img class="user-img" src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ7PXOg8UQskrEjqSwywYib5UYqjyAdKTr1ickq03BDOg9xtWIk108SsfHzd6PIXERRkVQSj9pXKsmw/132" alt="">
    </div>
</template>

<script>
import TagViews from './TagViews'
export default {
  name: 'Navbar',
  components: {
    TagViews
  }
}
</script>
<style scoped lang="scss">
  .user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>
