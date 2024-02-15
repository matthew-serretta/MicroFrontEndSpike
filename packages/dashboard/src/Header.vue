<template>
  <header>
    {{ title }}
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Header',
    }
  }
}
</script>

<style scoped>
header {
  display: grid;
  place-content: center;
  background-color: blue;
  color: white;
  padding: 1rem;
  font-size: 2rem;
}
</style>