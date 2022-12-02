<template>
  <div class="anchor-point Commodity d-flex fd-column">
    <header class=" w-100">
      <div v-show="isShow" class="header-returns d-flex jc-between w-100 ai-center px-3 text-bs">
        <div @click="goBack"><i class="iconfont icon-fanhui-copy br fs-4xl text-center text-bs"></i></div>
        <div><i class="iconfont icon-shouye-copy br fs-4xl text-center text-bs"></i></div>
      </div>
      <div v-show="!isShow" class="header-bar bg-bs d-flex jc-between w-100 ai-center px-3 text-heis"
        :style="styleOption">
        <div @click="goBack"><i class="iconfont icon-fanhui br fs-4xl text-center"></i></div>
        <div class="fs-m w-100">
          <div class="operation-btn d-flex">
            <div v-for="(item, index) in ['商品详情', '商品评价']" :key="index" @click="jump(index)"
              :style="{ background: activeStep === index ? '#eeeeee' : '#ffffff' }">{{ item }}
            </div>
          </div>
        </div>
        <div><i class="iconfont icon-shouye br fs-4xl text-center"></i></div>
      </div>
    </header>
    <section class="wrapper" ref="wrapper">
      <div>
        <div class="swiper">
          <van-swipe @change="onChange">
            <van-swipe-item v-for="(item, index) in  swipe" :key="index">
              <img class="swiper-img w-100" :src="item.src" alt="">
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator">{{ current + 1 }}/4</div>
            </template>
          </van-swipe>
        </div>
        <div class="fxg_banner_bottom w-100">
          <div class="cxj w-100 h-100">
            <div class="img d-flex">
              <div class="cxj_lft d-flex flex-column pl-4">
                <div class="cxj_lft_top d-flex mt-1">
                  <span class="fs-m text-bs">促销价</span>
                  <span class="ml-1 bg-bs">
                    <p class="fs-s text-chengs text-center">7.8折</p>
                  </span>
                </div>
                <div class="cxj_lft_bottom d-flex ">
                  <span class="msj d-flex fs-m text-bs">
                    <p>￥</p>
                    <p class="fs-4xl">24</p>
                    <p>.00</p>
                  </span>
                  <span class="yj d-flex text-bs pl-1 fs-m">
                    <p>￥</p>
                    <p>30.00</p>
                  </span>
                </div>
              </div>
              <div class="cxj_right mr-1 mt-1 d-flex flex-column ai-center">
                <div class="cxj_right_top">
                  <span class="fs-m text-chengs">距离秒杀结束</span>
                </div>
                <div class="cxj_right_btn d-flex mt-1">
                  <div class="seckill_tm time-h text-bs fs-m text-center">
                    <van-count-down :time="time" class="h-100">
                      <template #default="timeData" class="h-100 text-bs">
                        <span class="block h-100 fs-m">{{ timeData.hours }}</span>
                        <span class="colon h-100 text-bs">:</span>
                        <span class="block h-100 fs-m">{{ timeData.minutes }}</span>
                        <span class="colon h-100 text-bs">:</span>
                        <span class="block h-100 fs-m">{{ timeData.seconds }}</span>
                      </template>
                    </van-count-down>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main class="fxg_main bg-bs">
          <div class="main_box pt-3 pb-2 px-2">
            <div class="spmc text-2xl">
              <span>第四季亏损擦肩城市举办擦肩</span>
            </div>
            <div class="reidu d-flex text-huis fs-s ai-center">
              <span class="d-flex ai-center">
                <i class="iconfont icon-remen"></i>
                <p>1263喜欢</p>
              </span>
              <span class="ml-3">已售2457份</span>
            </div>
            <div class="fxgw d-flex mt-2 ai-center">
              <span class="fxgimg">
                <img class="w-100" src="//imgsrc.baidu.com/super/pic/item/4c086e061d950a7b0dacb5044fd162d9f3d3c951.jpg"
                  alt="" />
              </span>
              <span class="fs-s text-huis pl-3 flex-1">随时退 &bull; 过期退</span>
              <span>
                <i class="iconfont icon-arrow-right"></i>
              </span>
            </div>
          </div>
        </main>

        <div class="scroll-content" @scroll="onScroll">
          <div class="scroll-item" style="height: 1000px;">
            <div class="mt-2">
              <img class="w-100" style="height: 500px;" src="@/assets/images/home/products/1.jpg" alt="">
              <img class="w-100" style="height: 500px;" src="@/assets/images/home/products/3.jpg" alt="">
            </div>
          </div>
          <div class="scroll-item" style="height: 500px;background: red;">二层</div>
        </div>


      </div>
    </section>
    <footer>
      <van-goods-action class="action">
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'Commodity',
  data() {
    return {
      activeStep: '',
      styleOption: {},
      BetterScroll: '',
      isShow: true,
      current: 0,
      time: 30 * 60 * 60 * 1000,
      swipe: [
        { src: require("@/assets/images/stroll/171024skcflkqktkk44kt8.jpg.thumb.jpg") },
        { src: 'https://img14.360buyimg.com/n7/jfs/t1/142304/10/31232/209058/6367a639E1248e41a/e13b188f15bea1c0.jpg' },
        { src: 'https://img12.360buyimg.com/n7/jfs/t1/118155/17/23794/66345/6232b6d0E10e02f57/01ad59c612090725.jpg' },
        { src: require("@/assets/images/stroll/微信图片_20221113141312.jpg") },
      ]
    };
  },
  created() {
    console.log(this.$route.query.id);
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    goBack() {
      this.$router.back();
    },
    // 滚动触发按钮高亮
    onScroll(e) {
      let scrollItems = document.querySelectorAll('.scroll-item')
      for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
        let judge = e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop
        if (judge) {
          this.activeStep = i
          break
        }
      }
    },
    // 点击切换锚点
    jump(index) {
      let target = document.querySelector('.scroll-content')
      let scrollItems = document.querySelectorAll('.scroll-item')
      // 判断滚动条是否滚动到底部
      if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
        this.activeStep = index
      }
      let total = scrollItems[index].offsetTop - scrollItems[0].offsetTop // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
      let distance = document.querySelector('.scroll-content').scrollTop // 滚动条距离滚动区域顶部的距离
      // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
      // 滚动动画实现, 使用setTimeout的递归实现平滑滚动，将距离细分为50小段，10ms滚动一次
      // 计算每一小段的距离
      let step = total / 50
      if (total > distance) {
        smoothDown(document.querySelector('.scroll-content'))
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp(document.querySelector('.scroll-content'))
      }

      // 参数element为滚动区域
      function smoothDown(element) {
        if (distance < total) {
          distance += step
          element.scrollTop = distance
          setTimeout(smoothDown.bind(this, element), 10)
        } else {
          element.scrollTop = total
        }
      }

      // 参数element为滚动区域
      function smoothUp(element) {
        if (distance > total) {
          distance -= step
          element.scrollTop = distance
          setTimeout(smoothUp.bind(this, element), 10)
        } else {
          element.scrollTop = total
        }
      }

      // document.querySelectorAll('.scroll-item').forEach((item, index1) => {
      //   if (index === index1) {
      //     item.scrollIntoView({
      //       block: 'start',
      //       behavior: 'smooth'
      //     })
      //   }
      // })
    }
  },
  mounted() {
    this.BetterScroll = new BetterScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      bounce: false
    })
    this.BetterScroll.on('scroll', (pos) => {
      let posY = Math.abs(pos.y);
      let opacity = posY / 180;
      opacity = opacity > 1 ? 1 : opacity;
      this.styleOption = {
        opacity: opacity
      }
      if (posY >= 50) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.anchor-point {
  flex-basis: 100%;
  display: flex;
  overflow: hidden;

  .scroll-content {
    height: 100%;
    width: 90%;
    overflow: scroll;
  }

  .operation-btn {
    height: 100%;
    justify-content: space-evenly;
  }
}

.Commodity {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

section {
  flex: 1;
  overflow: hidden;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 2.2rem;

  .header-returns {
    height: 2.2rem;

    i {
      width: 1.7rem;
      height: 1.7rem;
      background-color: rgba(0, 0, 0, 0.3);
      line-height: 1.7rem;
    }
  }

  .header-bar {
    height: 2.2rem;
    background-color: #fff;
    line-height: 1.7rem;
  }
}

.van-count-down {
  line-height: 1.5rem;

  .block {
    font-size: 1rem;
    width: 1rem;
  }
}

.colon {
  display: inline-block;
  margin: 0 0.2rem;
}

.block {
  display: inline-block;
  width: 1.1rem;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
}

.fxg_banner_bottom {
  height: 3.25rem;

  .cxj {
    background-image: url(//imgsrc.baidu.com/super/pic/item/7bec54e736d12f2ec3cb5fa00ac2d56284356820.jpg);
    background-size: 100%;

    .img {
      justify-content: space-between;

      .cxj_lft {
        .cxj_lft_top {
          span {
            &:nth-child(2) {
              width: 2.3rem;
              height: 1.05rem;
              border-radius: 0.75rem;
              position: relative;
              margin-left: 0.25rem;
            }

            p {
              position: absolute;
              top: -10%;
              left: 0.4rem;
              transform: translateY(-50%);
            }
          }
        }

        .cxj_lft_bottom {
          transform: translateY(-5%);

          .msj {
            p {
              font-weight: bold;

              &:nth-child(2) {
                transform: translateY(-0.5rem);
              }
            }
          }

          .yj {
            text-decoration: line-through;
          }
        }
      }

      .cxj_right {
        .cxj_right_btn {
          .seckill_tm {
            width: 5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            border-radius: 0.25rem;
            background: linear-gradient(#ff6900, #efaf66);
          }
        }
      }
    }
  }
}

.fxg_main {
  .spmc {
    font-weight: bold;
  }

  .fxgw {
    .fxgimg {
      width: 4rem;
    }
  }
}

.custom-indicator {
  position: absolute;
  right: 0.25rem;
  bottom: 0.25rem;
  padding: 0.1rem 0.25rem;
  font-size: 0.6rem;
  background: rgba(0, 0, 0, 0.1);
}

.custom-indicator {
  background: rgb(0 0 0 / 0.3);
  color: #fff;
}

.swiper-img {
  height: 18.5rem;
  object-fit: cover;
}

.goods-name {
  border-bottom: 0.05rem solid #cccccc;

  h1 {
    font-weight: 500;
    margin: 0;
  }

  div {
    padding: 0.15rem 0;
  }
}

.goods-priceZ {
  .oprice {}

  .pprice {}
}

.action {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 0.05rem solid #ccc;
}
</style>