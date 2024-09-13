<template>
  <div
    class="container-fluid section d-flex justify-content-center align-items-center pb-5"
  >
    <form class="d-flex flex-column justify-content-center align-items-center rounded-1">
      <h2>Sign Up</h2>
      <input type="text" v-model="newUser.firstName" placeholder="First name..." required/>
      <input type="text" v-model="newUser.lastName" placeholder="Last name..." required/>
      <select v-model="newUser.gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="email" v-model="newUser.emailAdd" placeholder="Email" required/>
      <input type="password" v-model="newUser.userPass" placeholder="Password" required/>
      <button type="button" class="send" @click="createUser">Create account</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { toast } from "vue3-toastify";
import router from "@/router";
export default {
  data() {
    return {
      newUser: {
        firstName: "",
        lastName: "",
        gender: "",
        emailAdd: "",
        userPass: "",
      },
    };
  },
  components: {},
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapActions(["addUser"]),

    async createUser() {
      try {
        await this.addUser(this.newUser);
        console.log(this.addUser);
        this.newUser = {
          firstName: "",
          lastName: "",
          gender: "",
          emailAdd: "",
          userPass: "",
        };
        setTimeout(() => {
            router.push({ name: 'login' }).then(() => {
              window.location.reload();
            });
          }, 3000);
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: "bottom-center",
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 25rem;
  aspect-ratio: 1;
  padding: 1.2rem;
  background: linear-gradient(-130deg,#e9e9e937 10%,#e9e9e900 55%, rgba(0,0,0,0));
}

h2 {
  color: #e9e9e9;
  text-decoration: underline;
  text-decoration-color: #818181;
}

input,
select,
button {
  width: 80%;
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
/* change */
[type="submit"]:hover{
    background: #181818;
}

::placeholder {
  color: #181818;
  opacity: 0.8;
}

.section {
  background-image: url(https://ismaaeel-a.github.io/CapstoneImages/images/login.png);
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
