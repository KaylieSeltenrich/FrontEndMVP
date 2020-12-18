<template>
  <div id="app">
    <button id="hamburger" @click="showNav()">
      <img src="@/assets/hamburger.png" width="30px" alt="hamburger menu" />
    </button>
    <img
      id="logo"
      src="@/assets/inspologo.png"
      alt="Logo image"
      width="500px"
    />
    <div id="nav" v-if="loginToken != undefined">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/create">Create</router-link>
      <router-link class="link" to="/profile">Profile</router-link>
      <router-link class="link" to="/favourites">Faves</router-link>
      <router-link class="link" to="/mostliked">Most Liked</router-link>
    </div>
    <div id="logout" v-if="loginToken != undefined">
      <logout> </logout>
    </div>
    <div id="nav" v-else>
      <router-link class="link" to="/login"> Login</router-link>
      <router-link class="link" to="/signup"> Signup </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Logout from "./components/Logout.vue";

export default {
  components: {
    Logout,
  },
  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },

  methods: {
    showNav: function() {
      var x = document.getElementById("nav");
      if (x.style.display === "none") {
        x.style.display = "grid";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: none;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 5%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  margin-top: 5%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b2adb7;
}

.link {
  margin: 10%;
  border: 1px solid rgb(131, 131, 131);
  padding: 5%;
  text-decoration: none;
}

#hamburger {
  position: fixed;
  top: 0;
  left: 0;
  margin: 5%;
}

@media (max-width: 600px) {
  #logo {
    width: 100%;
    margin-bottom: 5%;
  }

  #hamburger {
    position: absolute;
    top: 15vh;
    left: 0;
  }

  #nav {
    display: none;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 0;
    width: 100%;
    top: 5vh;
    margin: 0;
    margin-bottom: 10%;
   
  }

  .link {
    display: grid;
    text-decoration: none;
    border: none;
    margin: 5%;
    padding: 0;
    align-self: center;
    background-color: rgb(235, 235, 235);
    height: 100%;
    align-self: start;
    align-items:center;
    
  }

  #logout{
    position: absolute;
    top: 18vh;
    right: 5vw;
    

  }
}
</style>
