<template>
  <footer
    class="d-flex flex-wrap justify-content-between align-items-center py-3"
  >
    <div class="col-md-4 d-flex align-items-center mx-3">
      <span class="mb-3 mb-md-0">© 2024 Company, Inc</span>
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

<style>
footer {
  background: rgb(24, 24, 24);
  & * {
    color: #818181;
    transition: color 0.6s;

    &:hover {
      color: #e9e9e9;
    }
  }
}
</style>
