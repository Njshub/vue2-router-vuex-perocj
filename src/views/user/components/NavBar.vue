<!-- src/components/NavBar.vue -->

<template>
  <el-header height="60px" class="nav-bar">
    <div class="nav-left">
      <img src="path/to/your/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="nav-right">
      <el-avatar :src="user.avatar" class="avatar"></el-avatar>
      <span class="user-name">{{ user.name }}</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-setting"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleCommand('settings')">Settings</el-dropdown-item>
          <el-dropdown-item @click.native="handleCommand('logout')">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        avatar: 'path/to/your/avatar.jpg',
      },
    };
  },
  methods: {
    handleCommand(command) {
      if (command === 'settings') {
        this.$router.push('/settings');
      } else if (command === 'logout') {
        this.$router.push('/logout');
      }
    },
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #409eff;
}
.logo {
  height: 40px;
}
.avatar {
  margin-right: 10px;
}
.user-name {
  margin-right: 20px;
  color: white;
}
</style>
