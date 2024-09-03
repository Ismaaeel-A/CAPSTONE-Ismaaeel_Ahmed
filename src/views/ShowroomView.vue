<template>
  <div class="container-fluid section">
    <div class="row">
      <div class="col-md-4">
        <img src="https://ismaaeel-a.github.io/allimages/Images/cars1.jpg" alt="Lamborghini" />
        <h4 class="centered">Lamborghini</h4>
      </div>
      <div class="col-md-4">
        <img src="https://ismaaeel-a.github.io/allimages/Images/cars2.jpg" alt="Ferrari" />
        <h4 class="centered">Ferrari</h4>
      </div>
      <div class="col-md-4">
        <img src="https://ismaaeel-a.github.io/allimages/Images/cars1.jpg" alt="Pagani" />
        <h4 class="centered">Pagani</h4>
      </div>
    </div>

    <main class="container">
      <h2 class="text-center mt-4">The Showroom</h2>

      <div class="row justify-content-center">
        <input type="search" class="mt-2" />
      </div>

      <div class="row justify-content-center" v-if="products">
        <DisplayCard v-for="(products, productID) in products" :key="productID">
          <template #cardHeader>
            <img :src="products.prodImg1" alt="">
          </template>

          <template #cardBody>
            <h6>{{ products.prodName }}</h6>
          </template>
        </DisplayCard>
      </div>

    </main>
  </div>
</template>

<script>
import DisplayCard from '@/components/DisplayCard.vue';

export default {
  components: {
    DisplayCard,
  },
   computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  }, 
};
</script>

<style scoped>
* {
  color: #e9e9e9;
}

.col-md-4 {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-block: 2rem;
  border-bottom: 4px solid #e9e9e9;

  position: relative;
  text-align: center;
  color: #e9e9e9;

  & img {
    border-radius: 0.8rem;
    max-width: 100%;
    transition: transform 0.3s;

    &:hover {
      transform: scale(0.98);
    }
  }
}

 h4:hover:after {
      width: 100%;
      left: 0;
    }

    & h4:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #e9e9e9;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h2 {
  text-decoration: underline;
}

input {
  width: 30rem;
  max-width: 90%;
  height: 1.8rem;
  border-radius: 2rem;
  justify-content: center;
  background-color: #181818;
  padding-inline: 1rem;

  &:focus {
    outline: none;
  }
}

img{
    width: 100%;
    user-select: none;
    filter: drop-shadow(0 0 1rem #000000);
  }
</style>
