import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const apiURL = 'https://capstone-ismaaeel-ahmed.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },

  getters: {
  },

  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
  },

  actions: {
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 3000
          })
        }

      } catch (e) {
        toast.error(`${e.msg}`, {
          autoClose: 3000
        })
      }
    },

    async fetchProducts(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}products`)).data
        if (results) {
          context.commit('setProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 3000
          })
        }

      } catch (e) {
        toast.error(`${e.msg}`, {
          autoClose: 3000
        })
      }
    },

  },
  modules: {
  }
})
