<template>
  <div class="container-fluid section">
    <div class="intro row" v-if="product">
      <div class="d-flex flex-wrap col-md-6 img1">
        <img intro :src="product.prodImg1" class="img-fluid"/>
        <!-- <div class="cover d-none d-lg-none d-xl-block"></div> -->
      </div>

      <div class="description col-md-6 text-center px-5">
        <h1> {{ product.prodName }} </h1>
        <img :src="product.prodImg1" :alt="product.prodName" class="img-fluid">
        
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

/* .cover {
  position: absolute;
  width: 16rem;
  height: 26rem;
  background: linear-gradient(#e9e9e9, #818181);
  box-shadow: 1rem 0 2rem #000000;
  transform: skew(-19deg);
  z-index: 2;
  right: 50%;
} */
.col-md-6{
  background: #818181;
}
.description{
  box-shadow: inset 1rem -1rem 3rem #181818;
}
</style>
