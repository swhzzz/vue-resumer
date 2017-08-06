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
        <div v-for="subItem in item">
          <label>{{subItem.key}}</label>
          <input type="text" :value="subItem.value">
        </div>
      </li>
      <!--<li v-show="currentTab===0">-->
        <!--<div v-for="(item,key) in profile">-->
          <!--<label>{{key}}</label>-->
          <!--<input type="text" :value="profile[key]">-->
        <!--</div>-->
      <!--</li>-->
      <!--<li v-show="currentTab===1">-->
        <!--<div v-for="item in company">-->
          <!--<label>{{item.key}}</label>-->
          <!--<input type="text" :value="item.value">-->
        <!--</div>-->
        <!--<hr>-->
      <!--</li>-->
      <!--<li v-show="currentTab===2">-->
        <!--<div v-for="item in school">-->
          <!--<label>{{item.key}}</label>-->
          <!--<input type="text" :value="item.value">-->
        <!--</div>-->
        <!--<hr>-->
      <!--</li>-->
      <!--<li v-show="currentTab===3">-->
        <!--<div v-for="item in projects">-->
          <!--<label>{{item.key}}</label>-->
          <!--<input type="text" :value="item.value">-->
        <!--</div>-->
        <!--<hr>-->
      <!--</li>-->
      <!--<li v-show="currentTab===4">-->
        <!--<div v-for="item in awards">-->
          <!--<label>{{item.key}}</label>-->
          <!--<input type="text" :value="item.value">-->
        <!--</div>-->
        <!--<hr>-->
      <!--</li>-->
      <!--<li v-show="currentTab===5">-->
        <!--<div v-for="item in contacts">-->
          <!--<label>{{item.key}}</label>-->
          <!--<input type="text" :value="item.value">-->
        <!--</div>-->
      <!--</li>-->
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    data: function () {
      return {
        currentTab: 'profile',
        svgIds:['id','work','book','heart','cup','phone'],
        resume: {
          config: [
            'profile','company','school','projects','awards','contacts'
          ],
          profile: [
            {key: 'name', value: 'swh'},
            {key: 'birth', value: '1994-7-27'},
            {key: 'gender', value: '男'},
            {key: 'city', value: '杭州'}
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
      li {
        padding: 24px;
        div{
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
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.25)
          }
        }
        hr {
          margin-top: 24px;
        }
      }
    }
  }


</style>

