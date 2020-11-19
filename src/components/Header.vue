<template>
  <el-header type="primary">
      <router-link to="/">Home</router-link> |
  </el-header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.el-header {
  background-color: $primary-text;
}
</style>
