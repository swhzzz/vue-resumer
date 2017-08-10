import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    currentTab: 'profile',
    svgIds: ['id', 'work', 'book', 'heart', 'cup', 'phone'],
    resume: {
      config: [
        'profile', 'company', 'school', 'projects', 'awards', 'contacts'
      ],
      profile: {'name': 'swh', 'birth': '1994-7-27', 'city': '杭州'}
      ,
      company: [
        {'company': '1+1', 'content': '=2'},
        {'company': 'fdaf', 'content': 'fda3fd'}
      ],
      school: [
        {'school': 'xixihahh', 'content': '1234'}
      ],
      projects: [
        {name: '在线简历编辑器', 'content': '项目介绍'}
      ],
      awards: [
        {'name': 'xxx', 'content': 'abcd'}
      ],
      contacts: [
        {'contact': 'phone', 'content': '15757821491'},
        {'contact': 'qq', 'content': '443878051'}
      ]
    }
  },
  mutations: {
    switchTab(state, value){
      state.currentTab = value
    }
  }
});

export default store
