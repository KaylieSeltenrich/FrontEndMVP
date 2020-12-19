<template>
  <div>
    <img
      class="image"
      @click="GetPallette($event.currentTarget)"
      v-bind:src="image"
    />
    <h2>{{ updateStatus }}</h2>
    <br />
    <div class="pallettecolor" v-for="color in colors" :key="color">
      <div class="fill" v-bind:style="'background-color:' + color">
        <div @click="CopyHex($event.currentTarget)">
          {{ color }}
        </div>
      </div>
    </div>
    <create-board v-if="colors.length > 0" :image="image" :colors="colors">
    </create-board>
  </div>
</template>

<script>
import ColorThief from "colorthief";
import CreateBoard from "./CreateBoard.vue";

export default {
  components: {
    CreateBoard,
  },

  props: {
    image: {
      type: String,
    },
  },

  data() {
    return {
      colorThief: new ColorThief(),
      colors: [],
      updateStatus: "",
      clickCount: 0,
    };
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
      try {
        image.crossOrigin = "Anonymous";
        var color = this.colorThief.getPalette(image);
        var i = 0;
        this.colors = [];
        for (i = 0; i < 10; i++) {
          var hex = this.RGBToHex(color[i][0], color[i][1], color[i][2]);
          this.colors.push(hex);
        }
      } catch (err) {
        console.log(err);
        if (this.clickCount == 0) {
          this.clickCount++;
          this.updateStatus = "Please click again";
        } else if (err.toString().includes("Failed to execute")) {
          this.updateStatus =
            "Sorry, unable to use this image due to issue with CORS. Please select a different image, or upload this image through imgur and then use that link instead!";
        }
      }
    },

    CopyHex: function(element) {
      let range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
    },
  },
};
</script>

<style lang="css" scoped>
.pallettecolor {
  display: inline-block;
  height: 10vh;
}
.fill {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
}
.image {
  width: 500px;
  height: 400px;
  object-fit: cover;
}

@media (max-width: 767px) {
  .image {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  .pallettecolor {
  display: inline-block;
  height: 8vh;
  width: 50%;
}
}

@media (max-width: 768px) {
  .image {
    width: 550px;
    height: 500px;
    object-fit: cover;
  }
  .pallettecolor {
  display: inline-block;
  height: 7vh;
  width: 35%;
}
}

</style>
