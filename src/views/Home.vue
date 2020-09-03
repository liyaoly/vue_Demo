<template>
  <div class="home">
    <Nav></Nav>
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
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
