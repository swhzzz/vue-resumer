<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <a href="#" @click.prevent="signUpDialogVisible=true">注册</a>
        <MyDialog title="注册" v-on:close="signUpDialogVisible=false" :visible="signUpDialogVisible">
          <signUpForm></signUpForm>
        </MyDialog>
        <el-button>登录</el-button>
        <el-button class="btn" type="primary">保存</el-button>
        <el-button class="btn" type="primary">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import MyDialog from './dialog'
  import signUpForm from './signUpForm'
  export default {
    name: 'Topbar',
    data(){
      return {
        signUpDialogVisible: false
      }
    },
    components: {
        MyDialog,
        signUpForm
    }
  }
</script>

<style>
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

</style>
