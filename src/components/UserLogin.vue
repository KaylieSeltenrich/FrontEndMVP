<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
      <p>Email:</p>
      <input type="text" id="email-input" class="input-text" v-model="email" />
      <p>Password:</p>
      <input
        type="password"
        id="password-input"
        class="input-text"
        v-model="password"
      />
      <h2 id="login" @click="loginUser">Login</h2>
      <h3>{{ loginStatus }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: "",
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          url: "https://inspo.ml/api/login",
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("user", response.data.id);
          this.$store.commit("loginUpdate", {loginToken:response.data.loginToken, userId:response.data.id});
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.loginStatus = "Error";
        });
    },
  },
};
</script>

<style lang="css" scoped>
#login {
  width: 50%;
  margin-top: 10%;
  margin-left: 25%;
  background-color: rgb(138, 138, 138);
  color: white;
  box-shadow: 1px 2px 5px 1px black;
}

#login:hover {
  background-color: lightgrey;
}

.pagecontainer {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  min-height: 50vh;
}

p {
    font-size: 1.2em;
  }

  input {
    height: 3vh;
    width: 55%;
  }
  
@media (min-width: 768px) {
  p {
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

#login {
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
  min-height: 60vh;
}

}
</style>
