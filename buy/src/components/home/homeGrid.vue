<template>
  <div class="homegrid">
    <ul class="mui-table-view mui-grid-view mui-grid-9 homegridbgc">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/homebuy">
          <img src="../../assets/images/menu1.png" class="homegridimg" />
          <div class="mui-media-body">大麦网</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu2.png" class="homegridimg" />
          <div class="mui-media-body">豆瓣儿</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu3.png" class="homegridimg" />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu4.png" class="homegridimg" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu5.png" class="homegridimg" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu6.png" class="homegridimg" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "homeGrid"
};
</script>
<style lang="scss" scoped>
.homegridbgc {
    background: #fff;
}

.homegridimg {
    width: 55px;
    height: 55px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: none;
    border-bottom: none;
}
</style>