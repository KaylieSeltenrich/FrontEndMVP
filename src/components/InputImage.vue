<template>
  <div>
    <input type="text" placeholder="Input Image URL" v-model="imageinput" />
    <button @click="submitted = true"> Submit Image</button>
    <pallette-image v-if="submitted" :image="imageinput"> </pallette-image>
  </div>
</template>

<script>
import PalletteImage from './PalletteImage.vue';

export default {
  components: { PalletteImage },
  data() {
    return {
    imageinput: "",
    submitted: false,
    };
  },

}

</script>

<style lang="css" scoped>
@media only screen and (min-width: 768px) {
  div {
    margin-bottom: 5vh;
  }
}

@media (max-width: 768px) {
input{
    height:3vh;
    width: 30vw;
    font-size: 1.2em;
    margin-bottom: 5%;
}

button{
  height: 3.5vh;
}
}

</style>
