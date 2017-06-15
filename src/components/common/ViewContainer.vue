<template>
  <div :id="id" class="view-item" :style="{left:defaultAttr.x +'px',top:defaultAttr.y+'px',width:defaultAttr.w+'px',height:defaultAttr.h+'px',zIndex:defaultAttr.zIndex}">
    <slot></slot>
  </div>
</template>

<style>
  .view-item {
    position: absolute;
    border: 1px solid blue
  }
</style>

<script>
  import { defaultsDeep } from 'lodash'

  export default {
    name: 'ViewContainer',
    props: {
      id: {
        type: String
      },
      attr: Object
    },
    data () {
      return {
        defaultAttr: {
          x: 20,
          y: 80,
          w: 600,
          h: 300,
          zIndex: 0
        }
      }
    },
    watch: {
      attr (val) {
        this.mergeAttr()
      }
    },
    mounted () {
      this.mergeAttr()
    },
    methods: {
      mergeAttr () {
        this.defaultAttr = defaultsDeep(this.attr || {}, this.defaultAttr)
      }
    }
  }

</script>
