<template>
  <Header title="Dashboard" />
  <div class="container">
    <div>Name: dashboard</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
</template>

<script>
import Header from "./Header.vue"

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
.container {
  font-size: 3rem;
  margin: auto;
  max-width: 800px;
  margin-top: 20px;
}
</style>
