<template>
    <div id="image-container">
      <div v-for="image in images" :key="image.src.medium">
         <img class='image'
            v-bind:src="image.src.medium"
            width="500px">
      </div>
   </div>
</template>

<script>
import ColorThief from 'colorthief'
export default {
computed: {
        images() {
            return this.$store.state.images
        }
    },
mounted () {
function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

const colorThief = new ColorThief();
let img = document.getElementsByClassName('image');
let j = 0
for (j = 0; j < img.length; j++) {
  let image = img[j]
  image.crossOrigin = 'Anonymous';
  image.addEventListener('click', () => {
    var color = colorThief.getPalette(image);
    var i = 0
    for (i = 0; i < 10; i++) {
      var hex = RGBToHex(color[i][0], color[i][1], color[i][2],)
      var colorbox = document.createElement("div")
      image.parentNode.insertBefore(colorbox,img.nextSibling);
      colorbox.style.minHeight = "10vh";
      colorbox.style.display = "inline-block";
      colorbox.style.width = "10vw";
      colorbox.style.backgroundColor = hex;
    }
  });
}
       },
    }
</script>

<style lang="css" scoped>
#image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>