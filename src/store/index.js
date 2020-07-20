import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')

  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

console.log(modules)
console.log(getters)
export default new Vuex.Store({
  modules,
  getters
})
