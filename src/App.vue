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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
