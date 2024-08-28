<script setup>
import {useRoute} from "vue-router";
import {watch, ref, onMounted} from "vue";
import axios from "axios";
import Product from "@/components/Product.vue";

const route = useRoute();
const categoryProducts = route.params.categoryName;
let categoryList = ref([]);
let categoryPath;

watch(route, (newValue) => {

  console.log(newValue.fullPath);

  if (newValue.fullPath === '/category/all') {
     categoryPath = 'https://dummyjson.com/products?limit=0';
  } else {
     categoryPath = 'https://dummyjson.com/products' + newValue.fullPath;
  }

  // todo оптимизировать код для загрузки страниц

    axios.get(categoryPath)
      .then((response) => {
        categoryList.value = response.data
      })
      .catch((error) => {
        console.error('Error: ', error.message);
      })
});

onMounted(() => {

  console.log(categoryProducts);

  axios.get('https://dummyjson.com/products/category/' + categoryProducts)
      .then((response) => {
        categoryList.value = response.data
      })
      .catch((error) => {
        console.error('Error: ', error.message);
      })
});

function addToCart(event) {
  event.preventDefault();
  console.log(event.target.id);
}
</script>

<template>
  <div class="item-container">
<!--    <h2 class="category-name">{{ categoryProducts }}</h2>-->

    <div class="category-list-content">
      <div v-for="item of categoryList.products" class="category-list" :key="categoryList.products.id">


        <Product :item="item"></Product>

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