<template>
  <div id="app">
    <nav class="navbar">
      <span class="navbar-item" v-for="(item,index) in viewList" :key="index" @click="updateAttr(item.attr)">
        <router-link :to="item.key">{{item.key}}</router-link>
      </span>
    </nav>
    <view-container :attr="attr">
      <router-view></router-view>
    </view-container>
  </div>
</template>

<script>
  import components from '../index.js'
  export default {
    name: 'app',
    data () {
      return {
        viewList: [],
        attr: {
          x: 100
        }
      }
    },
    mounted () {
      let list = []
      for (let key in components) {
        list.push({ key: key, attr: components[key].attr })
      }
      let self = this
      self.viewList = list

      this.$router.beforeEach((to, from, next) => {
        setTimeout(next, 200)
      })
    },
    methods: {
      updateAttr (attr) {
        this.attr = attr
      }
    }
  }
</script>

<style>
  body {
    background: #06081F;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  
  .navbar {
    position: absolute;
    display: flex;
    margin: 10px 20px;
    flex-wrap: wrap;
  }
  
  .navbar-item {
    padding: 5px 10px;
    margin: 5px;
    background: #00ffff;
    cursor: pointer;
    text-decoration-line: none;
    border-radius: 5px;
  }
  
  .navbar-item a {
    text-decoration-line: none;
  }
</style>
