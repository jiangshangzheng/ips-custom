<template>
  <view-container class="view2" :attr="attr">
  </view-container>
</template>

<script>
  export default {
    name: 'view2',
    data () {
      return {
        attr: {
          x: 500,
          y: 400,
          w: 600,
          h: 200
        }
      }
    }
  }
</script>

<style scoped>
  .view2 {
    border: 3px solid cyan;
  }
</style>
