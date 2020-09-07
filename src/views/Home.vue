<template>
  <div class="home">
    <Nav v-if="showFlag" :NavActiveIndex="activeIndex" @formnav="formnavFn"></Nav>
    <div v-else>{{ activeIndex2 }}</div>
    <div>menu</div>
    <router-view />
  </div>
</template>

<script>
import Nav from './nav.vue'
export default {
  components: {
    Nav
  },
  data () {
    return {
      activeIndex: '/home/buycar',
      activeIndex2: '1',
      showFlag: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    formnavFn (val) {
      console.log(val)
      this.activeIndex2 = val
      this.showFlag = false
    }
  }
}
</script>
