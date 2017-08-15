<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: currentTab === item}" @click="currentTab=item">
          <svg class="icon" :class="{active: currentTab === item}">
            <use :xlink:href="`#icon-${svgIds[index]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="(item,index) in resume" v-show="currentTab===index">
        <div v-if="item instanceof  Array">
          <div v-for="(subItem,i) in item">
            <div v-for="(value,key) in subItem">
              <label>{{key}}</label>
              <input type="text" :value="value" @input="changeResume(`${currentTab}.${i}.${key}`,$event.target.value)">
            </div>
            <hr>
          </div>
          <el-button @click="add()" type="primary">add</el-button>
        </div>
        <div v-else>
          <div v-for="(value,key) in item">
            <label>{{key}}</label>
            <input type="text" :value="value" @input="changeResume(`${currentTab}.${key}`,$event.target.value)">
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  import store from '../store/index'
  import {mapState} from 'vuex'
  export default {
    name: 'ResumeEditor',
    computed: {
      ...mapState(['resume', 'svgIds']),
      currentTab: {
        get(){
          return store.state.currentTab
        },
        set(value){
          store.commit('switchTab', value)
        }
      }
    },
    methods: {
      add(){
        let type = this.currentTab,
          tabObj = this.resume[type][0],//获取company,school里面的对象
          keys = Object.keys(tabObj);
        let obj = {};
        obj[keys[0]] = '';
        obj[keys[1]] = '';
        this.resume[type].push(obj)
      },
      changeResume(path,value){
        store.commit('updateResume',{path,value})
      }
    }
  }

</script>

<style lang="scss">
  #resumeEditor {
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    ol {
      list-style: none;
    }
    > nav {
      background-color: #000;
      width: 80px;
      ol {
        > li {
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          cursor: pointer;
          margin-top: 16px;
          margin-bottom: 16px;
          .icon {
            width: 24px;
            height: 24px;
            fill: #fff;
            &.active {
              fill: #000;
            }
          }
          &.active {
            background-color: #fff;
          }
        }
      }
    }
    .panels {
      flex: 1;
      overflow: auto;
      li {
        padding: 24px;
        div {
          margin-bottom: 16px;
          label {
            display: block;
            margin-bottom: 16px;
          }
          input[type="text"] {
            height: 40px;
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.25)
          }
        }
        hr {
          border-color: #eee;
          margin-top: 24px;
        }
      }
    }
  }


</style>

