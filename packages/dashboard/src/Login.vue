<template>
  <h1>Login</h1>
  <p>Please enter your ID</p>
  <p>Hint: it's a number between 1-10</p>

  <form @submit.prevent="login">
    <input v-model="id" type="number" min="1" max="10" placeholder="ID" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const id = ref('');
    const router = useRouter();

    function login() {
      if (id.value) {
        router.push(`/dashboard/${id.value}`);
      }
    }

    return {
      id,
      login,
    }
  },
}
</script>