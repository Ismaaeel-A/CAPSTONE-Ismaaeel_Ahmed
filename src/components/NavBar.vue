<template>
  <nav class="navbar sticky-top">
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
        <router-link to="/" class="links">Home</router-link>
        <router-link to="/about" class="links">About</router-link>
        <router-link to="/showroom" class="links">Showroom</router-link>
        <router-link to="/cart" class="links" v-if="hide == false">Checkout</router-link>
        <router-link to="/contact" class="links">Contact</router-link>
        <router-link to="/login" class="links" v-if="hide == true">Login</router-link>
        <router-link to="/profile" class="links" v-if="hide == false">Profile</router-link>
        <router-link to="/admin" v-if="isAdmin">Admin</router-link>
        <button class="button" @click="logout" v-if="hide == false">Logout</button>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { useCookies } from 'vue3-cookies';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const { cookies } = useCookies();
const router = useRouter();
const loggedUser = ref(null);
const error = ref(null);
const isAdmin = ref(false);
const hide = ref(true);

onMounted(() => {
  const token = cookies.get('VerifiedUser');
  
  if (token && token.result) {
    loggedUser.value = token.result;
    console.log(loggedUser.value.userRole);

    if (loggedUser.value.userRole === 'user' || loggedUser.value.userRole === 'admin') {
      hide.value = false;
    }

    if (loggedUser.value.userRole === 'admin') {
      isAdmin.value = true;
    }
  } else {
    error.value = 'No token found, redirecting or showing an error message.';
    console.log("no token");
    // router.push({ name: 'login' });
  }
});

function logout() {
  cookies.remove('VerifiedUser');
  loggedUser.value = null;
  isAdmin.value = false;
  router.push({ name: 'login' }).then(() => {
    window.location.reload();
  });
}
</script>

<style scoped>
.navbar{
  border-bottom: 1px solid #e9e9e9;
  background: #181818;
  height: 4rem;
}


.offcanvas-header {
  border-bottom: 1px solid #e9e9e9;
  height: 4rem;
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

.navlinks a {
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

button {
  color: #e9e9e9;
}
</style>
