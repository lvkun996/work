
const RESULT = require.context('.', true, /\.vue$/)

const GLOBAL_COMPONENTS = RESULT.keys().map(key => key.split('/')[1])

export default {
  install (Vue) {
    GLOBAL_COMPONENTS.forEach(component => {
      // 组件注册的时候，最好使用小写, 用-链接  xx-xx
      // 便于组件准确渲染
      //  使用common.js 的引入方法，因为es6的import 必须置于最顶层
      Vue.component(component, require(`./${component}`).default)
    })
  }
}
