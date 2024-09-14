import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useCookies } from 'vue3-cookies'
import { applyToken } from '@/service/VerifiedUser'
import router from '@/router'

const { cookies } = useCookies()
const apiURL = 'https://capstone-ismaaeel-ahmed.onrender.com/'
// const apiURL = 'http://localhost:3024/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart: null
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
    setCart(state, value) {
      state.cart = value
    }
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

    async fetchUser(context) {
      try {
        const {result, msg} = await (await axios.get(`${apiURL}users/${cookies.get('VerifiedUser')?.result.userID}`)).data
        if (result) {
          context.commit('setUser', result)
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

    async deleteProfileUser(context, user) {
      try {
        console.log(user);
        console.table(user)
        
        const { msg, err } = await (await axios.delete(`${apiURL}users/delete/${user}`)).data
        if (msg) {
          cookies.remove('VerifiedUser');
          /* loggedUser.value = null;
          isAdmin.value = false; */
          router.push({ name: 'login' }).then(() => {
            window.location.reload();
          });
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
    },

    async userLogin(context, payload) {
      try {
        const { msg, result, token } = await (await axios.post(`${apiURL}users/login`, payload)).data
        if (result) {
          toast.success(`Logged in Successfully`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
          context.commit('setUser', {
            msg,
            result
          })
          cookies.set('VerifiedUser', {token, msg, result})
          applyToken(token)
          setTimeout(() => {
            router.push({ name: 'home' }).then(() => {
              window.location.reload();
            });
          }, 3000);
          
        } else {
          toast.error(`${msg}`, {
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

    async getCart(context) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}cart/${cookies.get('VerifiedUser')?.result.userID}`)).data
        if (result) {
          context.commit('setCart', result)
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

    async editCart(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}cart/edit/${cookies.get('VerifiedUser')?.result.userID}/${payload.productID}`, payload)).data
        if (msg) {
          context.dispatch('getCart')
          toast.success(`${msg}`, {
            autoClose: 2000,
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

    async deleteCart(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}cart/delete/${cookies.get('VerifiedUser')?.result.userID}/${id}`)).data
        if (msg) {
          context.dispatch('getCart')
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

    async deleteAllCart(context) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}cart/delete/${cookies.get('VerifiedUser')?.result.userID}`)).data
        if (msg) {
          context.dispatch('getCart')
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

    async addCart(context, payload) {
      try {

        if (cookies.get('VerifiedUser')?.result === undefined) {
            toast.warning(`User not logged in. Log in to add to cart.`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
          console.log("not signed in");        
        } else {         
          const { msg, results } = await (await axios.post(`${apiURL}cart/add`, payload)).data
          if (results) {
            toast.success(`${msg}`, {
              autoClose: 2000,
              position: 'bottom-center'
            })
          } else {
            toast.success(`${msg}`, {
              autoClose: 2000,
              position: 'bottom-center'
            })
          }
        }

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
