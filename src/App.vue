<template>
  <div id="app">
    <my-dialog ref="defaultDialog"></my-dialog>
    <my-progress ref="defaultProgress"></my-progress>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

import { store } from './vuex/store';


import Dialog from './components/my-dialog';
import myProgress from './components/my-progress';
import mySmallProgress from './components/my-small-progress';


Vue.component(Dialog.name, Dialog);
Vue.component(myProgress.name, myProgress);
Vue.component(mySmallProgress.name, mySmallProgress);


export default {
  name: 'App',
  store,
  methods: {},
  async mounted() {
    Vue.prototype.$dialog = this.$refs.defaultDialog;
    Vue.prototype.$progress = this.$refs.defaultProgress;
    Vue.prototype.$http = axios;
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
