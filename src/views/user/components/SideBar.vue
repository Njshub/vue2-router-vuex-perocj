<!-- src/components/SideBar.vue -->

<template>
<!-- 侧边栏 -->
  <el-aside width="200px" class="side-bar">
    <!-- 父标签 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">Documentation</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">Settings</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === '1') {
        this.$router.push('/');
      } else if (key === '2') {
        this.$router.push('/documentation');
      } else if (key === '3') {
        this.$router.push('/settings');
      }
    },
  },
};
</script>

<style scoped>
.side-bar {
  background-color: #f5f7fa;
}
.el-aside{
    height: 94vh;
}
</style>
