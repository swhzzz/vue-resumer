<template>
  <div id="resumePreview">
    {{resume}}
  </div>
</template>

<script>
  import store from '../store/index'
  export default {
    name: 'ResumePreview',
//    store,
    computed:{
        resume(){
          return store.state.resume
        }
    }
  }
</script>

<style>
  #resumePreview {
    color: blue;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  }
</style>

