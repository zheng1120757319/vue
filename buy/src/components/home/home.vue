<template>
  <div>
    <swiper :imgson="imgFather"></swiper>
    <home-grid></home-grid>
  </div>
</template>

<script>
import Swiper from "./swiper.vue";
import homeGrid from "./homeGrid";
import axios from "axios";
import { Toast } from "mint-ui";

export default {
  name: "home",
  data() {
    return {
      imgUrl: [],
      imgFather: []
    }
  },
  components: {
    Swiper,
    homeGrid
  },
  mounted() {
    axios
      .get("http://rest.apizza.net/mock/017115113699d51c0ac8ed8053936d81/shop")
      .then(res => {
        const ress = res.data.data;
        this.imgUrl = ress.floor1; //将请求过来的数据赋值给imgUrl
        for (let key in this.imgUrl) {
          this.imgFather.push(this.imgUrl[key]);
        }
      })
      .catch(error => {
        Toast({
          message: "请求成功"
        });
        console.log("请求失败");
      });
  }
};
</script>

<style lang="scss" scoped>
</style>