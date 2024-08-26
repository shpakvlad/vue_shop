<script setup>

</script>

<template>
  <div class="header-search-input">
    <input class="search-input" placeholder="Я ищу ..." type="text">
  </div>
</template>

<style lang="scss" scoped>

.header-search-input {
  width: 500px;
  display: flex;
  position: relative;

  .search-input {
    height: 40px;
    width: 100%;
    font-size: 1.2em;
    padding-left: 50px;
    background-image: url('/search.svg');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px 20px; /* Размер иконки */
    border: none;
    background-color: var(--color-border);
    color: var(--color-text);
    border-radius: 5px;

    &:focus,
    &:active,
    &:active:focus {
      border: none;
      outline: none;
    }
  }
}

</style>