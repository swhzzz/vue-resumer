<template>
  <div>
    <form @submit.prevent="signUp">
      {{visible}}
      <el-dialog
        title="提示"
        :visible.sync="visible"
        size="tiny">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
      </el-dialog>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default {
    name: 'signUpForm',
    props: ['visible'],
    data() {
      return {
        formData: {
          username: '11',
          password: ''
        },
        errorMessage: '',
      }
    },
    methods: {
      signUp() {
        let {username, password} = this.formData;
        let user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.signUp().then(() => {
          this.$emit('success', getAVUser())
        }, (error) => {
          console.log(error);
          this.errorMessage = getErrorMessage(error)
        })
      }
    }
  }
</script>

<style scoped>
  .row {
    margin-bottom: 16px;
  }
</style>
