<template>
    <div>
   <input id="searchbar" type="text" placeholder="Search..." v-model="searchinput"> <button id="searchbutton" @click="$store.dispatch('getImages',searchinput)">Search</button>
    </div>
</template>

<script>

    export default {
    
      data() {
          return {
              searchinput: "",
          }
      },
    
    }
</script>

<style lang="css" scoped>
#searchbar{
    height:3vh;
    width: 10vw;
    font-size: 1.2em;
    margin-bottom: 5%;
}

#searchbutton{
    height:3vh;
}

@media (max-width: 767px) {
#searchbar{
    height:3vh;
    width: 30vw;
    font-size: 1.2em;
    margin-bottom: 5%;
}
}

@media (max-width: 768px) {
#searchbar{
    height:3vh;
    width: 30vw;
    font-size: 1.2em;
    margin-bottom: 5%;
}

#searchbutton {
    height: 3.5vh;
}
}
</style>