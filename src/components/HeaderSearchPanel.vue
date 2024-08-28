<script setup>
import HeaderSearchInput from "@/components/HeaderSearchInput.vue";
import HeaderSearchPanelButton from "@/components/HeaderSearchPanelButton.vue";
import {ref} from "vue";

let inputValue = ref('');
</script>

<template>
  <div class="header-search-panel">
    <HeaderSearchInput @input-changed="inputValue = $event"></HeaderSearchInput>
    <HeaderSearchPanelButton :value="inputValue"></HeaderSearchPanelButton>
  </div>
</template>

<style lang="scss" scoped>
.header-search-panel {
  display: flex;
}
</style>