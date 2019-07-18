<template>
  <div class="hello">
    <p>scss variables test</p>
  </div>
</template>

<script>
// import {map, iterator} from '@/utils/generator'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    dd
    // const a = map(100)
    // console.log('a', a)
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  background-color: $color;
}
</style>
