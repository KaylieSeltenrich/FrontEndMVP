<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
      <p>Username:</p>
      <input type="text"  v-model="username" />
      <p>Email:</p>
      <input type="text" v-model="email" />
      <p>Password:</p>
      <input type="password" v-model="password" />
      <h2 @click="signupUser()">Sign Up</h2>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signup-form",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },

  methods: {
    signupUser: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
          }
        })
        .then(response => {
          console.log(response.data);
          cookies.set("session", response.data[0].loginToken);
          this.$router.push("/home");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="css" scoped>

</style>