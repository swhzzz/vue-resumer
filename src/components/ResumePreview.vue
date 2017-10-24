<template>
  <div id="resumePreview">
    <section data-name="profile" v-show="resume.profile">
      <h2>Basic Info. 基本信息</h2>
      <h4>姓名： {{resume.profile.name}}</h4>
      <h4>出生年月： {{resume.profile.birth}}</h4>
      <h4>应聘职位： {{resume.profile.title}}</h4>
      <h4>意向城市： {{resume.profile.city}}</h4>
    </section>
    <section data-name="school" v-show="resume.education[0].school !== ''">
      <h2>School. 毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h4>{{item.school}}
            <span v-show="item.content"> - {{item.content}}</span>
          </h4>
        </li>
      </ol>
    </section>
    <section data-name="workHistory" v-show="resume.workHistory[0].company !== ''">
      <h2>Experience. 工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h4>{{item.company}}</h4>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="projects" v-show="resume.projects[0].name !== ''">
      <h2>Project. 项目作品</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h4>{{item.name}}</h4>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-show="resume.awards[0].name !== ''">
      <h2>Awards. 获奖经历</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h4>{{item.name}}</h4>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="contacts" v-show="resume.contacts[0].name !== ''">
      <h2>Contacts. 联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item.contact}}</td>：
          <td v-show="item.content">{{item.content}}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'ResumePreview',
    computed: {
      ...mapState(['resume'])
    }
  }
</script>

<style lang="scss">
  #resumePreview {
    padding: 2em;
    line-height: 1.2;
    color: #333;
    overflow: auto;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    * {
      box-sizing: border-box;
      font-weight: normal;
    }
    section + section {
      margin-top: 1em;
    }
    ol {
      list-style: none;
    }
    p {
      white-space: pre-line;
    }
    section {
      > h2 {
        color: rgb(93,150,227);
      }
      h4 {
        margin-top: .5em;
      }
    }

    .exit {
      position: fixed;
      top: 32px;
      right: 16px;
    }
    .exitPreviewBtnFade-enter,
    .exitPreviewBtnFade-leave-to {
      opacity: 0;
      transform: translateY(-50px);
    }
    .exitPreviewBtnFade-enter-active,
    .exitPreviewBtnFade-leave-active {
      transition: all 1s;
    }
  }
</style>

