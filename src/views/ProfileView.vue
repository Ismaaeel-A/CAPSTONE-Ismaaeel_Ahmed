<template>
  <div class="container-fluid section d-flex flex-column justify-content-center">
    <h2 class="text-center">Profile:</h2>
    <div class="container">
    <div class="row profileCard p-2 d-flex mx-auto rounded-2">
      <div class="col-md-4 p-2 rounded-2">
        <img src="https://ismaaeel-a.github.io/allimages/Images/plc.png" alt="">      
      </div>
        
      <div class="col-md-8 rounded-2 d-flex flex-column justify-content-evenly align-items-evenly">
        <h2>User details:</h2>
<!--         <span>First name: <input type="text" v-model=""></span>
        <span>Last name: <input type="text" v-model=""></span>
        <span>Gender: 
          <select v-model="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </span>
        <span>Email: <input type="email" v-model=""></span>
        <span>Password: <input type="password" v-model=""></span> -->
      </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  * {
    color: #e9e9e9;
  }

  .profileCard{
    background: #818181;
    border: 0.5rem outset #181818; 
  }

  img{
    max-width: 100%;
  }

  input, select{
    background: #818181;
    border: none;
  }
</style>