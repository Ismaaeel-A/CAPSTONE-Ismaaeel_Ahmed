<template>
    <section class="container-fluid section">
      <div class="container">
        <h2 class="text-center pt-5 mb-5">Almost there...</h2>
          <div class="row table-responsive">
            <table class="table table-sm table-hover text-center">
              <thead>
            <tr>
              <td>Name</td>
              <td>Brand</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Remove</td>
            </tr>
              </thead>
              <tbody>
                <tr v-if="!cart?.length">
                  <td colspan="6">
                    -- Cart Empty --
                  </td>
                </tr>
                <tr v-for="(order, orderID) in cart" :key="orderID">
                  <td>{{ order.prodName }}</td>
                  <td>{{ order.prodBrand }}</td>
                  <td>{{ order.price }}</td>
                  <td>
                    <input type="number" @change="editCart(order.productID, $event)" :value="order.quantity">
                  </td>
                  <td>{{ order.price * order.quantity }}</td>
                  <td>
                    <button type="button" class="functionbtn bi bi-trash rounded-1" @click="deleteCart(order.productID)"></button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <td colspan="3"></td>
                <td>
                  <button @click="deleteAllCart" class="functionbtn bi bi-trash rounded-1"> Remove all</button>
                </td>
                <td>Total: R {{ grandTotal }}</td>
                <td>
                  <button @click="successPurchase" class="functionbtn bi bi-cart-check-fill"> Confirm</button>
                </td>
              </tfoot>
            </table>
          </div>


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
    return store.state.cart || []; 
  },
  grandTotal() {
    return (this.cart || []).reduce((total, order) => total + (order.price * order.quantity), 0);
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
    },

    successPurchase(){
      try {
        if (!store.state.cart.length){
          toast.warning(`Cart is empty. Please add products to cart first.`, {
          autoClose: 3000,
          position: 'bottom-center'
        })
        } else {
          this.$store.dispatch('deleteAllCart');
          toast.success(`Purchase Successful`, {
          autoClose: 3000,
          position: 'bottom-center'
        })
        }

      } catch (e) {
        this.$toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        });
      }
 
    }
}
,

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

input{
  color: #181818;
}

h2 {
  text-decoration: underline;
  text-decoration-color: #818181;
}


thead , tbody , tfoot{
  background-color: #818181;
  border-top: 2px solid #181818;
}
  </style>