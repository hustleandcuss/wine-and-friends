<template>
  <div class="start">
    <button @click="send">Get random wine recommendation</button>
    <h5>{{ wine }}</h5>

  </div>
</template>

<script>
import api from "../api.js";

export default {
  name: 'RandomWine',
  data: function() {
    return {
      error: "",
      wine: "",
    };
  },
  methods: {
  send() {
    let component = this;
    api
      .getRandomWine()
      .then(response => {
        component.wine = response.wine;
      })
      .catch(error => {
        component.error = error.messages;
      });
    },
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
