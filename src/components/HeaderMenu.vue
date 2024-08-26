<template>
  <div class="wrapper">
    <nav>
      <slot></slot>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 0;

  nav {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>