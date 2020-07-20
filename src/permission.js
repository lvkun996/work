import router from './router'
import store from './store'
import NProgress from 'nprogress' // 进度条组件
import 'nprogress/nprogress.css'

store.commit('routes/SET_ROUTES', router.options.routes)

NProgress.configure({ showSpinner: false }) // 关闭右上角环形进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
