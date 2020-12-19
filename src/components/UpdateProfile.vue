<template>
  <div id="profile-container">
    <button id="updatebutton" @click="showUpdateProfile()">
      Click here to update your user information
    </button>
    <div id="profile-info">
      <div id="update-profile">
        <h1>Update Profile Information:</h1>
        <p>New Email:</p>
        <input type="text" v-model="email" />
        <p>New Username:</p>
        <input type="text" v-model="username" />
        <p>New Password:</p>
        <input type="password" v-model="password" />
        <button id="update" @click="updateProfile()">Update</button>
      </div>
      <div id="deleteaccount">
        <h1>Delete account:</h1>
        <p>Password:</p>
        <input type="password" v-model="deletepassword" />
        <button class="button" v-if="!showDelete" @click="showDelete = true">
          Delete
        </button>
        <button
          id="delete-profile"
          class="button"
          v-if="showDelete"
          @click="deleteProfile()"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      deletepassword: "",
      loginToken: cookies.get("session"),
      showDelete: false,
    };
  },

  methods: {
    updateProfile: function() {
      axios
        .request({
          url: "https://inspo.ml/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P",
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            loginToken: this.loginToken,
          },
        })
        .then((response) => {
          console.log(response);
          document.getElementById("update").innerHTML = "Updated Succesfully!";
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("update").innerHTML = "Error Updating!";
        });
    },

    deleteProfile: function() {
      axios
        .request({
          url: "https://inspo.ml/api/users",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P",
          },
          data: {
            loginToken: this.loginToken,
            password: this.deletepassword,
          },
        })
        .then((response) => {
          console.log(response);
          document.getElementById("delete-profile").innerText = "Success!";
          this.$router.push("/signup");
          cookies.remove("session", response.data.loginToken);
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("delete-profile").innerText = "Error!";
        });
    },

    showUpdateProfile: function() {
      var x = document.getElementById("profile-info");
      if (x.style.display === "none") {
        x.style.display = "grid";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>

<style lang="css" scoped>
@media (max-width: 767px) {
  #profile-info {
    display: none;
    grid-template-columns: 1fr 1fr;
  }
  h1 {
    font-size: 1em;
  }

  input {
    width: 70%;
  }

  button {
    margin-top: 10%;
  }

  #updatebutton {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1em;
    padding: 5%;
    width: 100%;
    border: none;
    margin-top: 8vh;
    height: 10vh;
  }
}

@media (max-width: 768px) {
  #profile-info {
    display: none;
    grid-template-columns: 1fr 1fr;
  }
  h1 {
    font-size: 1em;
  }

  input {
    width: 70%;
    height: 2vh;
  }

  button {
    margin-top: 10%;
    height: 3vh;
  }

  #updatebutton {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.2em;
    font-weight: bold;
    padding: 5%;
    width: 100%;
    border: none;
    margin-top: 8vh;
  }
}

@media (min-width: 1024px) {
 
  #profile-info {
    display: none;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin-left: 15%;
  }

  p{
    font-size: 1.4em;
  }
  h1 {
    font-size: 2em;
  }

  input {
    width: 70%;
    height: 3vh;
  }

  button {
    margin-top: 10%;
    width: 5vw;
    height: 3.5vh;
    font-weight: bold;
    font-size: 1em;
  }

  #updatebutton {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.2em;
    font-weight: bold;
    padding: 0.5%;
    height: 5vh;
    width: 50%;
    margin-left: 25%;
    border: none;
    margin-top: 0;
    margin-bottom: 2%;
    box-shadow: 5px 10px #888888;
  }
}
</style>
