<!--视图模板-->
<template>
  <div class="view-item" :style="{left:left+'px',top:top+'px',width:width+'px',height:height+'px'}">
    {{viewId}}
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ViewTemplate',
    props: {
      viewId: String,
      left: {
        type: Number,
        default: 0
      },
      top: {
        type: Number,
        default: 0
      },
      width: {
        default: 600,
        type: Number,
        validator (val) {
          return val > 0
        }
      },
      height: {
        default: 400,
        type: Number,
        validator (val) {
          return val > 0
        }
      }
    }
  }
</script>

<style>
  .view-item {
    position: absolute;
    border: 1px solid cadetblue;
  }
</style>
