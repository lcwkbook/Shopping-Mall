<template>
    <div>
        <div class="dt px-1">
            <div class="masonry content">
                <div class="item my-1">
                    <div class="zuo">
                        <div class="nr bg-bs mb-2 br-1" v-for="value in zuo" :key="value.zuo">
                            <div class="nt_img">
                                <img v-lazy="value.tp" class="w-100 br-1" alt="">
                            </div>
                            <div class="nrqu my-1 fs-m">
                                <span>{{ value.nr }}</span>
                            </div>
                            <div class="zuozhe d-flex ai-center">
                                <div class="tx">
                                    <el-avatar :src="value.tx">
                                    </el-avatar>
                                </div>
                                <div class="yhm flex-1 fs-s text-huis ml-1">
                                    <span>{{ value.mc }}</span>
                                </div>
                                <div class="rzheng pr-1">
                                    <i data="iconfont icon-renzheng fs-6xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="you">
                        <div class="nr bg-bs mb-2 br-1" v-for="value in you" :key="value.you">
                            <div class="nt_img">
                                <img v-lazy="value.tp" class="w-100 br-1" alt="">
                            </div>
                            <div class="nrqu my-1 fs-m">
                                <span>{{ value.nr }}</span>
                            </div>
                            <div class="zuozhe d-flex ai-center">
                                <div class="tx">
                                    <el-avatar :src="value.tx">
                                    </el-avatar>
                                </div>
                                <div class="yhm flex-1 fs-s text-huis ml-1">
                                    <span>{{ value.mc }}</span>
                                </div>
                                <div class="rzheng pr-1">
                                    <i data="iconfont icon-renzheng fs-6xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            zuo: [
                {
                    tp: require("@/assets/images/stroll/171024skcflkqktkk44kt8.jpg.thumb.jpg"),
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
.dt {
    width: 100%;
    // background-color: #fff;
    // height: auto;
    // height: 100vh;
    // display: grid;
    // grid-template-columns: 50vw;
    // justify-content: center;

}

.masonry,
.item {
    overflow: hidden;
    margin-bottom: 30px;
}

.zuo,
.you {
    width: 48%;
}

.zuo {
    float: left;
}

.you {
    float: right;
}


.tx {
    width: 28px;
    height: 28px;
}

::v-deep .el-avatar {
    width: 28px;
    height: 28px;
}

.nrqu span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.yhm span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
</style>