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
            autoClose: 3000,
            position: 'bottom-center'
          })
        }

      } catch (e) {
        toast.error(`${e.msg}`, {
          autoClose: 3000,
            position: 'bottom-center'
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
            autoClose: 3000,
            position: 'bottom-center'
          })
        }

      } catch (e) {
        toast.error(`${e.msg}`, {
          autoClose: 3000,
            position: 'bottom-center'
        })
      }
    },

    async fetchProduct(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}products/${id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 3000,
            position: 'bottom-center'
          })
        }

      } catch (e) {
        toast.error(`${e.msg}`, {
          autoClose: 3000,
            position: 'bottom-center'
        })
      }
    },

    async addProduct(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}products/addProduct`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    async addUser(context, payload) {
      try {
        const { token, msg, error } = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        } else {
          toast.warning(`${error}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    async deleteUser(context, userID) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}users/delete/${userID}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    async deleteProduct(context, productID) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}products/delete/${productID}`)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    async editUser(context, user) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}users/update/${user.userID}`, user)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    async editProduct(context, product) {
      try {
        await (axios.patch(`${apiURL}products/update/${product.productID}`, product)).data
        
          context.dispatch('fetchProducts')
          toast.success(`Successfully updated product`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    }

  },
  modules: {
  }
})
