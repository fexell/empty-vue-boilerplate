<script setup>
  import ContentComponent from './components/Content/Content.component.vue'
</script>

<template>
  <div class='app-container'>
    <ContentComponent />
  </div>
</template>

<style lang='sass'>
  body
    font:
      family: 'Lato', sans-serif
    background:
      color: theme('colors.gray.50')
</style>
