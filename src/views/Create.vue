<template>
  <div class="create">
  <h3>How to use: </h3>
    <p> You can either: <br>
      -Search for an image based on any search query you wish <br>
      -Submit your own image url. Submitting your own image works best with imgur links to avoid CORS issues. <br>
    <br>
    When the image is loaded <b>double click</b> the image and a pallette will be generated. To save the image and colour pallette simply give your board a title and click Save Board.
    If you want to access any of the hexcodes in the colour pallette simply click the colour and it will copy the code to your clipboard automatically. Have fun!
   </p>
  <search-bar v-if="loginToken"> </search-bar>
  <h2> OR </h2>
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
