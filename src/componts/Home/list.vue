<template>
  <div>
    <div class="ggl mt-2">
      <van-grid :gutter="10">
        <van-grid-item class="tm" v-for="value in menuList" :key="value.text" :text="value.text">
          <span slot="icon" :class="value.icon"></span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            menuList: [
        {
          text: '新品上市',
          icon: 'iconfont icon-new'
        },
        {
          text: '优惠专区',
          icon: 'iconfont icon-youhuiquan'
        },
        {
          text: '热销爆款',
          icon: 'iconfont icon-hot'
        },
        {
          text: '活动折扣',
          icon: 'iconfont icon-liwuhuodong'
        }
      ],
        }
    }
}
</script>

<style>

</style>