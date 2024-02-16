<template>
  <div class="container">
    <img :src="person.img" alt="photo of person" />
    <h1> {{ fullName }} </h1>
    <p class="date-of-birth"> Date of birth: {{ person.dateOfBirth }} </p>
    <p class="id"> ID: {{ $route.params.id }} </p>
    <h2> Bio </h2>    
    <p class="bio"> {{ person.bio }} </p>    
  </div>
</template>

<script>
import People from './people.json'
import { useRoute } from 'vue-router'

export default {
  name: 'PersonPage',

  setup() {
    const route = useRoute();
    const person = People[route.params.id];
    const fullName = person.firstName + ' ' + person.lastName;

    return {
      fullName,
      person,
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  width: 300px;
}
</style>