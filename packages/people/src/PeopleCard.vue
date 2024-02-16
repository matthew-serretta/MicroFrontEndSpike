<template>
  <a class="card" :href="`/#/${id}`">
    <img :src="img" alt="photo of person" />
    <p class="name"> {{ fullName }} </p>
  </a>
</template>

<script>

export default {
  name: 'PeopleCard',
  props: {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
  },
  setup(props, { emit}) {
    const fullName = props.firstName + ' ' + props.lastName;

    return {
      fullName,
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  overflow: hidden;
  display: grid;
  aspect-ratio: 1 / 1;
  transition: scale 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover,
  &:focus-visible {
    scale: 1.05;
  }

  > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
}

img {
  object-fit: cover;
  aspect-ratio: inherit;
  max-width: 100%;
  max-height: 100%;
}

.name {
  text-align: start;
  align-self: end;
  padding: 1rem;
  margin: 0;
  padding-block-start: 2rem;
  color: white;
  font-size: 1.25rem;
  background: linear-gradient(to top, black, transparent);
}



</style>