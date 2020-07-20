import { setItem, getItem } from '@/utils/storage'
const state = {
  routes: [], // 路由表
  tagViews: getItem('tabViews') || [] // 显示的TagViews标签
}

const mutations = {
  SET_ROUTES (state, data) {
    state.routes = data
  },
  SET_TAGVIEWS (state, data) {
    console.log(data)
    const res = state.tagViews.every(item => item.meta.title !== data.meta.title)
    if (!res) return false
    state.tagViews.push(data)
    setItem('tabViews', state.tagViews)
  },
  REMOVE_TAGVIEWS (state, data) {
    console.log(data)
    state.tagViews = state.tagViews.map(item => {
      if (JSON.stringify(item) === JSON.stringify(data)) {
        return false
      } else {
        console.log('hello')
        return item
      }
    }).filter(ele => ele)
    console.log(state.tagViews)
    setItem('tabViews', state.tagViews)
  }
}

const actions = {
  remove_tagViews ({ commit }, data) {
    commit('REMOVE_TAGVIEWS', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
