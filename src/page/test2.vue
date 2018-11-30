<template lang="pug">
  .window
    .test1(@click="click('test1')")
      .test2(@click="click('test2')")
        .test3(@click="click('test3')")
    .test4(@click="click('test4')")
    .test5(@click="click('test5')")
      .test6(@click="click('test6')")
        .test7(@click="click('test7')")
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
    },
    click(text) {
      event.stopPropagation();
      console.log(text);
    }
  }
};
</script>

<style scoped lang="sass">
.window
  width: 100vw
  height: 100vh
  background: #eeeeee
.test1
  position: fixed
  top: 200px
  left: 200px
  width: 300px
  height: 300px
  border: solid 1px
  pointer-events: all
  .test2
    position: absolute
    top: 50px
    left: 50px
    width: 200px
    height: 200px
    border: solid 1px red
    pointer-events: all
    .test3
      position: absolute
      top: 50px
      left: 50px
      width: 100px
      height: 100px
      border: solid 1px blue
      pointer-events: none

.test4
  position: fixed
  top: 80px
  left: 200px
  width: 300px
  height: 300px
  background: rgba(0,0,0,0.2)
  pointer-events: none

.test5
  position: fixed
  top: 300px
  left: 1000px
  width: 50px
  height: 50px
  border: solid 1px
  .test6
    position: absolute
    width: 100px
    height: 100px
    border: solid 1px red
    .test7
      position: absolute
      width: 150px
      height: 150px
      border: solid 1px blue
h1
</style>
