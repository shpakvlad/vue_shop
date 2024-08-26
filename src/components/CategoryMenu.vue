<script setup>
import axios from "axios";
import { onMounted, ref} from "vue";
import ListItem from "@/components/CategoryListItem.vue";

let categoriesList = ref([]);
let hasErrorCategoryList = ref(false);

onMounted( () => {
  axios.get("https://dummyjson.com/products/categories")
      .then((response) => {categoriesList.value = response.data})
      .catch((error) => {
        hasErrorCategoryList.value = true;
        console.log('Has error: ', error.message);
      });
});

</script>

<template>
  <ul >
    <li>
      <ListItem link="all" caption="All Products"/>
    </li>
    <li v-if="!hasErrorCategoryList" v-for="(category, index) in categoriesList">
      <ListItem :link="category.slug" :caption="category.name" :key="index" />
    </li>
    <li class="error" v-else>
      <h3>No data!</h3>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  padding: 10px;
  list-style: none;
  background-color: var(--color-background-soft);
  min-width: 300px;
  max-height: 700px;
  overflow: auto;
  border-radius: 10px;

  li {
    width: 100%;
  }
  .error {
    background-color: red;
    color: yellow;
    padding: 5px;
    width: 300px;
  }
}
</style>