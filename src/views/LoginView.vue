<template>
  <div
    class="container-fluid section d-flex justify-content-center align-items-center">
    <form
      action="POST"
      class="d-flex flex-column justify-content-center align-items-center">
      <h2>Sign Up</h2>
    <input type="text" placeholder="FIRSTNAME..." />
    <input type="text" placeholder="LASTNAME..." />
    <input type="text" placeholder="EMAIL" />
    <input type="text" placeholder="PASSWORD" />

    <select name="" id="">
        <option value="male">MALE</option>
        <option value="female">FEMALE</option>
    </select>

    <input type="submit"/>
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
  /* border-radius: 100%; */
  /* border: 0.2rem inset #e9e9e9; */
}

h2{
    color: #e9e9e9; 
    text-decoration: underline;
    text-decoration-color: #818181;
}

input,
select {
  /* max-width: 15rem; */
  width: 60%;
  height: 1.8rem;
  border-radius: 0.2rem;
  border: 0.1rem inset #e9e9e9;
  justify-content: center;
  background-color: #818181;
  color: #e9e9e9;
  padding-inline: 1rem;
  margin-top: 1.5rem;

  &:focus {
    outline: none;
  }
}

::placeholder {
  color: #181818;
  opacity: 0.8; /* Firefox */
}
</style>
