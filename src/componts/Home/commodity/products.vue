<template>
  <div>
    <div class="spzs mt-1 px-2 mb-5">
      <div class="products">
        <div class="zuo">
          <!-- 内容 -->
          <div class="nr bg-bs br mb-2" v-for="value in zuo" :key="value.zuo" @click="goCommodity(value.id)">
            <!-- 图片 -->
            <div class="nt_img">
              <img v-lazy="value.tm" class="w-100 br" alt="">
            </div>
            <!-- 名称 -->
            <div class="nrqu my-1 fs-m px-1">
              <span>{{ value.mc }}</span>
            </div>
            <!-- 包邮 -->
            <div class="zuozhe d-flex ai-center">
              <div class="by d-flex ai-center pl-1 fs-xs mb-1">
                <span><i :class="value.icon"></i></span>
                <span class="text-lvs-1 fw mr-2">{{ value.xyhf }}</span>
                <span class="text-huis">{{ value.renshu }}</span>
                <span class="text-huis">{{ value.fk }}</span>
              </div>
            </div>
            <div class="jine flex-1 fs-xs text-huis pl-1 pb-2 d-flex ai-center mt-1">
              <span class="fs-m text-hongs">￥</span>
              <span id="money" class="fs-2xl text-hongs-1 flex-1">{{ value.money }}</span>
              <i :class="value.gwc" class="fs-xl text-hongs-1 pr-2"></i>
            </div>
          </div>
        </div>
        <div class="you">
          <div class="nr bg-bs br mb-2" v-for="(value, index) in you" :key="index" @click="goCommodity(value.id)">
            <!-- 图片 -->
            <div class="nt_img">
              <img v-lazy="value.tm" class="w-100 br" alt="">
            </div>
            <!-- 名称 -->
            <div class="nrqu my-1 fs-m px-1">
              <span>{{ value.mc }}</span>
            </div>
            <!-- 包邮 -->
            <div class="zuozhe d-flex ai-center">
              <div class="by d-flex ai-center pl-1 fs-xs mb-1">
                <span><i :class="value.icon"></i></span>
                <span class="text-lvs-1 fw mr-2">{{ value.xyhf }}</span>
                <span class="text-huis">{{ value.renshu }}</span>
                <span class="text-huis">{{ value.fk }}</span>
              </div>
            </div>
            <div class="jine flex-1 fs-xs text-huis pl-1 pb-2 d-flex ai-center mt-1">
              <span class="fs-m text-hongs">￥</span>
              <span id="money" class="fs-2xl text-hongs-1 mr-1">{{ value.money }}</span>
              <i :class="value.baoyou" class="flex-1 fs-2xl"></i>
              <i :class="value.gwc" class="fs-xl text-hongs-1 pr-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  data() {
    return {
      zuo: [
        {
          id: 1,
          tm: require('@/assets/images/home/products/1.jpg'),
          mc: '粉丝 正宗龙口粉丝 绿豆粉丝粉条凉拌水晶粉丝火锅粉南北干货火',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '3.54',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 2,
          tm: require('@/assets/images/home/products/2.jpg'),
          mc: '太朴有机会土坤 跑山走地坤生态山林 农家散养土坤 月子坤肉炖汤食材 公坤（不分切一袋） 拒绝饲料，8个月以上老公坤柴坤，乌坤，活坤现杀，带内脏坤心肝胗，坤肝宝宝粥好食材点击购买',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '2000',
          fk: '+人付款',
          money: '39.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 3,
          tm: require('@/assets/images/home/products/3.jpg'),
          mc: '芹菜汁 宁夏西吉芹菜汁饮料鲜榨降降联盟西芹原汁250ml*12瓶饮料 芹菜汁饮料',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '8.50',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 4,
          tm: require('@/assets/images/home/products/4.jpg'),
          mc: ' 高山农家香甜香蕉 新鲜青香蕉 2.5kg 5斤（需催熟）',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '28.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 5,
          tm: require('@/assets/images/home/products/5.jpg'),
          mc: '山东铁杆大葱新鲜10斤当季章丘甜葱蔬菜批发5整箱批发去叶蘸酱农家东北农家自',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '2000',
          fk: '+人付款',
          money: '39.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 6,
          tm: require('@/assets/images/home/products/6.jpg'),
          mc: '【活蟹】蟹宗 大闸蟹鲜活螃蟹现货 公4.2-4.5两 母2.7-3.0两 4对8只 生鲜活鲜年',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '2000',
          fk: '+人付款',
          money: '129.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 7,
          tm: require('@/assets/images/home/products/7.jpg'),
          mc: '新疆库尔勒香梨子脆甜酥梨子新鲜水果应季果蔬健康轻食年货节礼盒春节送礼 5斤',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '2000',
          fk: '+人付款',
          money: '16.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 8,
          tm: require('@/assets/images/home/products/8.jpg'),
          mc: '俄罗斯Russia国家馆柳缤梅牌进口果汁950ml 混合石榴果汁 俄罗斯原装进口，领',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '2000',
          fk: '+人付款',
          money: '85.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 9,
          tm: require('@/assets/images/home/products/9.jpg'),
          mc: '新疆新鲜哈密瓜 正宗吐鲁番火焰西州蜜瓜新鲜水果脆甜香密瓜 优选2粒哈密瓜实惠',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '2000',
          fk: '+人付款',
          money: '68.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 10,
          tm: require('@/assets/images/home/products/10.jpg'),
          mc: '农家养新鲜坤蛋单枚40±5g 20枚800g左右',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '11.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 11,
          tm: require('@/assets/images/home/products/11.jpg'),
          mc: '甘肃土豆新鲜黄心沙面大土豆高山洋芋农家自种团建送礼 10斤',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '17.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
      ],
      you: [
      {
          id: 12,
          tm: require('@/assets/images/home/products/12.jpg'),
          mc: '土坤 新鲜2年半，散养土鸡 活鸡现杀现发老母鸡肉 生鲜走地鸡柴鸡 杀前约3斤左右 整',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '84.00',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 13,
          tm: require('@/assets/images/home/products/13.jpg'),
          mc: '有友 泡椒凤爪 重庆特产小吃 开袋即食熟食 经典小吃 休闲零食小吃 追',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '9999',
          fk: '+人付款',
          money: '9.90',
          baoyou: 'iconfont icon-tianmaobaoyouqia',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 14,
          tm: require('@/assets/images/home/products/14.jpg'),
          mc: '元井汇 西兰花种子白菜花种子曼陀绿青花菜四季西蓝花种籽 西蓝花一包（',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 15,
          tm: require('@/assets/images/home/products/15.jpg'),
          mc: '云南无籽夏黑葡萄提子 750g 精品串装 新鲜水果 产地直发',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 16,
          tm: require('@/assets/images/home/products/16.jpg'),
          mc: '【产地直发】山东潍坊大姜 生姜干姜黄姜老姜农家自种 新鲜蔬菜现挖现发 精选大',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 17,
          tm: require('@/assets/images/home/products/17.jpg'),
          mc: '常山YUZU稻香谷双柚汁柚香谷常山柚饮料柚',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 18,
          tm: require('@/assets/images/home/products/18.jpg'),
          mc: '虾滑肠 200g 约18条 火锅食材 烤肠 热狗肠 关东煮 丸料 烧烤 虾丸子一口',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 19,
          tm: require('@/assets/images/home/products/19.jpg'),
          mc: '丹东红颜玖玖奶油草莓 约重500g/15-24颗 新鲜水果 丹东红颜玖玖奶',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 20,
          tm: require('@/assets/images/home/products/20.jpg'),
          mc: '四川不知火丑橘 当季新鲜水果丑八怪桔子柑橘耙耙柑礼盒装 精选3斤装',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 21,
          tm: require('@/assets/images/home/products/21.jpg'),
          mc: '水蜜桃多汁新鲜无锡水蜜桃 新鲜水果精选桃子特产 现货现发 礼盒装 【3-4两左右',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
        {
          id: 22,
          tm: require('@/assets/images/home/products/22.jpg'),
          mc: '广西沙田柚 广西柚子容县金柚孕妇水果当季时令应季新鲜水果整箱 净重5斤【拍两',
          icon: 'iconfont icon-xinyong',
          xyhf: '先用后付',
          renshu: '4000',
          fk: '+人付款',
          money: '19.80',
          gwc: 'iconfont icon-gouwuche-copy'
        },
      ]
    }
  },
  methods: {
    goCommodity(id) {
      this.$router.push({
        // // 隐示
        // name: 'Commodity',
        // params: {
        //   id
        // }
        //显示
        path: '/Commodity',
        query: {
          id: id
        } 
        
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.spzs,
.products {
  overflow: hidden;
}

.nt_img>img {
  border-radius: 0.5rem 0.5rem 0px 0px;
}

.zuo,
.you {
  width: 48.5%;
}

.zuo {
  float: left;
}

.you {
  float: right;
}

.nrqu span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>