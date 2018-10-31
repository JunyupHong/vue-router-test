/* eslint-disable import/prefer-default-export */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // 필요한 상태를 저장!
    name: 'first Name',
    age: 0
  },
  /** 반드시 동기여야 한다.
   * => (변경될수 있는건(async, await를 사용하는것) actions를 사용해야한다!)
   * => action을 사용해서 mutations의 async, await가 사용될 함수를 불러준다
   * method 이름이 문자열 이므로 상수로 빼둘 필요가 있다.
   * call by : store.commit('method', arg)
   */
  mutations: {
    // 무조건 state가 첫번쨰 인자
    changeName(state, name) {
      state.name = name;
      // state.name는 위의 저장된 변수, name은 argument로 받은 값
    },
    changeAge(state, age) {
      state.age = age;
    }
  },

  /** 비동기가 포함 될 수 있다
   * method 이름이 문자열 이므로 상수로 빼둘 필요가 있다.
   * => 다른 페이지에서 actions.을 찍으면 그 안에 뭐가 있는지 안나온다 => enum처럼 바꿔서 사용 한다(Hello.vue에 StoreFunction이 있음)
   * call by : store.dispatch('method', arg)
   */
  actions: {
    increment(context, data) {
      context.commit('increment', data);
    }
  },
  getters: {
    // name: function () {
    //   return this.state.name;
    // }
    name: state => state.name,
    age: state => state.age
  }
});

export { store };
