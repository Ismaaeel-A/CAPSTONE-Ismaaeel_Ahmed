<template>
  <div class="container-fluid section">
    <div class="row brandopt">
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

      <div class="row justify-content-center filterSortSearch">
        <div class="row justify-content-center">
          <input type="search" class="mt-2" v-model="searchTerm" />

          <select v-model="selectedBrand" class="mt-2 filter">
            <option value="">All</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Pagani">Pagani</option>
            <option value="Lamborghini">Lamborghini</option>
          </select>

          <button @click="toggleSortOrder" class="mt-2 sort">
            <i :class="iconClass"></i>
            <!-- {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }} -->
          </button>
        </div>
      </div>

      <div class="row justify-content-center" v-if="products">
        <DisplayCard v-for="(product, productID) in sortedAndFilteredProducts" :key="productID">
          <template #cardHeader>
            <router-link :to="`/single/${product.productID}`" class="d-flex justify-content-between toSingle">
            <img :src="product.prodImg1" :alt="product.prodName">
            </router-link>
          </template>

          <template #cardBody>           
            <router-link :to="`/single/${product.productID}`" class="d-flex justify-content-between toSingle">
            <h6>{{ product.prodName }}</h6>
            <h6>R{{ product.price }}</h6>
          </router-link>
          </template>
        </DisplayCard>
      </div>

      <SpinnerLoader v-else/>

    </main>
  </div>
</template>

<script>
import DisplayCard from '@/components/DisplayCard.vue';
import SpinnerLoader from '@/components/SpinnerLoader.vue';

export default {
  data() {
    return{
      searchTerm: '',
      selectedBrand: '',
      sortOrder: 'asc'
    }
  },
  components: {
    DisplayCard,
    SpinnerLoader
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
    return this.products.filter(product => 
      product.prodName.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedBrand === '' || product.prodBrand === this.selectedBrand)
      );
    },
    sortedAndFilteredProducts() {
      return this.filteredProducts.slice().sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
    iconClass() {
      return this.sortOrder === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
    }
  },
  methods: {
    toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
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
  text-decoration-color: #818181;
}

input {
  width: 26rem;
  max-width: 40%;
  height: 1.8rem;
  border-radius: 2rem 0 0 2rem;
  border: 2px inset #818181;
  justify-content: center;
  background-color: #181818;
  padding-inline: 1rem;

  &:focus {
    outline: none;
  }
}

.sort{
  background: #181818;
  border-radius: 0 2rem 2rem 0;
  border: 2px inset #818181;
  border-left: none;
  width: 2rem;  
  height: 1.8rem;
  padding-inline: 0;
}

.filter {
    background: #181818;
    width: 6rem;
    max-width: 90%;
    height: 1.8rem;
    border: 2px inset #818181;
    border-left: none;

    &:focus {
    outline: none;
  }
}

img{
    width: 100%;
    user-select: none;
    filter: drop-shadow(0 0 1rem #000000);
  }

  .toSingle{
    width: 100%;
    text-decoration: none;
  }

  
</style>
