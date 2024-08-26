<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {A11y, Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, A11y, Autoplay];

const autoplay = {
  delay: 4000,
  disableOnInteraction: false,
};

const navigation = {
  nextEl: '.swiper-button-prev',
  prevEl: '.swiper-button-next',
};
</script>

<template>
  <div class="swiper-container">
    <swiper
        :autoplay="autoplay"
        :modules="modules"
        :navigation="navigation"
        :pagination="{ clickable: true }"
        :slides-per-view="1"
    >
      <swiper-slide>
        <img alt="" src="/094950ef21125ceed17288dee06a1f4b.webp">
      </swiper-slide>
      <swiper-slide>
        <img alt="" src="/8d608212901622f6868acc0d4ab78c78.webp">
      </swiper-slide>
      <swiper-slide>
        <img alt="" src="/8bf512de8d832c9e186bb77bd581280a.webp">
      </swiper-slide>
      <swiper-slide>
        <img alt="" src="/6d00e025c0f3c69150a66069494a70b5.webp">
      </swiper-slide>


    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: calc(100% - 300px);
  position: relative;
  height: 100%;

  margin-top: 40px;
  margin-left: 40px;

  .swiper-button-prev,
  .swiper-button-next {
    background-color: var(--color-border-hover);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    cursor: pointer;
    position: absolute;
    z-index: 10;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 15px;
  }

  swiper-slide {
    img {

      width: 100%;
      height: auto;
    }

  }
}
</style>