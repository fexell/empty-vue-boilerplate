<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <div id='Content' class='content component flex flex-col min-h-full p-4'>
    <div class='content-container component-container flex flex-col min-h-full'>
      <RouterView />
    </div>
  </div>
</template>

<style lang='sass' scoped>

</style>