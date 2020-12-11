<template>
  <div class="create">
  <search-bar v-if="loginToken"> </search-bar>
  <input-image></input-image>
  <color-picker> </color-picker>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/Searchbar.vue";
import InputImage from "@/components/InputImage.vue";
import ColorPicker from "@/components/ColorPicker.vue";
import cookies from 'vue-cookies';

export default {
  name: "Create",
  components: {
    SearchBar,
    ColorPicker,
    InputImage
  },
  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>
