<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <div id='Content' class='content component flex flex-col min-h-full h-full'>
    <div class='content-container component-container flex flex-col min-h-full'>
      <RouterView />
    </div>
  </div>
</template>

<style lang='sass' scoped>

</style>