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
          <div class="item-wrap" v-for="(subItem,i) in item">
            <div v-for="(value,key,index) in subItem">
              <label>{{key}}</label>
              <el-input type="text" :value="value"
                        @input="changeResume(`${currentTab}.${i}.${key}`,$event)"></el-input>
            </div>
            <i class="del-btn el-icon-circle-cross" v-if="item.length>1" @click="handleDelete(i)"></i>
            <hr>
          </div>
          <el-button @click="add()" type="primary">新增</el-button>
        </div>
        <div v-else>
          <div v-for="(value,key) in item">
            <label>{{key}}</label>
            <el-input type="text" :value="value" @input="changeResume(`${currentTab}.${key}`,$event)"></el-input>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'ResumeEditor',
    computed: {
      ...mapState(['resume', 'svgIds']),
      currentTab: {
        get () {
          return this.$store.state.currentTab
        },
        set (value) {
          this.$store.commit('switchTab', value)
        }
      }
    },
    methods: {
      add() {
        let type = this.currentTab,
          tabObj = this.resume[type][0], // 拷贝一份，然后清空，push进state
          keys = Object.keys(tabObj);
        let obj = {};
        keys.map((item) => {
          obj[item] = ''
        })
        this.$store.commit('changeResume', {type, obj})
      },
      handleDelete(index) {
        this.$store.commit('deleteItem', index)
      },
      changeResume(path, value) {
        this.$store.commit('updateResume', {path, value})
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
    .item-wrap {
      position: relative;
      .del-btn {
        position: absolute;
        top: 0;
        right: 0;
        &:hover {
          cursor: pointer;
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
          /*input[type="text"] {*/
            /*height: 40px;*/
            /*width: 100%;*/
            /*padding: 8px;*/
            /*border: 1px solid #ddd;*/
            /*box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.25)*/
          /*}*/
        }
        hr {
          border-color: #eee;
          margin-top: 24px;
        }
      }
    }
  }

</style>

