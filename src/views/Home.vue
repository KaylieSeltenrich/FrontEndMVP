<template>
  <div class="home">
  <search-bar> </search-bar>
  <color-picker> </color-picker>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/Searchbar.vue";
import ColorPicker from "@/components/ColorPicker.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    ColorPicker
  }
};
</script>
