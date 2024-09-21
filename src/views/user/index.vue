<template>
  <div class="userr-app">
    <NavBar />
    <SideBar></SideBar>
  </div>
</template>

<script>
import NavBar from "@/views/user/components/NavBar.vue";
import SideBar from "@/views/user/components/SideBar.vue";
export default {
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
