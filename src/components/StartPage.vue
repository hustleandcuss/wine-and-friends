<template>
  <div class="start">
    <h1>Welcome to Wine & Friends</h1>
    <p>
      Helping you find the right wine since 2020.
    </p>
    <h3>Random Wine</h3>
    <RandomWine/>
    <h3>White Wine</h3>
    <h3>Red Wine</h3>
    <DrunkFast/>
  </div>
</template>

<script>
import RandomWine from './RandomWine.vue'
import DrunkFast from "./DrunkFast";

export default {
  name: 'StartPage',
  components: {
    DrunkFast,
    RandomWine,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
