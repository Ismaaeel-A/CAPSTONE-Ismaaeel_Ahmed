<template>
  <div class="container-fluid main">
    <div class="row flex-lg-row-reverse align-items-center py-5">
      <div class="col-10 col-sm-8 col-lg-6 mx-md-auto">
        <img src="https://ismaaeel-a.github.io/allimages/Images/cars2.jpg" class="d-block d-none d-md-none d-lg-block mx-md-auto mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          Discover Your Hypercar Today
        </h1>
        <p class="lead">
          Explore our exclusive online showroom and indulge in the thrill of
          discovering your perfect Italian hypercar. With Elite Galería, your
          journey to automotive perfection starts here. Embrace the ultimate in
          performance, luxury, and style – because you deserve nothing less than
          extraordinary. Elite Galería – Elevate Your Drive.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-lg px-4 me-md-2">
            <router-link to="/login" class="links">LOGIN/SIGN UP</router-link>
          </button>
          <button type="button" class="btn btn-lg px-4">
            <router-link to="/showroom" class="links">TO SHOWROOM</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  /*   computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  }, */
};
</script>

<style scoped>
* {
  color: #e9e9e9;
}

.navopt{
  display: none;
}

button{
  background: #e9e9e9;
  transition: background 0.3s;
  & *{
    color: #818181;
  }
  &:hover{
    background: #181818;   
  }
}

.links{
  text-decoration: none;
}
</style>
