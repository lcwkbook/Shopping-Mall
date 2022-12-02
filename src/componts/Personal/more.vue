<template>
  <div>
    <div class="hot-nav mx-1 mt-2">
        <div class="hot-nav-content bg-bs br">
            <div class="nav-conent-inner">
               <div class="inner-item" v-for="(item, index) in list" :key="index">
                <div class="item d-flex ai-center px-2">
                  <span class="iconfont fs-4xl mr-2" :class="item.icon"></span>
                  <span class="fs-m flex-1">{{item.name}}</span>
                  <span class="iconfont" :class="item.ion"></span>
                </div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'more',
    data(){
      return{
        list: [
          {
            icon: 'icon-dingdan-',
            name: '订单列表',
            ion: 'icon-arrow-right'
          },
          {
            icon: 'icon-tuihuanhuo200',
            name: '退换货',
            ion: 'icon-arrow-right'
          },
          {
            icon: 'icon-shouhuodizhi',
            name: '收货地址',
            ion: 'icon-arrow-right'
          },
          {
            icon: 'icon-beiyongjin',
            name: '备用金',
            ion: 'icon-arrow-right'
          },
          {
            icon: 'icon-kefu',
            name: '客服',
            ion: 'icon-arrow-right'
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
  .item{
    height: 60px;
    line-height: 60px;
  }
</style>