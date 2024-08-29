<script setup>
import {useRoute} from "vue-router";
import {watch, ref, onMounted} from "vue";
import axios from "axios";
import Product from "@/components/Product.vue";

const route = useRoute();
let categoryProducts =  ref("/category/" + route.params.fullPath);
let categoryName = ref(null);
let categoryList = ref([]);
let notFound_404 = false;


watch(route, (newValue, oldValue) => {
  let categoryPath = '';
  //
  // console.log('watch >>>>>>>>>>>>>');
  //
  // console.log("new >", newValue.path, "old >", oldValue.path);


  // console.log("categoryProducts >", categoryProducts);

  if (newValue.fullPath === 'all' || newValue.fullPath === '/category/all') {
    categoryPath = 'https://dummyjson.com/products?limit=0';
  } else {
    categoryPath = 'https://dummyjson.com/products' + newValue.fullPath;
  }
  console.log("categoryProducts >", categoryPath);
  // todo оптимизировать код для загрузки страниц

    axios.get(categoryPath)
      .then((response) => {
        categoryList.value = response.data;

        localStorage.setItem("shop_last_category", newValue.fullPath.trim()); //save

        categoryName = newValue.fullPath.trim();
      })
      .catch((error) => {
        console.error('Error: ', error.message);

        if (error.status === 404) {
          notFound_404 = true;
        }
      })
});

onMounted(() => {
  let categoryPath = '';

  categoryProducts = localStorage.getItem('shop_last_category');

  console.log("ddd >", categoryProducts);

  if (categoryProducts === '/category/all') {
    categoryPath = 'https://dummyjson.com/products?limit=0';
  } else {
    categoryPath = 'https://dummyjson.com/products' + categoryProducts;
  }
  console.log('onMounted >>>>>>>>>>>>>');
  //
  //

  axios.get(categoryPath)
      .then((response) => {
        categoryList.value = response.data
      })
      .catch((error) => {
        console.error('Error: ', error.message);
      })
});

function checkPath(variable) {
  let path;
  if (variable === '/all' || variable === '/category/all') {
    path = 'https://dummyjson.com/products?limit=0';
  } else {
    path = 'https://dummyjson.com/products/category/' + variable;
  }
  console.log("check path >", path);

  return path;
}

function addToCart(event) {
  event.preventDefault();
  console.log(event.target.id);
}
</script>

<template>
  <div class="item-container">
    <h2 class="category-name">{{ categoryName }}</h2>



    <div  class="category-list-content">

      <div v-if="notFound_404">
        <h1>404 not found!!!</h1>
      </div>

      <div v-else v-for="item of categoryList.products" class="category-list" :key="categoryList.products.id">


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