<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconName: {
      type: String,
      default: ''
    }
  },
  computed: {
    icon () {
      return `#${this.iconName}`
    }
  }
}
</script>
<style lang="scss" scoped>
  .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
