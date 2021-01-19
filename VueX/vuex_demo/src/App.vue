<template>
  <div>
    <addition></addition>
    <hr>
    <subtraction></subtraction>
  </div>
</template>

<script>
import addition from "./components/Addition";
import subtraction from "./components/Subtraction";
export default {
  components: {
    subtraction,
    addition,
  },
};
</script>

<style scoped>
</style>