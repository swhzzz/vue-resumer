<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <label>用户名
          <input type="text" v-model="formData.username">
        </label>
      </div>
      <div class="row">
        <label>密&nbsp;&nbsp;&nbsp;码
          <input type="password" v-model="formData.password">
        </label>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
      </div>
    </form>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'
  export default {
    name: 'signUpForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        }
      }
    },
    methods :{
        signUp(){
          let {username,password} = this.formData;
          let user=new AV.User();
          user.setUsername(username);
          user.setPassword(password);
          user.signUp().then(function(loginedUser){
            console.log(loginedUser)
          },function(error){
              console.log(error)
          })
        }
    }
  }
</script>
