<template>
    <div v-loading="isLoading">
        <div class="search">
            <See_search></See_search>
        </div>
        <div class="more">
            <See_more></See_more>
        </div>
    </div>
</template>

<script>
import See_search from '@/componts/Stroll/See_search.vue'
import See_more from '@/componts/Stroll/See_more.vue'
export default {
    name: 'Stroll',
    components: {
        See_search,
        See_more
    },
    data() {
        return {
            isLoading: false,
            zuo: [
                {
                    tp: require("@/assets/images/stroll/微信图片_20221113141312.jpg"),
                    nr: '益阳在线9月3日讯(记者 宋咏琪 刘益博)9月，瓜果飘香的季节。在赫山区泉交河镇菱角岔村益泉葡萄种植农民合作社的葡萄大棚里，一串串晶莹剔透的葡萄挂满枝头，在阳光下闪闪发光。大人小孩三五成群，一手持剪刀一',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: 'xiao',
                    rz: '助农认证'
                },
                {
                    tp: "http://mscar.test.upcdn.net/20221015c8488dfe4ac068ed.jpg",
                    nr: '222',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: '2',
                    rz: '助农认证'
                },
                {
                    tp: "http://mscar.test.upcdn.net/20221015c8488dfe4ac068ed.jpg",
                    nr: '333',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: '3',
                    rz: '助农认证'
                },
                {
                    tp: "http://mscar.test.upcdn.net/20221013cd00850963aaa450.jpeg",
                    nr: '555',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: '5',
                    rz: '助农认证'
                },
                {
                    tp: "http://mscar.test.upcdn.net/20221013cd00850963aaa450.jpeg",
                    nr: '666',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: '6',
                    rz: '助农认证'
                },
                {
                    tp: "http://mscar.test.upcdn.net/20221013cd00850963aaa450.jpeg",
                    nr: '777',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: '7',
                    rz: '助农认证'
                },
            ],
            you: [
                {
                    tp: require("@/assets/images/stroll/微信图片_20221113141312.jpg"),
                    nr: '欸佛华为哦凤凰网iu敢和我i',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: 'xiao',
                    rz: '助农认证'
                },
                {
                    tp: "http://mscar.test.upcdn.net/20221015c8488dfe4ac068ed.jpg",
                    nr: '111',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: '1',
                    rz: '助农认证'
                },
                {
                    tp: "http://mscar.test.upcdn.net/20221015b3ac956d98536746.jpg",
                    nr: '444',
                    tx: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    mc: '4',
                    rz: '助农认证'
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.search{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 40px;
}
.more{
    margin-top: 40px;
}
</style>