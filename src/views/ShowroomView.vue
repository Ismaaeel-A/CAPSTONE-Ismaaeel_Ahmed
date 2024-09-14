<template>
  <div class="container-fluid section">
    <div class="container brandopt py-3">
<!--       <div class="col-md-4">
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
      </div> -->

      <!--  -->

      <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://ismaaeel-a.github.io/allimages/Images/cars2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://ismaaeel-a.github.io/allimages/Images/cars1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://ismaaeel-a.github.io/allimages/Images/cars2.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!--  -->
 <!--      <span>
        <a href="#The Showroom" class="scroll-indicator bi-arrow-down"></a>
      </span> -->
    </div>

    <main class="container sbm">
      <h2 class="text-center mt-4" id="The Showroom">The Showroom</h2>

      <div class="row justify-content-center filterSortSearch">
        <div class="row justify-content-center">
          <input type="search" class="mt-2" v-model="searchTerm" placeholder="Search..."/>

          <select v-model="selectedBrand" class="mt-2 filter">
            <option value="">All</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Pagani">Pagani</option>
            <option value="Lamborghini">Lamborghini</option>
          </select>

          <button @click="toggleSortOrder('name')" class="mt-2 sorta">
            <i :class="nameSortIconClass"></i>A 
          </button>
          <button @click="toggleSortOrder('price')" class="mt-2 sort1">
            <i :class="priceSortIconClass"></i>1
          </button>
    
        </div>
      </div>

      <div class="row justify-content-center" v-if="products">
        <div v-if="!sortedAndFilteredProducts.length" class="row justify-content-center">
          <h3 class="text-center mt-5">Could not find item</h3>
        </div>
        
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
      sortOrder: 'asc',
      nameSortOrder: 'asc'
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
      let sortedProducts = this.filteredProducts.slice();
      
      if (this.currentSort === 'price') {
        sortedProducts.sort((a, b) => {
          return this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });
      } else if (this.currentSort === 'name') {
        sortedProducts.sort((a, b) => {
          return this.nameSortOrder === 'asc' ? a.prodName.localeCompare(b.prodName) : b.prodName.localeCompare(a.prodName);
        });
      }

      return sortedProducts;
    },
    priceSortIconClass() {
      return this.sortOrder === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
    },
    nameSortIconClass() {
      return this.nameSortOrder === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
    }
  },
  methods: {
    toggleSortOrder(type) {
      if (type === 'price') {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        this.currentSort = 'price';
      } else if (type === 'name') {
        this.nameSortOrder = this.nameSortOrder === 'asc' ? 'desc' : 'asc';
        this.currentSort = 'name';
      }
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.currentSort = 'price';
  }, 
};
</script>

<style scoped>
* {
  color: #e9e9e9;
}

.sbm{
  min-height: fit-content;
  scroll-margin-block: 500px;
  scroll-snap-align: center;
}
.section{
  scroll-snap-type: x mandatory;
}
.brandopt{
  border-bottom: 5px solid #e9e9e9;
  position: relative;
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

/*  h4:hover:after {
      width: 10rem;
      left: 0;
    }

    & h4:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 1rem;
      left: 50%;
      position: absolute;
      background: #e9e9e9;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    } */

.centered {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  font-size: 6rem;
  max-width: 100%;
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

.sort1{
  background: #181818;
  border-radius: 0 2rem 2rem 0;
  border: 2px inset #818181;
  border-left: none;
  width: 2rem;  
  height: 1.8rem;
  padding-inline: 0;
}

.sorta{
  background: #181818;
  border: 2px inset #818181;
  border-left: none;
  width: 2rem;  
  height: 1.8rem;
  padding-inline: 0;
}

.filter {
    background: #181818;
    width: 6rem;
    max-width: 20%;
    height: 1.8rem;
    border: 2px inset #818181;
    border-left: none;
  padding-inline: 0.1rem;
    &:focus {
    outline: none;
  }
}

img{
    width: 100%;
    user-select: none;
    filter: drop-shadow(0 0 1rem #000000);
    transition: transform 0.3s;
      &:hover{
        transform: scale(1.1);
      }
      &:active{
        transform: scale(0.9);
      }
  }

  .toSingle{
    width: 100%;
    text-decoration: none;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 20%;
    left: 50%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    text-decoration: none;
    font-size: 16px;
    z-index: 3;

    border: 6px double #e9e9e9;
    width: 2rem;
    aspect-ratio: 1;
    border-radius: 100%;
    padding: 0;
}

.scroll-indicator:hover {
    background-color: rgba(0, 0, 0, 1);
}
</style>
