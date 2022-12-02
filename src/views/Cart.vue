<template>
    <div>
        <div class="top w-100 bg-bs text-center">购物车</div>
        <div class="header" v-if="shopChar.length > 0">
            <van-swipe-cell class="mb-2" v-for="(item, index) in shopChar" :key="index">
                <div class="d-flex">
                    <van-card :num="item.value" :price="item.price" :desc="item.commodityDesc"
                        :title="item.commodityTitle" class="goods-card w-100" :thumb="item.commodityImg">
                    </van-card>
                </div>
                <div class="zj d-flex bg-bs jc-between ai-center">
                    <span class="pl-2 text-huis">购买数量</span>
                    <van-stepper class="pr-2 num" v-model="item.value" theme="round" button-size="22" disable-input />
                </div>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" @click="Close(index)" />
                </template>
            </van-swipe-cell>
        </div>
        <div v-else class="nn">
            <el-empty description="没有商品了，快去购货吧"></el-empty>
        </div>
        <div class="footer bg-bs w-100 d-flex ai-center">
            <span class="flex-1 pl-2 d-flex ai-center ">
                <span class="fs-m text-huis">免运费</span>
                <i class="iconfont icon-mianyunfei fs-8xl"></i>
            </span>
            <span class="pr-2">
                <span>合计:</span>
                <span class="fs-2xl text-hongs">￥{{ totalPrice.toFixed(2) }}</span>
            </span>
            <span class="pr-2">
                <van-button class="anniu fs-xl" color="linear-gradient(to right, #ff6034, #ee0a24)" round type="success"
                    size="normal">结算</van-button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            
            selectAll: true,
            shopChar: [
                {
                    id: '001',
                    commodityImg: 'https://img14.360buyimg.com/n7/jfs/t1/142304/10/31232/209058/6367a639E1248e41a/e13b188f15bea1c0.jpg',
                    commodityTitle: '土豆',
                    commodityDesc: '好吃',
                    price: '2.00',
                },
                {
                    id: '002',
                    commodityImg: require('@/assets/images/stroll/微信图片_20221113141312.jpg'),
                    commodityTitle: '正宗成都大美女',
                    commodityDesc: '好玩',
                    price: '9.90'
                },
                {
                    id: '003',
                    commodityImg: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
                    commodityTitle: '土豆',
                    commodityDesc: '好吃',
                    price: '2.00'
                },
            ]
        }
    },
    computed: {
        totalPrice() {
            return this.shopChar.reduce((sum, item) => sum + item.price * item.value, 0)
        }
    },
    methods: {
        Close(index) {
            this.$toast.success({
                message: '删除成功',
                duration: '1000',
                forbidClick: true
            });
            setTimeout(() => {
                this.shopChar.splice(index, 1);
            }, 500)
        },
    }
}
</script>


<style lang="scss" scoped>
.nn {
    margin-top: 50px;
}

.top {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    z-index: 999;
}

.header {
    margin-top: 52px;

    .van-swipe-cell+.van-swipe-cell {
        border-top: 1px solid #e5e5e5;
    }

    .van-card__title {
        font-size: 14px;
        font-weight: bold;
    }

    .goods-card {
        margin: 0;
        background-color: #fff;
    }

    .delete-button {
        height: 100%;
    }

    .zj {
        border-top: 1px solid #e5e5e5;
        height: 40px;
    }
}

.footer {
    position: fixed;
    bottom: 52px;
    right: 0;
    height: 60px;
    z-index: 998;

    .anniu {
        width: 100px;
    }
}
</style>