import { setItem, getItem } from '@/utils/storage'
// import router from '@/router'
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
    // state.tagViews = state.tagViews.map(item => {
    //   item.isOk = false
    //   return item
    // })

    const res = state.tagViews.every(item => item.meta.title !== data.meta.title)
    if (!res) return false

    state.tagViews.push(data)
    setItem('tabViews', state.tagViews)
  },
  REMOVE_TAGVIEWS (state, data) {
    const { tag } = data
    // console.log(data, state.tagViews[index - 1])
    // if (state.tagViews.length > 0) {
    //   router.push('/dashboard')
    //   console.log(state.tagViews[index - 1].path)
    // }
    state.tagViews = state.tagViews.map(item => {
      if (JSON.stringify(item) === JSON.stringify(tag)) {
        return false
      } else {
        console.log('hello')
        return item
      }
    }).filter(ele => ele)

    console.log(state.tagViews)
    setItem('tabViews', state.tagViews)
  },
  CLEAR_TAGVIEWS_STYLE (state, data) {
    state.tagViews = state.tagViews.map(item => {
      console.log('hello')
      item.isOk = false
      return item
    })
  }
}

const actions = {
  remove_tagViews ({ commit }, data) {
    commit('REMOVE_TAGVIEWS', data)
  },
  clear_tagViews_style ({ commit }, data) {
    commit('CLEAR_TAGVIEWS_STYLE', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
