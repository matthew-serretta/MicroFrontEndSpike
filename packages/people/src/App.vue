<template>
  <Header title="People" />
  <div class="container">
    <div>Name: people</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
</template>

<script>
import Header from "dashboard/Header"

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