<template>
    <div class="login-box w-100">
        <div id="form" class="zhdl text-center fs-4xl text-lvs mt-3">
            {{ name }}
        </div>
        <div class="denglu">
            <el-form ref="form" :model="form" :rules="rules" class="form-box">
                <el-form-item label="账号" prop="name">
                    <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item class="text-center w-100">
                    <el-button class="anniu" type="primary" @click="submitForm('form')">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="zc">
                <div class="zc-wj d-flex jc-center ai-center w-100" @click="onregister">
                    <div class="zchh fs-4xl">还不是会员？</div>
                    &nbsp;
                    <el-link type="primary">立即注册</el-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: "#form",
    name: "Login",
    data() {
        return {
            name: "登录",
            form: {
                name: "",
                password: "",
            },
            rules: {
                name: [{
                    required: true,
                    message: "请输入用户名",
                    trigger: "blur"
                }],
                password: [{
                    required: true,
                    message: "请输入密码",
                    trigger: "blur"
                }]
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    sessionStorage.setItem('isLogin', 'ture');
                    this.$store.dispatch("asyncUpdateUser",{name:this.form.name});
                    this.$router.push({name: 'Personal',params:{name:this.form.name}});
                } else {
                    this.$message({
                        message: '请输入用户名和密码',
                        type: 'warning'
                    });
                    return false;
                }
            });
        },
        onregister() {
            alert("d");
        },
    },
};
</script>

<style lang="scss" scoped>
.denglu {
    margin-top: 30px;
    .form-box {
        padding: 10px;
        .anniu {
            width: 160px;
            background-color: rgb(23, 234, 4);
            border-color: rgb(23, 234, 4);
        }
    }
    .zc {
        height: 60px;
        line-height: 60px;
        border: 1px solid #dcdfe6;
        background: rgba(255, 255, 255, 0.5);
    }
}
</style>