<template>
  <div class="container-fluid section">
    <h2>admin</h2>

    <div class="row table-responsive">
      <h2>Products</h2>

      <table class="table table-sm table-hover text-center">
        <thead>
          <tr>
            <td>ID</td>
            <td>Brand</td>
            <td>Name</td>
            <td>Description</td>
            <td>Image 1</td>
            <td>Image 2</td>
            <td>Image 3</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Functions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, productID) in products" :key="productID">
            <td>{{ product.productID }}</td>
            <td>{{ product.prodBrand }}</td>
            <td>{{ product.prodName }}</td>
            <td name="description">
              <p class="d-inline-flex gap-1">
                <a class="btn" data-bs-toggle="collapse" :href="`#${product.productID}des`" role="button"
                  aria-expanded="false" :aria-controls="`${product.productID}des`">Show</a>
              </p>
              <div class="collapse" :id="`${product.productID}des`">
                <div class="card card-body floatingDisplay extraPadding">
                  <a class="btn my-2 closeOverlay" data-bs-toggle="collapse" :href="`#${product.productID}des`"
                    role="button" aria-expanded="false" :aria-controls="`${product.productID}des`">Close</a>
                  <p>{{ product.prodDescription }}</p>
                </div>
              </div>
            </td>
            <td name="img1">
              <p class="d-inline-flex gap-1">
                <a class="btn" data-bs-toggle="collapse" :href="`#${product.productID}1`" role="button"
                  aria-expanded="false" :aria-controls="`${product.productID}1`">Show</a>
              </p>
              <div class="collapse" :id="`${product.productID}1`">
                <div class="card card-body floatingDisplay">
                  <a class="btn my-2 closeOverlay" data-bs-toggle="collapse" :href="`#${product.productID}1`"
                    role="button" aria-expanded="false" :aria-controls="`${product.productID}1`">Close</a>
                  <img :src="product.prodImg1" :alt="product.prodName" />
                  <p>{{ product.prodImg1 }}</p>
                </div>
              </div>
            </td>
            <td name="img2">
              <p class="d-inline-flex gap-1">
                <a class="btn" data-bs-toggle="collapse" :href="`#${product.productID}2`" role="button"
                  aria-expanded="false" :aria-controls="`${product.productID}2`">Show</a>
              </p>
              <div class="collapse" :id="`${product.productID}2`">
                <div class="card card-body floatingDisplay">
                  <a class="btn my-2 closeOverlay" data-bs-toggle="collapse" :href="`#${product.productID}2`"
                    role="button" aria-expanded="false" :aria-controls="product.productID">Close</a>
                  <img :src="product.prodImg2" :alt="product.prodName" />
                  <p>{{ product.prodImg2 }}</p>
                </div>
              </div>
            </td>
            <td name="img3">
              <p class="d-inline-flex gap-1">
                <a class="btn" data-bs-toggle="collapse" :href="`#${product.productID}3`" role="button"
                  aria-expanded="false" :aria-controls="`${product.productID}3`">Show</a>
              </p>
              <div class="collapse" :id="`${product.productID}3`">
                <div class="card card-body floatingDisplay">
                  <a class="btn my-2 closeOverlay" data-bs-toggle="collapse" :href="`#${product.productID}3`"
                    role="button" aria-expanded="false" :aria-controls="product.productID">Close</a>
                  <img :src="product.prodImg3" :alt="product.prodName" />
                  <p>{{ product.prodImg3 }}</p>
                </div>
              </div>
            </td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button type="button" @click="deleteProduct(product.productID)">Delete</button>
              <!-- <button type="button" id="`${user.userID}`">Delete</button> -->

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#editP${product.productID}`">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" :id="`editP${product.productID}`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="`editP${product.productID}`" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" :id="`editP${product.productID}`">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <form>
              <input type="text" v-model="product.prodName" placeholder="Name..." required>
              <select name="" id="" v-model="product.prodBrand" required>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Pagani">Pagani</option>
              </select>
              <input type="text" v-model="product.prodDescription" placeholder="Description" required>
              <input type="text" v-model="product.prodImg1" placeholder="Image 1..." required>
              <input type="text" v-model="product.prodImg2" placeholder="Image 2..." required>
              <input type="text" v-model="product.prodImg3" placeholder="Image 3..." required>
              <input type="text" v-model="product.price" placeholder="Price..." required>
              <input type="text" v-model="product.quantity" placeholder="Quantity..." required>
            </form>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning" @click="editProduct(product)">Edit</button>
      </div>
    </div>
  </div>
</div>









































            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row table-responsive">
      <h2>Users</h2>

      <table class="table table-sm table-hover text-center">
        <thead>
          <tr>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Password</td>
            <td>Role</td>
            <td>Functions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, userID) in users" :key="userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userPass }}</td>
            <td>{{ user.userRole }}</td>
            <td>
              <button type="button" class="btn btn-primary" @click="deleteUser(user.userID)">Delete</button>
              <!-- <button type="button" class="btn btn-warning" @click="editUser(user.userID)" >Edit</button> -->

                  <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#edit${user.userID}`">
      Users edit
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="`edit${user.userID}`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      :aria-labelledby="`edit${user.userID}`" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" :id="`edit${user.userID}`">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <input type="text" v-model="user.firstName" placeholder="First name..." required>
              <input type="text" v-model="user.lastName" placeholder="Last name..." required>
              <select v-model="user.gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select v-model="user.userRole" required>
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
              <input type="email" v-model="user.emailAdd" placeholder="Email" required>
              <input type="password" v-model="user.userPass" placeholder="Password" required>              
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-primary" @click="createUser">Create</button> -->
            <button type="button" class="btn btn-warning" @click="editUser(user)">Edit</button>
          </div>          
        </div>
      </div>
    </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


























    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#products">
      Product
    </button>

    <!-- Modal -->
    <div class="modal fade" id="products" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="productsLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="productsLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <input type="text" v-model="newProduct.prodName" placeholder="Name..." required>
              <select name="" id="" v-model="newProduct.prodBrand" required>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Pagani">Pagani</option>
              </select>
              <input type="text" v-model="newProduct.prodDescription" placeholder="Description" required>
              <input type="text" v-model="newProduct.prodImg1" placeholder="Image 1..." required>
              <input type="text" v-model="newProduct.prodImg2" placeholder="Image 2..." required>
              <input type="text" v-model="newProduct.prodImg3" placeholder="Image 3..." required>
              <input type="text" v-model="newProduct.price" placeholder="Price..." required>
              <input type="text" v-model="newProduct.quantity" placeholder="Quantity..." required>
              <button type="button" @click="createProduct">Create</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="createProduct">Create</button>
          </div>
        </div>
      </div>
    </div>





    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#users">
      Users
    </button>

    <!-- Modal -->
    <div class="modal fade" id="users" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="usersLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="usersLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <input type="text" v-model="newUser.firstName" placeholder="First name..." required>
              <input type="text" v-model="newUser.lastName" placeholder="Last name..." required>
              <select v-model="newUser.gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select v-model="newUser.userRole" required>
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
              <input type="email" v-model="newUser.emailAdd" placeholder="Email" required>
              <input type="password" v-model="newUser.userPass" placeholder="Password" required>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="createUser">Create</button>
          </div>
        </div>
      </div>
    </div>






























  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { toast } from 'vue3-toastify';

export default {
  data() {
    return {
      newProduct: {
        prodName: "",
        prodBrand: "",
        prodDescription: "",
        prodImg1: "",
        prodImg2: "",
        prodImg3: "",
        price: "",
        quantity: ""
      },
      newUser: {
        firstName: "",
        lastName: "",
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: ""
      }
    }




  },
  components: {},
  computed: {
    ...mapState(['users', 'products'])
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchProducts', 'addUser','addProduct', 'editUser', 'editProduct', 'deleteUser', 'deleteProduct']),

    async createProduct() {
      try {
        await this.addProduct(this.newProduct);
        this.newProduct = {
          prodName: "",
          prodBrand: "",
          prodDescription: "",
          prodImg1: "",
          prodImg2: "",
          prodImg3: "",
          price: "",
          quantity: ""
        };
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    async createUser() {
      try {
        await this.addUser(this.newUser);

        this.newUser = {
          firstName: "",
          lastName: "",
          gender: "",
          userRole: "",
          emailAdd: "",
          userPass: ""
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    async deleteUser(userID) {
      try {
        this.$store.dispatch('deleteUser', userID).then(() => {
          this.fetchUsers()
        })
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },


    async deleteProduct(productID) {
      try {
        this.$store.dispatch('deleteProduct', productID).then(() => {
          this.fetchProducts()
        })
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    editUser(user) {
      try {
        console.log(user);
        this.$store.dispatch('editUser', user).then(() => {
          this.fetchUsers()   
        })
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    editProduct(product) {
      try {
        console.log(product);
        this.$store.dispatch('editProduct', product).then(() => {
          this.fetchProducts()
        })
      } catch (e) {
                toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    }







  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
* {
  color: #e9e9e9;
}

.floatingDisplay {
  position: fixed;
  /* Keeps the overlay in a fixed position */
  top: 4rem;
  left: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* Centers content horizontally */
  align-items: center;
  /* Centers content vertically */
  background-color: rgba(0, 0, 0, 0.9);
  /* Semi-transparent background */
  z-index: 1000;
  /* Ensures overlay is above other content */
  overflow-y: auto;

  & img {
    width: 38rem;
    max-width: 100%;
    /* z-index: 55; */
  }
}

a {
  background: #818181;
  transition: background 0.3s, color 0.3s;

  /*   &:focus {
    border: 2px solid #e9e9e9;
  } */

  &:hover {
    background: #181818;
    color: #e9e9e9;
  }
}

.closeOverlay {
  background: #e9e9e9;
  transition: background 0.3s;

  &:hover {
    background: #818181;
  }
}

.extraPadding {
  padding-inline: 2rem;
}

input,
select {
  width: 30rem;
  max-width: 90%;
  height: 1.8rem;
  margin-block: 0.5rem;
  justify-content: center;
  background-color: #181818;
  padding-inline: 1rem;

  &:focus {
    outline: none;
  }
}
</style>
