<template>
  <footer
    class="d-flex flex-wrap justify-content-between align-items-center py-3"
  >
    <div class="col-md-4 d-flex align-items-center mx-3">
      <span class="mb-3 mb-md-0"> &copy; {{ cYear }} - Elite Galería</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled me-3 d-flex">
      <li class="ms-3">
        <a href="#"><i class="bi bi-facebook"></i></a>
      </li>
      <li class="ms-3">
        <a href="#"><i class="bi bi-twitter-x"></i></a>
      </li>
      <li class="ms-3">
        <a href="#"><i class="bi bi-instagram"></i></a>
      </li>
      <li class="ms-3">
        <a href="#"><i class="bi bi-tiktok"></i></a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default{
  data() {
            return {
                cYear: new Date().getUTCFullYear()
            }
        }
}
</script>


<style scoped>
footer {
  background: rgb(24, 24, 24);
  & * {    
    color: #e9e9e9;

  }
}

a , span, i{
  color: #e9e9e9;
  transition: color 0.3s;
  &:hover {
      color: #818181;
    }
}
</style>
