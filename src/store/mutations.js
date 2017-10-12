import objectPath from 'object-path'

const mutations = {
  initState(state, payload) {
    Object.assign(state, payload)
  },
  switchTab(state, value) {
    state.currentTab = value;
    localStorage.setItem('state', JSON.stringify(state))
  },
  changeResume(state,{type,obj}){
    state.resume[type].push(obj)
  },
  updateResume(state, {path, value}) {
    objectPath.set(state.resume, path, value);
    localStorage.setItem('state', JSON.stringify(state))
  },
  deleteItem(state, index) {
    state.resume[state.currentTab].splice(index, 1)
    localStorage.setItem('state', JSON.stringify(state))
  },
  setUser(state, payload) {
    Object.assign(state.user, payload);
  },
  removeUser(state) {
    state.user.id = '';
  },
  preview(state) {
    state.topBarShow = false;
    state.editorShow = false;
    state.exitBtnShow = true;
  },
  exitPreview(state) {
    state.exitBtnShow = false;
    state.topBarShow = true;
    state.editorShow = true;
  },
  initShow(state) {
    state.topBarShow = false;
    state.editorShow = false;
    state.previewShow = false;
  },
  showAll(state) {
    state.topBarShow = true;
    state.editorShow = true;
    state.previewShow = true;
  }
}

export default mutations
