<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span>Hello，{{user.username}}</span>
          <el-button class="btn" @click="logOut">LogOut</el-button>
        </div>
        <div v-else class="userActions">
          <el-button type="btn" @click="signUpDialogVisible = true">注册</el-button>
          <el-dialog title="注册" :visible.sync="signUpDialogVisible" size="tiny">
            <el-form >
              <el-form-item label="用户名">
                <el-input type="text" v-model="formData.username" placeholder="请输入用户名" autofocus></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="formData.password" placeholder="请输入密码"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
             <el-button @click="signUpDialogVisible = false">取 消</el-button>
             <el-button type="primary" @click="signUp()">提 交</el-button>
            </span>
          </el-dialog>
          <el-button type="btn" @click="logInDialogVisible = true">登录</el-button>
          <el-dialog title="登录" :visible.sync="logInDialogVisible" size="tiny">
            <el-form >
              <el-form-item label="用户名">
                <el-input type="text" v-model="formData.username" placeholder="请输入用户名" autofocus></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="formData.password" placeholder="请输入密码"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
             <el-button @click="logInDialogVisible = false">取 消</el-button>
             <el-button type="primary" @click="logIn($event)">提 交</el-button>
            </span>
          </el-dialog>
        </div>
        <el-button @click="preview" class="btn" type="primary">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store/index'
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'

  export default {
    name: 'Topbar',
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
        signUpDialogVisible: false,
        logInDialogVisible: false,
        id: store.state.user.id,
        errorMsg: ''
      }
    },
    computed: {
      user() {
        return store.state.user
      },
      logined() {
        return this.user.id
      }
    },
    methods: {
      signUp() {
        this.signUpDialogVisible = false;
        let {username,password} = this.formData;
        let user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.signUp().then(()=>{
          this.success()
          store.commit('setUser', user)
        },(error)=> {
          this.errorMsg=getErrorMessage(error);
          this.fail(this.errorMsg)
        });

      },
      logIn(user) {
        this.logInDialogVisible=false;
        let {username,password} = this.formData;
        AV.User.logIn(username,password).then(()=>{
          store.commit('setUser', user)
        },(error)=> {
          this.errorMsg=getErrorMessage(error);
          this.fail(this.errorMsg)
        });

      },
      logOut() {
        AV.User.logOut();
        store.commit('removeUser')
      },
      success() {
        this.$notify({
          title: '成功',
          message: '注册成功:)',
          type: 'success'
        });
      },
      fail(msg) {
        this.$notify({
          title: '失败',
          message: `${msg}:(`,
          type: 'warning'
        });
      },
      preview(){
        this.$store.state.topBarShow=false;
        this.$store.state.editorShow=false;
        this.$store.state.exitBtnShow=true;
      }
    }
  }
</script>

<style scoped lang="scss">
  #topbar {
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  }

  #topbar > .wrapper {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }

  .logo {
    font-size: 24px;
    color: #000;
  }

  .actions {
    display: flex;
    .userActions {
      margin-right: 3em;
    }
  }
</style>
