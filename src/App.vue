<script setup>
  import ContentComponent from './components/Content/Content.component.vue'
</script>

<template>
  <div class='app-container flex flex-col min-h-screen h-px'>
    <ContentComponent />
  </div>
</template>

<style lang='sass'>
  body
    font:
      family: 'Lato', sans-serif
    background:
      color: theme('colors.gray.50')

  .view
    min-height: 100%

    > .view-container
      min-height: 100%
</style>
