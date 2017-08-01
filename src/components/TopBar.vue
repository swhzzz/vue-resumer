<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="action-button">
        <el-button class="btn" type="primary">保存</el-button>
        <el-button class="btn" type="primary">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style>
#topbar {
  background-color: #fff;
  box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
}
#topbar>.wrapper {
  min-width: 1024px;
  max-width: 1440px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}
.logo {
  font-size: 24px;
  color: #000;
}
.btn {
  /*padding: 8px 16px;*/
}

</style>
