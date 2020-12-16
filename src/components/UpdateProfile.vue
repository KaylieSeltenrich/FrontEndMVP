<template>
  <div>
<h1>Update Profile:</h1>
    <p>Email:</p>
    <input type="text" v-model="email" />
    <p>Username:</p>
    <input type="text" v-model="username" />
    <p>Password:</p>
    <input
      type="password"
      v-model="password"
    />
    <button id="update" @click="updateProfile()">Update</button>

    <h1>Delete account:</h1>
    <p>Password:</p>
    <input
      type="password"
      v-model="deletepassword"
    />

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
      showDelete: false
    };
  },

  methods: {
    updateProfile: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
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
          document.getElementById("update").innerHTML = "Updated Succesfully!"
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("update").innerHTML = "Error Updating!"
        });
    },

     deleteProfile: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: this.loginToken,
            password: this.deletepassword
          }
        })
        .then(response => {
          console.log(response);
          document.getElementById("delete-profile").innerText = "Success!";
          this.$router.push("/signup");
          cookies.remove("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          document.getElementById("delete-profile").innerText = "Error!";
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
