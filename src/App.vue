<template>
  <div class='page'>
    <header>
      <transition name="slide-top">
        <Topbar v-if="topBarShow"></Topbar>
      </transition>
    </header>
    <main>
      <transition name="slide-left">
        <ResumeEditor v-if="editorShow"></ResumeEditor>
      </transition>
      <transition name="slide-right">
        <ResumePreview v-if="previewShow"></ResumePreview>
      </transition>
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
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  import store from './store/index'
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'app',
    store,
    data() {
      return {
        topBarShow: false,
        previewShow: false,
        editorShow: false
      }
    },
    components: {
      Topbar,
      ResumeEditor,
      ResumePreview
    },
    created: function () {
      setTimeout(() => {
        this.topBarShow = true;
          this.editorShow = true;
          this.previewShow = true
      }, 1);
      document.body.insertAdjacentHTML('afterbegin', icons);//插入icons，放在body标签的首部
      let state = localStorage.getItem('state');//获取数据
      if (state) {
        state = JSON.parse(state)
      }
      store.commit('initState', state);
      store.commit('setUser', getAVUser())
    }
  }
</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    header {
      height: 64px;
    }
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

  .slide-top-enter,
  .slide-top-leave-to {
    opacity: 0;
    transform: translateY(-64px);
  }

  .slide-top-enter-active {
    transition: all 1s 1s;
  }

  /*.slide-top-leave-active {*/
    /*transition: all 1.5s;*/
  /*}*/
  .slide-left-enter ,
  .slide-left-leave-to{
    opacity: 0;
    transform:translateX(-20%);
  }
  .slide-left-enter-active
  {
    transition: all 1s;
  }

  .slide-right-enter ,
  .slide-right-leave-to{
    opacity: 0;
    transform:translateX(20%);
  }
  .slide-right-enter-active {
     transition: all 1s .5s;
   }
</style>
