<template>
  <div>
    <div>subtraction组件</div>
    <!-- 显示state中的数据第二种写法 -->
    <div>{{count}}</div>
    <button @click="subBtn">-</button>
    <button @click="asyncSubBtn">一秒后-1</button>
    <!-- 显示getters数据的第二种写法 -->
    <div>{{showNum}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["sub"]),
    ...mapActions(["asyncSub"]),
    subBtn() {
      // 使用mutation中的函数第二种方法
      this.sub(1);
    },
    // 使用action中的函数第二种方法
    asyncSubBtn() {
      this.asyncSub(1);
    },
  },
  computed: {
    // 显示state中的数据第二种写法
    ...mapState(["count"]),
    ...mapGetters(["showNum"]),
  },
};
</script>

<style scoped>
</style>