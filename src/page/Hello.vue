<template lang="pug">
  .hello
    h1 VUEX TEST
    h3 {{$store.getters.name}}
    h3 {{$store.getters.age}}
    router-link(to="/hello2") GO TO Hello2
    hr
    button(@click="increaseAge") increaseAge
    hr
</template>

<script>
// store를 가져온다
import { store } from '../vuex/store';

// 상수(changeAge)를 사용하는 대신 StoreFunction.age.set을 누르면 된다
// eunm 처럼 사용
const StoreFunction = {
  age: {
    set: 'changeAge'
  }
};
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
    increaseAge() {
      // mutation을 호출할때는 commit을 쓴다
      // 이때 첫 인자는 함수이름
      // 두번쨰 인자는 전달할 argument
      // this.$store.commit('changeAge', this.$store.getters.age + 1);
      this.$store.commit(StoreFunction.age.set, this.$store.getters.age + 1);
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
