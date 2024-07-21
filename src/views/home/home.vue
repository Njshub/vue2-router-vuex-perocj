<template>
  <div class="app-home">
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link  to="User">个人中心</router-link>|
    <router-link :to="{name: 'Cart',params: {id: 25} }">分类</router-link>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
};
</script>

<style lang="less" scoped>
.app-home {
  width: 100%;
  height: 40px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  .router-link-active {
    margin: 10px 10px;
  }
}
</style>
