<script setup lang="ts">
import Header from './views/Header.vue';
</script>
<template>
  <div class="page">
    <Header></Header>
    <RouterView class="space"></RouterView>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: row;

  .space {
    flex: 1;
    padding-top: 64px;
  }
}
</style>
