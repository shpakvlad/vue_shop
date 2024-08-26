<script setup>
const props = defineProps({
  caption: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div>
    <router-link :to="link">{{ caption }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--color-text);
  padding: 10px;
  transition: background-color .3s;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 5px;
}
</style>