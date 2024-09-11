<template>
  <div class="container-fluid section">
    <div class="intro row" v-if="product">
      <div class="d-flex flex-wrap col-md-12 img1 mainImg">
        <img intro :src="product.prodImg3" class="img-fluid"/>
      </div>
      <div class="d-flex flex-wrap col-md-6 img1">
        <img intro :src="product.prodImg2" class="img-fluid"/>
      </div>

      <div class="description col-md-6 text-center px-5">
        <h1> {{ product.prodName }} </h1>
        <p> {{ product.prodDescription }}</p>
        <button class="bi bi-cart-plus rounded-2 addToCart"></button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log('here');
    
    
    this.$store.dispatch("fetchProduct", this.$route.params.id);
  }, 
};
</script>

<style scoped>
* {
  color: #e9e9e9;
}

h1{
  text-decoration: underline;
}

.addToCart{
  position: fixed;
  width: 4rem;
  aspect-ratio: 1;
  right: 2rem;
  bottom: 4rem;
  background: #818181;
  border: 2px outset #181818;
  color: #e9e9e9;
  transition: background 0.3s, color 0.3s;

  &:hover{
    background: #e9e9e9;
    color: #818181;
  }
}

.mainImg{
  border-bottom: 4px solid #e9e9e9;
}

.img1{
  padding: 0;
}
</style>
