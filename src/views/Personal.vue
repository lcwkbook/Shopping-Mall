<template>
    <div>
        <div class="head ">
            <div class="head-box">
                <div class="sz pr-2">
                    <i class="iconfont icon-shezhi fs-4xl pr-1"></i>
                    <i class="iconfont icon-xiaoxi fs-4xl pl-1"></i>
                </div>
            </div>
            <div class="login w-100 d-flex fd-column jc-end">
                <div class="img">
                    <el-avatar icon="el-icon-user-solid fs-10xl"></el-avatar>
                </div>
                <div class="Sign-in text-center" style="z-index: 99;">
                    <span>{{$store.getters.getUser.name}}</span>
                </div>
                <div class="like d-flex jc-around mt-3 pb-2">
                    <span class="d-flex ai-center fd-column" v-for="(item, index) in like" :key="index">
                        <i class="fs-xl" :class="item.icon"></i>
                        <span class="fs-m">{{ item.name }}</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="order-box mt-2 px-1">
           <order></order>
        </div>
        <div class="foot">
           <more></more>
        </div>
    </div>
</template>

<script>
import more from '@/componts/Personal/more.vue'
import order from '@/componts/Personal/order.vue'
export default {
    name: 'Personal',
    components: {
        more,
        order
    },
    data() {
        return {
            like: [
                {
                    ID: 1,
                    icon: 'iconfont icon-xihuan',
                    name: '喜欢',
                },
                {
                    ID: 2,
                    icon: 'iconfont icon-shoucang',
                    name: '收藏',
                },
                {
                    ID: 3,
                    icon: 'iconfont icon-lishi',
                    name: '历史',
                },
                {
                    ID: 4,
                    icon: 'iconfont icon-youhuiquan1',
                    name: '优惠券',
                },
            ]
        }
    },
    // beforeRouteEnter: (to,from,next) => {
    //     console.log("进入会员");
    //     next(vm=>{

    //     });
    // },
    // beforeRouteLeave: (to, from, next) => {
    //     console.log("离开会员");
    //     next();
    // },
    methods: {

},

}
</script>

<style lang="scss" scoped>
.head {
    height: 190px;
    position: relative;
    background: linear-gradient(to bottom, rgb(158, 235, 241), rgb(249, 249, 249), rgb(249, 247, 247), #fff);
    z-index: -1;

    .head-box {
        position: relative;
    }

    .sz {
        height: 40px;
        line-height: 40px;
        text-align: right;
    }

    .login {
        position: absolute;
        margin-top: 30px;
        height: 120px;

        .Sign-in {
            transform: translateY(5px);
        }

        .img {
            position: absolute;
            height: 70px;
            left: 50%;
            top: -40px;
            transform: translateX(-50%);

            span {
                width: 64px;
                height: 64px;
                position: relative;

                ::v-deep .el-icon-user-solid {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }

    .login::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        border-radius: 45% 45% 0 0;
        background-color: #fff;
    }
}

</style>