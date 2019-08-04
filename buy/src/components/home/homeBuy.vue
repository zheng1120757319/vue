<template>
    <div class="homebuy">
        <router-link :to="'/home/homedetails/' + item.cid" class="box border-bottom" v-for="item in list" :key="item.cid">
            <p>类别：{{ item.cname }}</p>
            <p>时间：{{ item.createtime }}</p>
        </router-link>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            list: []
        }
    },
    mounted () {
        axios.get("http://47.99.153.121:8021/index.php/index/types")
             .then(res => {
                //  console.log(res);
                 this.list = res.data
             })
    }
}
</script>
<style lang="scss" scoped>
    .homebuy {
        background: #fff;
        padding: 3px 3px;
        p {
            color: #226aff;
        }
    }
</style>
