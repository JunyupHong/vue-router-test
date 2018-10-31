import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import test from '../page/test';
import components from '../page/components';
import siteScrapper from '../page/siteScrapper';
import webCrawling from '../page/webCrawling';
import myChat from '../page/myChat';
import bricksTest from '../page/test/bricks/bricksTest';
import hello2 from '../page/Hello2';
import test2 from '../page/test2';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-router-test',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/components',
      name: 'components',
      component: components
    },
    {
      path: '/siteScrapper',
      name: 'siteScrapper',
      component: siteScrapper
    },
    {
      path: '/webCrawling',
      name: 'webCrawling',
      component: webCrawling
    },
    {
      path: '/myChat',
      name: 'myChat',
      component: myChat
    },
    {
      path: '/bricksTest',
      name: 'bricksTest',
      component: bricksTest
    },
    {
      path: '/hello2',
      name: hello2.name,
      component: hello2
    },
    {
      path: '/test2',
      name: test2.name,
      component: test2
    }
  ]
});
