<template>
  <div class="container">
    <PeopleCard
    v-for="(person, index) in People"
    :key="index"
    :id="index"
    v-bind="person"
    />
  </div>
</template>

<script>
import PeopleCard from "./PeopleCard.vue"
import People from './people.json'

export default {
  name: 'PeoplePage',
  components: {
    PeopleCard,
  },
  setup() {

    return {
      People,
    };
  },
}
</script>

<style scoped>
.container {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>