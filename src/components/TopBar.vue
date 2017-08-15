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
          <el-button class="btn" @click.prevent="signUpDialogVisible=true">SignUp</el-button>
          <MyDialog title="注册" @close="signUpDialogVisible=false" :visible="signUpDialogVisible">
            <signUpForm @success="signIn($event)"></signUpForm>
          </MyDialog>
          <el-button>Login</el-button>
        </div>
        <el-button class="btn" type="primary">Save</el-button>
        <el-button class="btn" type="primary">Preview</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import MyDialog from './dialog'
  import signUpForm from './signUpForm'
  import store from '../store/index'
  import AV from '../lib/leancloud'
  export default {
    name: 'Topbar',
    components: {
      MyDialog,
      signUpForm
    },
    data(){
      return {
        signUpDialogVisible: false,
        id: store.state.user.id
      }
    },
    computed: {
      user(){
        return store.state.user
      },
      logined(){
          return this.user.id
      }
    },
    methods: {
      signIn(user){
        this.signUpDialogVisible = false;
        store.commit('setUser', user)
      },
      logOut(){
        AV.User.logOut();
        store.commit('removeUser')
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
