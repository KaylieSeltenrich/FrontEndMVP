<template>
  <div id="app">
    <button id="hamburger" v-if="loginToken != undefined" @click="showNav()">
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
    <button id="hamburger" v-if="!loginToken" @click="showLoggedOutNav()">
      <img src="@/assets/hamburger.png" width="30px" alt="hamburger menu" />
    </button>
    <div id="signedout-nav" v-if="!loginToken">
      <router-link class="link" to="/login"> Login</router-link>
      <router-link class="link" to="/signup"> Signup </router-link>
    </div>
    <router-view />
    <div id="footer">
      Website Created By Kaylie Seltenrich <br />
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
      <a href="https://lokeshdhakar.com/projects/color-thief/"
        >Pallette generator created using Color Thief</a
      >
    </div>
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

    showLoggedOutNav: function() {
      var x = document.getElementById("signedout-nav");
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
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

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

#signedout-nav {
  display: none;
  grid-template-columns: 1fr 1fr;
  column-gap: 5%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  margin-top: 10%;
}

#signedout-nav a {
  font-weight: bold;
  color: #2c3e50;
}

#signedout-nav a.router-link-exact-active {
  color: #b2adb7;
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

@media (max-width: 767px) {
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
    background-color: rgb(235, 235, 235);
    height: 100%;
    align-self: start;
    align-items: center;
  }

  #logout {
    position: absolute;
    top: 18vh;
    right: 5vw;
  }

  #footer {
    margin-top: 10vh;
    font-weight: bold;
    background-color: rgb(240, 238, 238);
    padding: 5%;
  }

  #footer a:link {
    color: grey;
  }
  #footer a:visited {
    color: grey;
  }
  #footer a:hover {
    color: rgb(61, 61, 61);
  }
}

/* TABLET */
@media only screen and (min-width: 768px){
  #logo {
    width: 70%;
    margin-bottom: 5%;
  }

  #hamburger {
    position: absolute;
    top: 15vh;
    left: 0;
    height: 6vh;
    width: 10vw;
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
    margin: 10%;
    padding: 0;
    background-color: rgb(235, 235, 235);
    height: 100%;
    align-self: start;
    align-items: center;
  }

  #logout {
    position: absolute;
    top: 20vh;
    right: 5vw;
  }

  #footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 20vh;
    text-align: center;
    align-items: center;
    font-weight: bold;
    background-color: rgb(240, 238, 238);

  }

  #footer a:link {
    color: grey;
  }
  #footer a:visited {
    color: grey;
  }
  #footer a:hover {
    color: rgb(61, 61, 61);
  }
}
</style>
