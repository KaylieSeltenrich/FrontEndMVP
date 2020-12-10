<template>
  <div>
    <img
      class="image"
      @click="GetPallette($event.currentTarget)"
      v-bind:src="image.src.medium"
      width="500px"
    />
    <div class="pallettecolor" v-for="color in colors" :key="color">
      <div class="fill" v-bind:style="'background-color:' + color">
        {{ colorNames }}
      </div>
    </div>
    <create-board
      v-if="colors.length > 0"
      :image="image.src.medium"
      :colors="colors"
    >
    </create-board>
  </div>
</template>

<script>
import ColorThief from "colorthief";
import CreateBoard from "./CreateBoard.vue";
import axios from "axios";

export default {
  components: {
    CreateBoard,
  },

  props: {
    image: {
      type: Object,
    },
  },

  data() {
    return {
      colorThief: new ColorThief(),
      colors: [],
      colorNames: [],
    };
  },

mounted: function() {
  this.getColourName();
},

  methods: {
    RGBToHex: function(r, g, b) {
      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);

      if (r.length == 1) r = "0" + r;
      if (g.length == 1) g = "0" + g;
      if (b.length == 1) b = "0" + b;

      return "#" + r + g + b;
    },

    GetPallette: function(image) {
      image.crossOrigin = "Anonymous";
      var color = this.colorThief.getPalette(image);
      var i = 0;
      this.colors = [];
      for (i = 0; i < 10; i++) {
        var hex = this.RGBToHex(color[i][0], color[i][1], color[i][2]);
        this.colors.push(hex);
      }
    },

    getColourName: function() {
      var i = 0;
      for (i = 0; i < this.colors.length; i++) {
        axios
          .request({
            url:
              "https://www.thecolorapi.com/id?hex=" +
              this.colors[i].replace("#", ""),
            method: "GET",
            headers: {
              Authorization: "Access-Control-Allow-Origin",
            },
          })
          .then((response) => {
            console.log(response);
            this.colorNames = response.data.name.value;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.pallettecolor {
  display: inline-block;
  width: 5vw;
  height: 10vh;
}
.fill {
  width: 100%;
  height: 100%;
}
</style>
