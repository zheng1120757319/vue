<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in imgson" :key="item.id">
          <img class="swiper-img" :src="item.image">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeSwiper",
  props: ['imgson'],
  data() {
    return {
      swiperOption: {
          pagination: ".swiper-pagination",
          loop: true,
          autoplay: 1000,
          autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 194px;
    background-color: #eee;
    .swiper-img {
        width: 100%;
        height: 194px;
    }
}
</style>