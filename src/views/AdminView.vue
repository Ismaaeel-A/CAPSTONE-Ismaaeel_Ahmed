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
                <a
                  class="btn"
                  data-bs-toggle="collapse"
                  :href="`#${product.productID}des`"
                  role="button"
                  aria-expanded="false"
                  :aria-controls="`${product.productID}des`"
                  >Show</a
                >
              </p>
              <div class="collapse" :id="`${product.productID}des`">
                <div class="card card-body floatingDisplay extraPadding">
                  <a
                    class="btn my-2 closeOverlay"
                    data-bs-toggle="collapse"
                    :href="`#${product.productID}des`"
                    role="button"
                    aria-expanded="false"
                    :aria-controls="`${product.productID}des`"
                    >Close</a
                  >
                  <p>{{ product.prodDescription }}</p>
                </div>
              </div>
            </td>
            <td name="img1">
              <p class="d-inline-flex gap-1">
                <a
                  class="btn"
                  data-bs-toggle="collapse"
                  :href="`#${product.productID}1`"
                  role="button"
                  aria-expanded="false"
                  :aria-controls="`${product.productID}1`"
                  >Show</a
                >
              </p>
              <div class="collapse" :id="`${product.productID}1`">
                <div class="card card-body floatingDisplay">
                  <a
                    class="btn my-2 closeOverlay"
                    data-bs-toggle="collapse"
                    :href="`#${product.productID}1`"
                    role="button"
                    aria-expanded="false"
                    :aria-controls="`${product.productID}1`"
                    >Close</a
                  >
                  <img :src="product.prodImg1" :alt="product.prodName" />
                  <p>{{ product.prodImg1 }}</p>
                </div>
              </div>
            </td>
            <td name="img2">
              <p class="d-inline-flex gap-1">
                <a
                  class="btn"
                  data-bs-toggle="collapse"
                  :href="`#${product.productID}2`"
                  role="button"
                  aria-expanded="false"
                  :aria-controls="`${product.productID}2`"
                  >Show</a
                >
              </p>
              <div class="collapse" :id="`${product.productID}2`">
                <div class="card card-body floatingDisplay">
                  <a
                    class="btn my-2 closeOverlay"
                    data-bs-toggle="collapse"
                    :href="`#${product.productID}2`"
                    role="button"
                    aria-expanded="false"
                    :aria-controls="product.productID"
                    >Close</a
                  >
                  <img :src="product.prodImg2" :alt="product.prodName" />
                  <p>{{ product.prodImg2 }}</p>
                </div>
              </div>
            </td>
            <td name="img3">
              <p class="d-inline-flex gap-1">
                <a
                  class="btn"
                  data-bs-toggle="collapse"
                  :href="`#${product.productID}3`"
                  role="button"
                  aria-expanded="false"
                  :aria-controls="`${product.productID}3`"
                  >Show</a
                >
              </p>
              <div class="collapse" :id="`${product.productID}3`">
                <div class="card card-body floatingDisplay">
                  <a
                    class="btn my-2 closeOverlay"
                    data-bs-toggle="collapse"
                    :href="`#${product.productID}3`"
                    role="button"
                    aria-expanded="false"
                    :aria-controls="product.productID"
                    >Close</a
                  >
                  <img :src="product.prodImg3" :alt="product.prodName" />
                  <p>{{ product.prodImg3 }}</p>
                </div>
              </div>
            </td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button type="button" id="user.userID">Edit</button>
              <!-- <button type="button" id="`${user.userID}`">Delete</button> -->
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
              <button type="button" :id="`${user.userID}`">Edit</button>
              <!-- <button type="button" id="`${user.userID}`">Delete</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
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
  position: fixed; /* Keeps the overlay in a fixed position */
  top: 4rem;
  left: 0%;
  width: 100%;
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent background */
  z-index: 1000; /* Ensures overlay is above other content */
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

.closeOverlay{
    background: #e9e9e9;
    transition: background 0.3s;

    &:hover {
    background: #818181;
  }
}

.extraPadding{
    padding-inline: 2rem;
}
</style>
