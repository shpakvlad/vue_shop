<template>
  <div class="logo-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0"></path>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: var(--color-border);

  svg {
    fill: var(--color-text);
  }
}
</style>


