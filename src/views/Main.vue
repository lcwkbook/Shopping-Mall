<template>
    <div class="box">
        <div class="nav-box w-100 bg-lvs py-1">
            <div class="nav d-flex jc-around text-bs">
                <van-tabbar v-model="active">
                    <van-tabbar-item v-for=" (value, index) in menuList" :key="index" class="nav-link" tag="span"
                        :to="value.path" :icon="value.icon">{{ value.name }}</van-tabbar-item>
                </van-tabbar>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    data() {
        return {
            menuList: [
                {
                    name: "首页",
                    path: '/',
                    icon: "home-o"
                },
                {
                    name: "逛逛",
                    path: '/Stroll',
                    icon: "hot-o"
                },
                {
                    name: "购物车",
                    path: '/Cart',
                    icon: "cart-circle-o"
                },
                {
                    name: "个人中心",
                    path: '/Personal',
                    icon: "friends-o"
                },
            ]

        }
    },
    setup() {
        const active = ref(0);
        return { active };
    },
    mounted() {
        for (let i = 0; i < this.menuList.length; i++) {
            if (this.menuList[i].path == this.$router.history.current.fullPath) {
                return this.active = i
            }
        }

    }
}
</script>

<style lang="scss" scoped>


::v-deep.van-tabbar--fixed {
    border-top: 0.05rem solid #e5e5e5;
}

.box {
    height: 100%;

    .nav-box {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 2rem;
        z-index: 999;
    }
}
</style>