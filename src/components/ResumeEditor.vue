<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" @click="currentTab=i">
          x
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}">
        tab{{i+1}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    data: function () {
      return {
        currentTab: 0
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
          &.active {
            background-color: #fff;
            color: #000;
          }
        }
      }
    }
    .panels {
      li {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }


</style>

