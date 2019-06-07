import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Crystal/blog'
})
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    blogs: [],
    blog: {}
  },
  mutations: {
    setBlogs(state, blogs = []) {
      state.blogs = blogs
    },
    setBlog(state, blog) {
      state.blog = blog
    }
  },
  actions: {
    async getBlogs({ commit }) {
      try {
        let res = await _api.get('')
        commit('setBlogs', res.data.data)
      } catch (error) {
        console.error('Blog was not created')
      }
    },
    async createBlog({ commit, dispatch }, payload) {

      try {
        let res = await _api.post('', payload)
        dispatch('getBlogs', res.data.data)

      } catch (error) {
        console.error('Blog was not created')
      }
    }
  }
})
