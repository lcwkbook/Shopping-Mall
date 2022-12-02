<template>
    
    <div>
        <div class="st">
            <meta http-equiv="refresh" content="5;URL=/">
            <img class="w-100" src="@/assets/images/error/01.jpg">
        </div>
        <div class="fh">
            <img class="w-100" src="@/assets/images/error/02.jpg">
        </div>
        <van-count-down :time="time">
            <template #default="timeData">
                <div class="fh"><b><span class="block">{{ timeData.seconds }}</span></b>秒后跳转到首页</div>
            </template>
        </van-count-down>
    </div>
</template>


<script>
export default {
    name: 'NotFound',
    data() {
        return {
            time: 6 * 1000,
        }
    }

}
</script>

<style scoped>
html {
    width: 100%;
    overFlow-x: hidden;
    OVERFLOW: scroll;
}

body {
    margin: 0px;
    padding: 0px;
    background: #fff;
}

ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.cl {
    clear: both;
}

* {
    font-family: "微软雅黑";
    font-size: 12px;
    color: #5f5f5f;
}

a {
    font-family: "微软雅黑";
    font-size: 12px;
    color: #5f5f5f;
    text-decoration: none;
}

a:hover {
    color: #f00;
    border: 0px;
}

img {
    border: 0px;
}

.st {
    height: 320px;
    text-align: center;
    margin: 0 auto;
    margin-top: 70px;
}

.fh {
    height: 89px;
    text-align: center;
    margin: 0 auto;
    margin-top: 15px;
}

@media (min-width: 768px) {
    .st {
        width: 728px;
    }

    .fh {
        width: 728px;
    }
}

@media (min-width: 0px) and (max-width: 768px) {
    .st {
        width: 100%;
    }

    .fh {
        width: 100%;
    }
}
</style>