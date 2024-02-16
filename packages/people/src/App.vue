<template>
  <Header title="People" />

  <RouterView />
</template>

<script>
import Header from "dashboard/Header"

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style scoped>
</style>