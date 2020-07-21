<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { icon, title } = context.props
    const vnodes = []
    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={icon} />)
      } else {
        vnodes.push(<svg-icon class="icon" icon-name={icon} />)
      }
    }
    if (title) {
      vnodes.push(<span class="title" slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
<style lang="scss" scoped>
.title {
    font-size: 18px;
    margin-left: 20px;
}
.icon {
    width:  20px  !important;
    height: 20px !important;
    margin-left: 50px;
    margin-bottom: -5px;
    margin-top: 20px;
}
</style>
