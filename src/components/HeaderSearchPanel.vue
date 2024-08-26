<script setup>
import HeaderSearchInput from "@/components/HeaderSearchInput.vue";
import HeaderSearchPanelButton from "@/components/HeaderSearchPanelButton.vue";
import {ref} from "vue";

let searchText = ref('');

</script>

<template>
  <div class="header-search-panel">

<!-- TODO доделать передачу данных от инпута в адрессную строку для поиска-->

    <HeaderSearchInput v-model="searchText"></HeaderSearchInput>
    <HeaderSearchPanelButton :value="searchText"></HeaderSearchPanelButton>
  </div>
</template>

<style lang="scss" scoped>

.header-search-panel {
  display: flex;
}

</style>