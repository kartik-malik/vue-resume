<template>
  <div class="backdrop" @click="$emit('toggleModal')"></div>
  <div class="loginModal">
    <!-- <slot></slot> -->
    <form class="loginForm" @submit.prevent="login">
      <input type="text" name="" v-model="username" placeholder="name" />
      <input
        type="password"
        name=""
        id=""
        v-model="password"
        placeholder="password"
      />
      <button>Log in</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.post("http://localhost:3000/signin", {
        username: this.username,
        password: this.password,
      }).then((res)=>{
          console.log(res.data);
      }).catch((err)=>{
          console.log(err.response.data);
          alert(err.response.data.error.message);
      });
    },
  },
  emits: ["toggleModal", "logIn"],
};
</script>
<style lang="scss" scoped>
.backdrop {
  background-color: rgba($color: #000000, $alpha: 0.4);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1;
}
.loginModal {
  // display: flex;
  // justify-content: center;
  position: fixed;
  top: 20vh;
  left: 30%;
  padding: 2rem;
  z-index: 2;
  width: 40%;
  // height: ;

  background-color: white;
}
.loginForm {
  // width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}
</style>
