<template>
  <div>
      <h1>
          分类页面
      </h1>
      <div>id值为{{id}}</div>
      <div>
          vuex的值
          <span>{{this.$store.state.count}}</span>
          <button @click="handler">
              加加
          </button>
      </div>
  </div>
</template>

<script>
export default {
   name: 'Cart',
   props: ['id'],
   data() {
       return {

       }
   },
   created() {
        console.log(this.$store.state.count)
   },
   methods: {
        handler() {
            //  方法名加参数
           this.$store.commit('changCount', 1),
           this.$store.dispatch('deleyChangCount',10 )
        }
   }
}
</script>

<style>

</style>