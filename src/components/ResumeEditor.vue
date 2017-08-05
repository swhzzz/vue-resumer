<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" :class="{active: currentTab === i}" @click="currentTab=i">
          <svg class="icon" :class="{active: currentTab === i}">
            <use :xlink:href="`#icon-${svgIds[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-show="currentTab===0">
        <div v-for="item in profile">
          <label>{{item.key}}</label>
          <input type="text" v-model="item.value">
        </div>
      </li>
      <li v-show="currentTab===1">
        <div v-for="item in company">
          <label>{{item.key}}</label>
          <input type="text" v-model="item.value">
        </div>
        <hr>
      </li>
      <li v-show="currentTab===2">
        <div v-for="item in school">
          <label>{{item.key}}</label>
          <input type="text" v-model="item.value">
        </div>
        <hr>
      </li>
      <li v-show="currentTab===3">
        <div v-for="item in projects">
          <label>{{item.key}}</label>
          <input type="text" v-model="item.value">
        </div>
        <hr>
      </li>
      <li v-show="currentTab===4">
        <div v-for="item in awards">
          <label>{{item.key}}</label>
          <input type="text" v-model="item.value">
        </div>
        <hr>
      </li>
      <li v-show="currentTab===5">
        <div v-for="item in contacts">
          <label>{{item.key}}</label>
          <input type="text" v-model="item.value">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    data: function () {
      return {
        currentTab: 0,
        svgIds:['id','work','book','heart','cup','phone'],
        profile: [
          {key: 'name', value: 'swh'},
          {key: 'birth', value: '1994-7-27'},
          {key: 'gender', value: '男'},
          {key: 'city', value: '杭州'},
        ],
        company: [
          {key: 'company', value: '1+1'},
          {key: 'content', value: '=2'}
        ],
        school: [
          {key: 'school', value: '嘻嘻哈哈'},
          {key: 'content', value: '1234'}
        ],
        projects: [
          {key: 'name', value: '在线简历编辑器'},
          {key: 'content', value: '项目介绍'}
        ],
        awards: [
          {key: 'name', value: 'xxx'},
          {key: 'content', value: 'abcd'}
        ],
        contacts: [
          {key: 'contact', value: '电话'},
          {key: 'content', value: '123321456654'}
        ]
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
      li {
        padding: 24px 24px;
        div{
          margin-bottom: 16px;
          label {
            display: block;
            margin-bottom: 16px;
          }
          input[type="text"] {
            padding: 8px;
          }
        }
      }
    }
  }


</style>

