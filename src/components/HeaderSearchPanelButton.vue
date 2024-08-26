<script setup>

</script>

<template>
  <div>
    <router-link to="/search/test">
      <button class="search-button">Search</button>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.search-button {
  border: none;
  height: 100%;
  text-transform: uppercase;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
}

router-link:hover {
  color: transparent;
}
</style>