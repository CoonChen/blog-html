<template>
  <div class="container">
    <div class="login">
      <div class="form">
        <el-form ref="inputForm" :model="inputForm" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="inputForm.username" prefix-icon="fa fa-user-o" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="inputForm.password" type="password" prefix-icon="fa fa-key" placeholder="密码"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12" :offset="4">
              <el-button type="text" @click="login()" :disabled="loginBtnDisabled">登录</el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="text" @click="showDialog()"  :disabled="registerBtnDisabled">注册</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :append-to-body="true" >
        <div style="width: 60%;text-align: center;margin: 0 auto;">
          <el-input v-model="registerCode" placeholder="请输入注册授权码"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="checkRegisterCode()">确 定</el-button>
          </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginBtnDisabled: false,
      registerBtnDisabled: false,
      dialogVisible: false,
      registerCode: "",
      inputForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: '账号必填', trigger: 'blur' }],
        password: [
          { required: true, message: '密码必填', trigger: 'blur' },
          { min: 5, max: 10, message: '密码长度在5到10个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.loginBtnDisabled = true;
      let url = '/api/login';
      let from = this.$refs['inputForm'];
      from.validate((valid) => {
        if (valid) {
          $http.post(url, $qs.stringify(this.inputForm)).then((response) => {
            if (response.data) {
              this.$notify({title: '成功', message: '登录系统成功！', type: 'success'});
              this.$router.push({name: "index"});
            } else {
              this.$notify.error({title: '错误', message: '账号或密码错误！'});
            }
            this.loginBtnDisabled = false;
          });
        } else {
          this.loginBtnDisabled = false;
        }
      });
    },
    showDialog() {
      let from = this.$refs['inputForm'];
      from.validate((valid) => {
        if (valid) {
          this.dialogVisible = true;
        }
      });
    },
    checkRegisterCode() {
      if (this.registerCode.trim()) {
        let passCode = 'CHENJIANLIANG';
        if (this.registerCode === passCode) {
          this.register();
        } else {
          this.$notify.error({title: '错误', message: '注册授权码验证失败！'});
        }
        this.dialogVisible = false;
      }
    },
    register() {
      this.registerBtnDisabled = true;
      let url = '/api/register';
      $http.post(url, $qs.stringify(this.inputForm)).then((response) => {
        if (response.data.success) {
          this.$message({message: response.data.message, type: 'success'});
        } else {
          this.$message.error(response.data.message);
        }
        this.registerBtnDisabled = false;
      });
    }
  }
}
</script>
<style scoped>
  .container {
    background: url(../assets/bg1.png) no-repeat fixed center;
    background-size: 100% 100%;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .login {
    background-color:rgba(255,255,255,0.1);
    width: 300px;
    height: 260px;
    position: fixed;
    top: 30%;
    right: 15%;
    border-radius: 1em;
    -webkit-box-shadow: 3px 3px 6px #666;
    -moz-box-shadow: 3px 3px 6px #666;
    box-shadow: 3px 3px 6px #666;
  }
  .form {
    margin: 50px;
  }

</style>
