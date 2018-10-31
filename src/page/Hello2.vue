<template lang="pug">
  .hello
    h1 STORE VIEWER
    h3 {{$store.getters.name}}
    h3 {{$store.getters.age}}
    router-link(to="/vue-router-test") GO TO Hello
    hr
    button(@click="decreaseAge") decreaseAge
    hr


</template>

<script>

// store를 가져온다
import { store } from '../vuex/store';


export default {
  name: 'HelloWorld',

  // vue에서 현재 store를 쓰겠다
  store,
  data() {
    return {
      site: '',
      msg: 'Welcome to Hanu Vue Template',
      posX: 0,
      posY: 0
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    getPosition() {
      return {
        left: `${this.posX}px`,
        top: `${this.posY}px`
      };
    }
  },
  methods: {
    decreaseAge() {
      this.$store.commit('changeAge', this.$store.getters.age - 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.link-zone
  width: 100vw
  height: 100vh
  .link
    height: 40px
    text-align: center
    line-height: 40px
    border: solid 1px #eeeeee
</style>
