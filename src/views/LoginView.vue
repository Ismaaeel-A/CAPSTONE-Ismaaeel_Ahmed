<template>
  <div
    class="container-fluid section d-flex justify-content-center align-items-center pb-5">
    <form class="d-flex flex-column justify-content-center align-items-center rounded-1">
      <h2>Login</h2>
    <input type="text" placeholder="EMAIL" />
    <input type="text" placeholder="PASSWORD" />
    <input type="submit"/>
    <router-link to="/signup">Don't have an account? Sign up now</router-link>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  width: 25rem;
  aspect-ratio: 1;
  padding: 1.2rem;
  background: linear-gradient(-130deg,#e9e9e937 10%,#e9e9e900 55%, rgba(0,0,0,0));
}

h2{
    color: #e9e9e9; 
    text-decoration: underline;
    text-decoration-color: #818181;
}

input,
select,
button {
  width: 60%;
  height: 1.8rem;
  border-radius: 0.2rem;
  border: 2px outset #212121;
  justify-content: center;
  background-color: #818181;
  color: #e9e9e9;
  padding-inline: 1rem;
  margin-top: 1.5rem;
  transition: background 0.3s;
  &:focus {
    outline: none;
  }
}

button:hover{
    background: #181818;
}

::placeholder {
  color: #181818;
  opacity: 0.8; 
}

.section{
  background-image: url(https://ismaaeel-a.github.io/CapstoneImages/images/login.png);
    min-height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

a {
  color: #e9e9e9;
  transition: color 0.3s;
  &:hover {
      color: #818181;
    }
}
</style>
