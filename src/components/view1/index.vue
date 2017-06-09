<template>
  <view-container class="view1" :attr="attr">
  </view-container>
</template>

<script>
  export default {
    name: 'View1',
    data () {
      return {
        attr: {
          x: 500,
          y: 400,
          w: 400,
          h: 300
        }
      }
    }
  }
</script>

<style scoped>
  .view1 {
    border: 3px solid cyan;
  }
</style>
