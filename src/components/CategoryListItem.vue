<script setup>
const props = defineProps({
  caption: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div>
    <router-link :to="`/category/${link}`">{{ caption }}</router-link>
  </div>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--color-text);
  padding: 0 10px 2px;
  width: 100%;
  display: flex;
  border-radius: 5px;
}
</style>