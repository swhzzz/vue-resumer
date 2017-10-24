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
      <ResumePreview v-if="previewShow" :class="[exitBtnShow ? 'posCls': '']"></ResumePreview>
    </main>
    <el-button v-if="previewShow" @click="togglePreviewShow" class="btn previewBtn" type="primary"
               v-html="btnText"></el-button>
  </div>
</template>

<script>
  import './assets/reset.css'
  import 'normalize.css/normalize.css'

  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  import {mapState} from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapState(['topBarShow', 'editorShow', 'previewShow', 'exitBtnShow']),
      btnText() {
        return this.exitBtnShow ? '退出预览' : '预览'
      }
    },
    components: {
      Topbar,
      ResumeEditor,
      ResumePreview
    },
    created: function () {
      document.body.insertAdjacentHTML('afterbegin', icons);//插入icons，放在body标签的首部
      let state = localStorage.getItem('state');//获取数据
      if (state) {
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state);
      this.$store.commit('setUser', getAVUser())
      this.$store.commit('initShow')
      setTimeout(() => {
        this.$store.commit('showAll')
      }, 1);
    },
    methods: {
      togglePreviewShow() {
        if (!this.exitBtnShow) {
          this.$store.commit('preview')
        } else {
          this.$store.commit('exitPreview')
        }
      }
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
    flex: 1;
    background: #777;
    margin-left: 16px;
  }

  .previewBtn {
    position: fixed;
    top: 14px;
    right: 16px;
  }

  .posCls {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 61.667%;
    height: 94vh;
    transform: translate(-50%, -50%);
  }

  .slide-top-enter,
  .slide-top-leave-to {
    opacity: 0;
    transform: translateY(-64px);
  }

  .slide-top-enter-active, .slide-top-leave-active {
    transition: all 1s;
  }

  .slide-left-enter,
  .slide-left-leave-to {
    opacity: 0;
    transform: translateX(-20%);
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all 1s;
  }
</style>
