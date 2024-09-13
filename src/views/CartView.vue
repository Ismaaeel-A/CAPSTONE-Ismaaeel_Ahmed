<template>
    <section class="container-fluid section">
      <div class="container">
        <h2 class="text-center text-decoration-underline pt-2">Almost there...</h2>
          <div class="row table-responsive">
            <table class="table table-sm table-hover text-center">
              <thead>
            <tr>
              <td>Name</td>
              <td>Brand</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
              </thead>
              <tbody>
                <tr v-for="(order, orderID) in cart" :key="orderID">
                  <td>{{ order.prodName }}</td>
                  <td>{{ order.prodBrand }}</td>
                  <td>{{ order.price }}</td>
                  <td>
                    <input type="number" @change="editCart(order.productID, $event)" :value="order.quantity">
                  </td>
                  <td>
                    <button type="button" class="functionbtn bi bi-trash rounded-1" @click="deleteCart(order.productID)"></button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <td colspan="3"></td>
                <td>
                  <button @click="deleteAllCart" class="functionbtn bi bi-trash rounded-1">All</button>
                </td>
                <td>rob</td>
              </tfoot>
            </table>
          </div>

        <div v-if="!cart?.length"><p>Cart Empty</p></div>
      </div>
    </section>
  </template>

<script>
import store from '@/store'
import { toast } from 'vue3-toastify';
console.log(toast);

// import { useCookies } from 'vue3-cookies';
// const {cookies} = useCookies()
export default{
  computed: {
    cart() {
      return store.state.cart
    }
  },
  methods: { 
  async editCart(productID, event) {
    const quantity = event.target.value;
    console.log(quantity, productID);
    
    try {
      const quantity = event.target.value;
      await this.$store.dispatch('editCart', { productID, quantity });

      store.dispatch('editCart', { productID, quantity })
      /* await this.getCart(); */
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: 'bottom-center'
      });
    }
  },

    async deleteCart(productID) {    
      try {
        this.$store.dispatch('deleteCart', productID);
      } catch (e) {
        this.$toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        });
      }
    },

    async deleteAllCart() {
      try {
        this.$store.dispatch('deleteAllCart');
      } catch (e) {
        this.$toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        });
      }
    }


},
  mounted() {
    return  store.dispatch('getCart')
  }
}
</script>



  <style scoped>
    * {
        color: #e9e9e9;
    }

    .functionbtn{
      background: #818181;
      transition: background 0.4s, color 0.3s;
      margin: 0.2rem;

      &:hover{
      background: #e9e9e9;
      color: #818181;
    }
}
  </style>