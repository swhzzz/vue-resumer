<template>
  <div class="wrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
        <span class="close" @click="close">x</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialog',
    props: ['title', 'visible'],
    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog {
      min-height: 4em;
      min-width: 10em;
      padding: 16px;
      background-color: #fff;
      > header {
        padding: 16px;
        display: flex;
        justify-content: space-between;
      }
      > main {
        padding: 16px;
      }
    }
  }
</style>
