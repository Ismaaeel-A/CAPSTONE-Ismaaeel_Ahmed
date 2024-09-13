<template>
  <div class="container-fluid section d-flex flex-column justify-content-center">
    <h2 class="text-center">Profile:</h2>
    <div class="container">
    <div class="row profileCard p-2 d-flex mx-auto rounded-2">
      <div class="col-md-4 p-2 rounded-2  d-flex flex-column align-items-evenly">
        <img src="https://ismaaeel-a.github.io/allimages/Images/plc.png" alt="profile">
        <button type="button" class="functionbtn  bi bi-pen rounded-1" @click="editUser(user)"></button>   
      </div>
        
      <div class="col-md-8 rounded-2" v-if="user">
<form class=" d-flex flex-column justify-content-evenly align-items-evenly">
  <h2>User details:</h2>
        <span>First name: <input type="text" v-model="user.firstName"></span>
        <span>Last name: <input type="text" v-model="user.lastName"></span>
        <span>Gender: 
          <select v-model="user.gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </span>
        <span>Email: <input type="email" v-model="user.emailAdd"></span>
        <span>Password: <input type="password" v-model="user.userPass"></span>
        <button type="button" class="functionbtn  bi bi-pen rounded-1" @click="editUser(user)"></button>   
        <!-- <button type="button" class="functionbtn bi bi-trash rounded-1" @click="deleteUser(ID)"></button> -->
</form>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { toast } from 'vue3-toastify';
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
// import store from '@/store';

const ID = cookies.get('VerifiedUser')?.result.userID
console.log(ID);

export default {
  components: {
  },
  computed: {
    ...mapState({
      user: state => state.user 
    })
    
},
  methods: {
    ...mapActions(['editUser']),

    editUser(user) {
      try {
        this.$store.dispatch('editUser' , user)
          console.log(ID);
          console.log(user);
        
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    // async deleteUser(ID) {
    //   try {
    //     // this.$store.dispatch('deleteUser', userID)
    //     console.log(user);
        
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: 'bottom-center'
    //     })
    //   }
    // },
  },
  mounted() {
    this.$store.dispatch("fetchUser");
  }, 
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

  span{
    margin-block: 3px;
    padding-inline: 5px;
    border: 2px solid #181818;
    color: #181818;
  }

  input, select{
    background: #818181;
    border: none;

    width: 100%;
  }

  .functionbtn{
  background: #818181;
  transition: background 0.4s, color 0.3s;
    margin-block: 0.4rem;

  &:hover{
    background: #e9e9e9;
    color: #818181;
  }
}
</style>