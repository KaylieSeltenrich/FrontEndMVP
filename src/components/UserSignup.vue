<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
      <p>Username:</p>
      <input type="text" v-model="username" />
      <p>Email:</p>
      <input type="text" v-model="email" />
      <p>Password:</p>
      <input type="password" v-model="password" />
      <h2 id="signup" @click="signupUser()">Sign Up</h2>
      <h3> {{signupStatus}} </h3>
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
          url: "https://inspo.ml/api/users",
          method: "POST",
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.signupStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("user", response.data.userId);
          this.$store.commit("loginUpdate", response.data.loginToken, response.data.userId);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
#signup {
  width: 50%;
  margin-top: 10%;
  margin-left: 25%;
  background-color: rgb(138, 138, 138);
  color: white;
  box-shadow: 1px 2px 5px 1px black;
}

#signup:hover {
  background-color: lightgrey;
}

@media (min-width: 768px) {
  p {
    margin-top: 5vh;
    font-size: 1.8em;
  }

  input {
    height: 3vh;
    width: 55%;
  }
}

@media (min-width: 1024px) {
  p {
    margin-top: 5%;
    font-size: 1.5em;
  }

  input {
    height: 4vh;
    width: 35%;
    font-size: 1.3em;
  }

  #signup {
    width: 30%;
    margin-top: 5%;
    margin-left: 35%;
    background-color: rgb(138, 138, 138);
    color: white;
    box-shadow: 1px 2px 5px 1px black;
  }

  .pagecontainer {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    min-height: 70vh;
  }
}
</style>
