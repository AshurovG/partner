<template>
  <DirectorCard />
</template>

<script>
import DirectorCard from "./components/DirectorCard.vue"

export default {
  name: 'App',
  components: {
    DirectorCard
  }
}
</script>

<style>
@import url("./reset");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
</style>
