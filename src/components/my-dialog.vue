<template lang="pug">
  .dialog-field(v-if='active')
    .dialog-contents
      .title {{title}}
      .text {{text}}
      .commands-group
        .flex-empty
        .command.negative(@click="clickNegative") {{negative}}
        .command.positive(@click="clickPositive") {{positive}}
</template>
<script>
import * as _ from 'lodash';

export default {
  name: 'my-dialog',
  props: {},
  data() {
    return {
      active: false,
      title: 'Mydialog',
      text: '삭제하시겠습니까',
      negative: 'negative',
      positive: 'positive',
      onPositive: null,
      onNegative: null
    };
  },
  methods: {
    clickPositive() {
      this.active = false;
      if (_.isFunction(this.onPositive)) this.onPositive();
    },
    clickNegative() {
      this.active = false;
      if (_.isFunction(this.onNegative)) this.onNegative();
    },
    /**
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.text
     * @param {String} options.positive
     * @param {String} options.negative
     * @param {Function} options.onPositive
     * @param {Function} options.onNegative
     */
    open(options) {
      if (_.isNil(options)) return;
      this.active = true;
      this.title = options.title;
      this.text = options.text;
      this.negative = options.negative;
      this.positive = options.positive;
      this.onPositive = options.onPositive;
      this.onNegative = options.onNegative;
    }
  }
};
</script>
<style scoped lang="sass">
.dialog-field
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  background: rgba(0, 0, 0, 0.7)
  display: flex
  align-items: center
  justify-content: center
  pointer-events: all
  z-index: 1000
  .dialog-contents
    width: 400px
    min-height: 200px
    background: #ffffff
    padding: 16px
    text-align: left
    border-radius: 5px
    .title
      font-size: 36px
    .text
      margin-top: 12px
      font-size: 20px
    .commands-group
      display: flex
      margin-top: 24px
      border-top: solid 1px rgba(0,0,0, 0.2)
      .flex-empty
        flex: 1
      .command
        padding: 8px 16px
        margin: 12px 4px 0 4px
        border-radius: 3px
        &.negative
          background: #cccccc
        &.positive
          background: #78ccdd
</style>
