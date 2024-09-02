<template>
  <nav class="navbar">
    <div class="container-fluid">
      <button class="btn navopt bi bi-three-dots" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></button>
      <h4>Elite Galería</h4>
    </div>
  </nav>

  <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
      <h4 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Elite Galería
      </h4>
      <button type="button" class="btn-close d-flex align-items-center" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x-octagon-fill"></i></button>
    </div>

    <div class="offcanvas-body">
      <nav class="navlinks d-flex flex-column">
        <router-link to="../views/" class="links">Home</router-link>
        <router-link to="../views/" class="links">About</router-link>
        <router-link to="../views/" class="links">Showroom</router-link>
        <router-link to="../views/" class="links">Checkout</router-link>
        <router-link to="../views/" class="links">Contact</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.navbar{
  border-bottom: 1px solid #e9e9e9;
  background: #181818;
}


.offcanvas-header {
  border-bottom: 1px solid #e9e9e9;
}

h4 {
  color: #e9e9e9;
}

.navopt , .btn-close{
  background: #181818;
  color: #818181;
  border: 2px solid #818181;
  transition:  color 0.6s, border 0.6s;

  &:hover {
    
    color: #e9e9e9;
    border: 2px solid #e9e9e9;
  }
}

.offcanvas * {
  background: #181818;
}

.navlinks * {
  color: #818181;
  font-size: 1.3rem;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
  margin-block: 0.3rem;

  &:hover {
    transform: translateX(1rem);
    color: #e9e9e9;
  }
}

.links:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.links:hover:after {
  width: 7rem;
  left: 0;
}
</style>
