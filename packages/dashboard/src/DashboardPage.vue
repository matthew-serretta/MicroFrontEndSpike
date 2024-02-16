<template>
  <h1>Welcome {{ fullName }}</h1>
  <p>This is a very useful and very private dashboard for you. You can also see:</p>
  <a href="http://localhost:8081/#/">See team members</a>
  <br>
  <a :href="`http://localhost:8081/#/${$route.params.id}`">See your public profile</a>
</template>

<script>
import mockData from 'people/mockData';
import { useRoute } from 'vue-router'

export default {
  name: 'DashboardPage',
  components: {
  },
  setup() {
    const route = useRoute();
    const person = mockData[route.params.id];
    const fullName = person.firstName + ' ' + person.lastName;

    return {
      fullName,
      person,
    }
  }
}
</script>