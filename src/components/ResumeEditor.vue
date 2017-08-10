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
          <div v-for="subItem in item">
            <div v-for="(value,key) in subItem">
              <label>{{key}}</label>
              <input type="text" :value="value">
            </div>
            <hr>
          </div>
          <el-button @click="add()" type="primary">增加</el-button>
        </div>
        <div v-else>
          <div v-for="(value,key) in item">
            <label>{{key}}</label>
            <input type="text" :value="value">
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
//    data: function () {
//      return {
////        currentTab: 'profile',
////        svgIds: ['id', 'work', 'book', 'heart', 'cup', 'phone'],
////        resume: {
////          config: [
////            'profile', 'company', 'school', 'projects', 'awards', 'contacts'
////          ],
////          profile: {'name': 'swh', 'birth': '1994-7-27', 'city': '杭州'}
////          ,
////          company: [
////            {'company': '1+1', 'content': '=2'},
////            {'company': 'fdaf', 'content': 'fda3fd'}
////          ],
////          school: [
////            {'school': 'xixihahh', 'content': '1234'}
////          ],
////          projects: [
////            {name: '在线简历编辑器', 'content': '项目介绍'}
////          ],
////          awards: [
////            {'name': 'xxx', 'content': 'abcd'}
////          ],
////          contacts: [
////            {'contact': 'phone', 'content': '15757821491'},
////            {'contact': 'qq', 'content': '443878051'}
////          ]
//        }
//      }
//    },
    computed: {
      ...mapState(['resume', 'svgIds', 'config']),
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
        obj[keys[0]] = ''
        obj[keys[1]] = ''
        this.resume[type].push(obj)
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

