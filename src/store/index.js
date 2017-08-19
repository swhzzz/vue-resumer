import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    topBarShow: false,
    previewShow: false,
    editorShow: false,
    exitBtnShow: false,
    currentTab: 'profile',
    svgIds: ['id', 'work', 'book', 'heart', 'cup', 'phone'],
    user: {
      username: '',
      id: ''
    },
    resume: {
      config: [
        'profile', 'workHistory', 'education', 'projects', 'awards', 'contacts'
      ],
      profile: {'name': '沈文豪', 'title': '前端工程师', 'city': '杭州', 'birth': '1994-7-27'}
      ,
      workHistory: [
        {'company': '1+1', 'content': '=2'},
        {'company': 'fdaf', 'content': 'fda3fd'}
      ],
      education: [
        {'school': '加里敦大学', 'content': '1234'}
      ],
      projects: [
        {'name': '项目名称', 'content': '项目介绍'}
      ],
      awards: [
        {'name': '获奖名称', 'content': '连续N次谢谢惠顾'}
      ],
      contacts: [
        {'contact': 'phone', 'content': '15712234567'},
        {'contact': 'qq', 'content': '443878051'}
      ]
    }
  },
  mutations: {
    initState(state, payload) {
      Object.assign(state, payload)
    },
    switchTab(state, value) {
      state.currentTab = value;
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}) {
      objectPath.set(state.resume, path, value);
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload) {
      Object.assign(state.user, payload);
      console.log(state.user)
    },
    removeUser(state) {
      state.user.id = '';
      console.log('remove')
    },
    exitPreview(state) {
      state.exitBtnShow = false;
      state.topBarShow = true;
      state.editorShow = true;
    }
  }
});

export default store
