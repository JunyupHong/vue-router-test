<template lang="pug">
  .window(@click="test(a, b)")
</template>

<script>
/* eslint-disable */

export default {
  name: 'test2',
  data() {
    return {
      a: 1,
      b: 10
    };
  },
  methods: {
    test(a, b) {
      a = b;
      a = 100;
      console.log(`a: ${a}, b: ${b}`);
      a = 10;
      b = 10;
      console.log( a === b );

      a = 100;
      a = b;
      console.log( a === b );


    }
  }
};
</script>

<style scoped lang="sass">
.window
  width: 100vw
  height: 100vh
  background: #eeeeee
</style>
