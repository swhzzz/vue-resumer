<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>  
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'



export default {
  name: 'app',
  data: function(){
    return {
      text: '你好'
    }
  },
  components: {Topbar, ResumeEditor, ResumePreview}
}
</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;


    
  }
</style>