<template>
  <div>
    <div class="order  bg-bs br">
                <div class="order-top d-flex fs-m px-2">
                    <span class="flex-1 fs-xl">我的订单</span>
                    <span>
                        <span class="text-huis mr-1">全部</span>
                        <span>
                            <i class="iconfont icon-arrow-right"></i>
                        </span>
                    </span>
                </div>
                <div class="order-btm d-flex jc-around">
                    <span class="icon d-flex ai-center fd-column jc-center" v-for="(item, adIndex) in order" :key="adIndex">
                        <i class="fs-6xl" :class="item.icon"></i>
                        <span class="fs-m">{{ item.name }}</span>
                    </span>
                </div>
            </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        order: [
                {
                    icon: 'iconfont icon-daifukuan1',
                    name: '待付款',
                },
                {
                    icon: 'iconfont icon-shijian1',
                    name: '待发货',
                },
                {
                    icon: 'iconfont icon-daishouhuo',
                    name: '待收货',
                },
                {
                    icon: 'iconfont icon-daipingjia',
                    name: '待评价',
                },
            ]
    }
}
}
</script>

<style lang="scss" scoped>
.order-box {
    .order {
        .order-top {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .order-btm{
            .icon{
                height: 80px;
            }
        }
    }
}
</style>