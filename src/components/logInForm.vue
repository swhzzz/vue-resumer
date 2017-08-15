<template>
  <div>
    <form @submit.prevent="login">
      <div class="row">
        <label>用户名
          <input required v-model="formData.username">
        </label>
      </div>
      <div class="row">
        <label>密&nbsp;&nbsp;&nbsp;码
          <input type="password" required v-model="formData.password">
        </label>
      </div>
      <button>登录</button>
      <span>{{errorMessage}}</span>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getAVUser from '../lib/getAVUser'
  import getErrorMessage from '../lib/getErrorMessage'

  export default {
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      login() {
        let {username, password} = this.formData;
        AV.User.logIn(username,password).then(()=> {
          this.$emit('success',getAVUser())
        },(error)=> {
          this.errorMessage= getErrorMessage(error)
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
