<template>
    <div>
        <div class="info" v-for="(item, index) in detaillist" :key="index">
            <h4>{{ item.title }}</h4>
            <div class='detailsinfo'>
                <p>地点：{{ item.city }}</p>
                <p>票价：{{ item.price }}</p>
                <p>演出者：{{ item.profermer }}</p>
            </div>
            <p>
                {{ item.content }}
            </p>
            <img :src="item.poster" />
        </div>
    </div>

</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            id: this.$route.params.id,
            detaillist: []
        }
    },
    mounted () {
        axios.get("http://47.99.153.121:8021/index.php/index/details/typeId/"+ this.id +"/count/10")
             .then(res => {
                 console.log(res);
                 this.detaillist = res.data
             })
             .catch(error => {
                 console.log("请求失败");
             })
        // console.log(this.$route);
    }

}
</script>
<style lang="scss" scoped>
    .info {
        background: #fff;
        padding: 0 10px;
        margin-bottom: 10px;
        h4 {
            color: green;
            font-size: 16px;
            text-align: center;
        }
        .detailsinfo {
            p {
                color: orange;
            }
        }
    }
</style>