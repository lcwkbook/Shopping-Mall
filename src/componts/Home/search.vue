<template>
  <div>
    <div class="sousuo">
        <div class="sou w-100 text-center">
          <span class="zp iconfont icon-paizhao mr-1 fs-4xl"></span>
          <van-search shape="round" background="linear-gradient(to right, rgb(253, 53, 53), rgb(253, 85, 84))" placeholder="请输入搜索关键词" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
      
    }
},

}
</script>

<style lang="scss" scoped>
.sousuo {

  .sou {
    position: relative;

    .ssl {
      width: 17.5rem;
      height: 2rem;
      border-radius: 0.75rem;
      border: none;
    }

    .zp {
      position: absolute;
      top: 50%;
      right: 10%;
      z-index: 99;
      transform: translate(-10%, -50%);
    }

    .mc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>