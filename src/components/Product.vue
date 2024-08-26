<script setup>
const props = defineProps({
  item: Object,
  required: true,
});

function addToCart(event) {
  event.preventDefault();
  console.log(event.target.id);
}
</script>

<template>
  <div class="category-list-item">
    <div class="img-container">
      <img :alt="item.name" :src="item.thumbnail">
    </div>

    <div class="category-list-content">
      <h3 class="item-title">{{ item.title }}</h3>

      <h2 class="item-price">price: {{ item.price }}&euro;</h2>

      <p class="item-rate">rating: {{ item.rating }}</p>

      <h4 class="item-stock">in stock: {{ item.stock }} pcs.</h4>

      <h4 class="item-comments">comments: {{ item.reviews.length }}</h4>

      <button :id="item.id" class="add-to-cart" @click="addToCart">Buy</button>

    </div>
  </div>

</template>

<style lang="scss" scoped>
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
</style>