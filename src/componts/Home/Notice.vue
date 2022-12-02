<template>
  <div>
    <div class="gg px-2 w-100">
      <div class="gonggao bg-bs d-flex ai-center h-100">
        <span class="fs-m pl-3 py-1 d-flex fd-column h-100">
          <span class="zuixgg">最新</span>
          <span class="zuixgg text-hongs">公告</span>
        </span>
        <span class="pl-3">|</span>
        <span class="wzgg fs-m text-heis-2">
          <van-notice-bar :scrollable="false" class="bg-bs">
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :touchable="false" :show-indicators="false">
              <van-swipe-item>关注主播领取5元优惠券</van-swipe-item>
              <van-swipe-item>烟台苹果特价，只要1999</van-swipe-item>
              <van-swipe-item>北极雪梨清脆爽口</van-swipe-item>
            </van-swipe>
          </van-notice-bar>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
}
}
</script>

<style lang="scss" scoped>
.gg {
  margin-top: 100px;
  height: 50px;
  line-height: 50px;

  .gonggao {
    border-radius: 30px;

    .zuixgg {
      font-size: 16px;
      display: block;
      height: 20px;
      line-height: 20px;
      font-weight: bold;
    }
  }
}
.wzgg {
  width: 250px;

  .notice-swipe {
    height: 40px;
    line-height: 40px;

    .van-swipe-item {
      letter-spacing: 1px;
      color: #555;
    }
  }
}
</style>