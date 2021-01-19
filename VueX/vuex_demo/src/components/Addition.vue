<template>
  <div>
    <div>addition组件</div>
    <!-- 显示state中的数据第一种写法 -->
    <div>{{$store.state.count}}</div>
    <button @click="addBtn">+1</button>
    <button @click="asyncAddBtn">一秒后+1</button>
    <!-- 显示getters数据的第一种写法 -->
    <div>{{$store.getters.showNum}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addBtn() {
      // 使用mutation中的函数第一种方法
      this.$store.commit("add", 1);
    },
    asyncAddBtn() {
      // 使用action中的函数第一种方法
      this.$store.dispatch('asyncAdd', 1)
    }
  },
};
</script>

<style scoped>
</style>