<template>
  <div>
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
</template>

<script>
export default {
data(){
    return{
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
                    commodityImg: require('../../assets/stroll/微信图片_20221113141312.jpg'),
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
</style>