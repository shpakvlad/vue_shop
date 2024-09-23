<script setup>

import axios from "axios";
import {ref} from "vue";
import {useRoute} from "vue-router";
import Product from "@/components/Product.vue";

const searchList = ref([]);
const route = useRoute();


axios.get(`https://dummyjson.com/products/search?q=${route.params.searchText}`)
    .then((response) => {
      searchList.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    }
);
</script>

<template>

<!--  todo реальзоваить страницу поиска товара-->
  <div class="item-container">

    <div  class="category-list-content">

      <div v-if="searchList.products.length === 0">
        <h1>Products not found!</h1>
      </div>

      <div v-else v-for="item of searchList.products" class="category-list" >

        <Product :item="item" :key="searchList.products.id"></Product>

      </div>
    </div>
  </div>





</template>

<style lang="scss" scoped>
.item-container {
  .category-name {
    margin-left: 50px;
    text-transform: uppercase;
    position: absolute;
  }

  .category-list-content {
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .category-list-item {
      padding: 15px;
      cursor: pointer;
      max-width: 280px;
      background-color: var(--color-background-mute);
      border: 1px solid var(--color-border);
      transition: scale .3s;


      .img-container {
        width: 250px;
        height: 250px;

        img {
          width: 100%;
          height: 100%;

          background-color: var(--color-img-bg);
          border-radius: 5px;
        }
      }

      .category-list-content {
        padding: 0 10px;
        display: flex;
        flex-flow: column;
        height: 280px;
        overflow: auto;

        .item-title {
          margin-top: 15px;
          font-size: 1.2em;
          overflow-wrap: break-word;
        }

        .item-price {
          margin-top: 20px;
          text-align: right;
        }

        .item-stock {
          margin-top: 10px;
        }

        .add-to-cart {
          padding: 10px;
          text-transform: uppercase;
          margin-top: auto;
        }
      }
      &:hover {
        scale: 1.03;
        border-radius: 5px;
      }
    }
  }
}
</style>