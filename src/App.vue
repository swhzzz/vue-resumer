<template>
  <div class='page'>
    <header>
      <Topbar></Topbar>
    </header>
    <main>
      <ResumeEditor></ResumeEditor>
      <ResumePreview></ResumePreview>
    </main>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'

  import store from './store/index'
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'app',
    store,
//    computed: {
//    },
//    methods: {
//    },
    components: {
      Topbar,
      ResumeEditor,
      ResumePreview
    },
    created: function () {
      document.body.insertAdjacentHTML('afterbegin', icons)//插入一段HTML，放在body标签的首部
    }
  }
</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    > main {
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      flex: 1;
      width: 100%;
      justify-content: space-between;
      align-self: center;
      padding: 0 16px;
    }
  }

  #resumeEditor {
    width: 35%;
    background: #444;
  }

  #resumePreview {
    width: 61.66667%;
    background: #777;
    flex: 1;
    margin-left: 16px;
  }
</style>
