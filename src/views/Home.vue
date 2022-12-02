<template>
  <div class="home">
    <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
      
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img class="doge" :style="{ transform: `scale(${props.distance / 80})` }" />
      </template>
      <template #loading>
        <img class="doge" src="@/assets/images/home/loading-1.gif" />
      </template>
      <div class="top-box">
        <div class="banner d-flex text-bs pt-1 fs-m">
          <span class="flex-1 pl-2">
            <span class="iconfont icon-dingwei mr-1"></span>
            <span>成都</span>
            <span class="iconfont icon-xiala"></span>
          </span>
          <span class="d-flex ai-center">
            <span class="biao iconfont icon-anquanbaozhang"></span>
            <span>正品保证</span>
          </span>
          <span class="pr-2 d-flex ai-center">
            <span class="biao iconfont icon-anquanbaozhang"></span>
            <span>正品保证</span>
          </span>
        </div>
        <!-- 搜索框 -->
        <div class="search mt-3" :class="{ navbar: true, totop: isTop }" @click="search">
          <search></search>
        </div>
        <div class="lbt w-100 mt-2 px-2">
          <div class="lbt-box w-100 h-100 bg-bs">
            <div class="block h-100">
              <el-carousel height="156px">
                <el-carousel-item v-for="(item, index) in carouseData" :key="index">
                  <img :src="item.url" class="w-100 br" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新公告 -->
      <div class="Notice">
        <Notice></Notice>
      </div>
      <!-- 新品上市 -->
      <div class="list">
        <list></list>
      </div>
      <!-- 精选商品 -->
      <van-sticky :offset-top="50">
        <div class="commodity">
          <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange" />
        </div>
      </van-sticky>

      <router-view></router-view>
    </van-pull-refresh>
  </div>
</template>

<script>
import search from '@/componts/Home/search.vue'
import Notice from '@/componts/Home/Notice.vue'
import list from '@/componts/Home/list.vue'
import { Toast } from 'vant';
export default {
  name: 'Home',
  components: {
    search,
    Notice,
    list,
  },
  data() {
    return {
      count: 0,
      isLoading: false,
      value: '1',
      isTop: false,
      selectedId: 0,
      carouseData: [
        { url: require("@/assets/images/lbt/01.jpg") },
        { url: require("@/assets/images/lbt/02.jpg") },
        { url: require("@/assets/images/lbt/03.jpg") }
      ],
      items: [
        { label: '精选商品' },
        { label: '根茎类' },
        { label: '南北干货' },
        { label: '肉干肉铺' },
        { label: '方便食品' },
        { label: '熟食腊味' },
        { label: '杂粮' },
        { label: '调味品' },
        { label: '米' },
      ],
      options: {
        activeColor: "rgb(253, 85, 84)",
        fixBottom: false,
        lineWidth: 0,
        lineHeight: 0,
        reBoundExponent: 30,
        reBoundingDuration: 200
      },
      subRouteUrl: ['/', 'Rhizophora', 'dried', 'butcher', 'instant', 'Cooked', 'grain', 'condiment', 'rice',]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
  },
  methods: {
    search() {
      this.$router.push('/search')
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        location.reload();
        this.isLoading = false;
        this.count++;
      }, 3000);
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 80) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    handleChange(item, index) {
      this.$router.replace(this.subRouteUrl[index])
    },
  },
};
</script>
  
<style lang="scss" scoped>
@import '//at.alicdn.com/t/c/font_3704456_9zpxu6cs7os.css';

.doge {
  width: 7rem;
  height: 3.6rem;
  margin-top: 0.4rem;
  border-radius: 0.5rem;
}

.totop {
  position: fixed;
  width: 100%;
  top: -1.15rem;
  z-index: 999;
}

.top-box {
  height: 10rem;
  background-image: linear-gradient(to right, rgb(253, 53, 53), rgb(253, 85, 84));
  border-radius: 0.75rem;
  position: relative;

  .biao {
    font-size: 1.2rem;
  }
}

.lbt {
  height: 7.8rem;
  z-index: 1;
  position: absolute;
  top: 5rem;
  left: 0;

  .lbt-box {
    border-radius: 0.75rem;
  }
}

::v-deep .van-grid-item__content {
  background-color: rgba(255, 255, 255, 0);
}

::v-deep .van-grid-item__icon-wrapper {
  width: 3.2rem;
  height: 3.2rem;
  text-align: center;
  line-height: 3.2rem;
  margin-bottom: 0.5rem;
  border-radius: 1.75rem;

  span {
    font-size: 1.6rem;
  }
}

.commodity {
  position: sticky;
  top: 2.5rem;
  background: #fff;
  padding: 0rem 0.5rem;
  overflow: hidden;
}

.ly-tabs__tab-list {
  height: 100%;
}

::v-deep .ly-tabbar {
  box-shadow: none;

  .ly-tab-list {
    padding: 0.5rem 0;
  }

  .ly-tab-item {
    // background-color: rgba(130, 124, 124, 0.3);
    height: 1.5rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    border-radius: 1rem;
    margin-right: 0.75rem;
  }

  .ly-tab-active-bar {
    background-color: none !important;
  }
}

::v-deep .van-grid {
  .van-grid-item:nth-child(1) {
    .van-grid-item__content {
      .van-grid-item__icon-wrapper {
        background-color: rgb(254, 139, 71);
      }
    }
  }

  .van-grid-item:nth-child(2) {
    .van-grid-item__content {
      .van-grid-item__icon-wrapper {
        background-color: rgb(140, 59, 240);
      }
    }
  }

  .van-grid-item:nth-child(3) {
    .van-grid-item__content {
      .van-grid-item__icon-wrapper {
        background-color: rgb(251, 62, 67);
      }
    }
  }

  .van-grid-item:nth-child(4) {
    .van-grid-item__content {
      .van-grid-item__icon-wrapper {
        background-color: rgb(50, 249, 250);
      }
    }
  }


}

::v-deep .van-grid-item__text {
  font-size: 0.7rem;
  font-weight: bold;
}
</style>