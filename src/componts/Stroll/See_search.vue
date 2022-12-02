<template>
  <div>
    <div class="ssl w-100 d-flex">
      <el-autocomplete class="w-100" v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
      </el-autocomplete>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurants: [],
        state: '',
        timeout:  null
    }
  },
  methods: {
    loadAll() {
      return [
        { "value": "云南小粒黑花生带壳黑皮花生500g" },
        { "value": "密云农家本地自种沙瓤西红柿" },
        { "value": "小茗公社蛋白肉安徽河南特产农家人造肉素肉豆制品豆皮素肉辣条原料" },
        { "value": "沙窝林子正宗沙窝萝卜小沙窝村现拔" },
        { "value": "黄心猕猴桃" },
        { "value": "当归龙眼肉枸杞子" },
        { "value": "2022年临安天目山新鲜冬笋新鲜竹笋" },
        { "value": "农家现捡鲜鸡蛋散养土鸡蛋" },
        { "value": "精选一级迁西即食板栗仁" },
        { "value": "正宗湖南樟树港辣椒新鲜" },
        { "value": "联承白糯甜玉米真空包装玉米棒粗粮轻食" },
        { "value": "密云农家现挖鬼子姜 新鲜野洋姜 " },
        { "value": "云南蒙自枇杷果" },
        { "value": "山西阳丰巧克力脆柿子" },
        { "value": "比利时进口啤梨" },
        { "value": "黄皮黄心大土豆农产品洋芋马铃薯小土豆" },
        { "value": "正宗陕西延安宜川壶口富士苹果" },
        { "value": " 玉米 糯玉米 粘玉米白糯甜玉米粘玉米非转基因 " },
        { "value": "阳信媚梨新梨七号山东特产新鲜水果鸭梨" },
        { "value": " 青海柴达木诺木洪黑枸杞子泡水含花青" },
        { "value": "鲜绿芦笋 农家自种嫩芦笋 生鲜当季蔬菜去根春笋" },
        { "value": "普罗旺斯西红柿 水果西红柿 安特莱斯普粉西红柿" },
        { "value": "干辣椒特辣椒干印度魔鬼辣椒500g散装特辣小米辣红辣椒干八角日华峰" },
        { "value": "正宗东北腌制酸菜猪肉炖酸菜原料泡菜下饭菜" },
        { "value": "东北甜糯玉米棒" },
        { "value": " 广东潮汕揭阳本地春菜" },
        { "value": "比利时啤梨4斤当季孕妇水果农产品荷兰青啤酒梨大果" },
        { "value": " 旱莲草" },
        { "value": "广西罗汉果烹饪调味香辛料农产品 广西罗汉果" },
        { "value": "凤鸣雅世2022年原种独蒜种子独子蒜种子紫皮独蒜农产品迷你种子籽紫皮珍珠大蒜" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().includes(queryString.toLowerCase()));
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-input__inner{
  text-align: center;
  font-size: 16px;
}
</style>