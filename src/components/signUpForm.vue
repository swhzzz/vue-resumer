<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <label>用户名
          <input type="text" v-model="formData.username" required>
          <!--required表示提交表单时input不能为空，必须有值-->
        </label>
      </div>
      <div class="row">
        <label>密&nbsp;&nbsp;&nbsp;码
          <input type="password" v-model="formData.password" required>
        </label>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default {
    name: 'signUpForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signUp(){
        let {username, password} = this.formData;
        let user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.signUp().then(() => {
          this.$emit('success',getAVUser())
        }, (error) => {
          console.log(error);
          this.errorMessage = getErrorMessage(error)
        })
      }
    }
  }
</script>
