<template lang="pug">
  .window
    .component-zone
      .title progress
      button(@click="startSmallProgress") execute
      button(@click="endSmallProgress") stop
      button(@click="startProgress") default
      .result-zone
        my-small-progress(ref="smallProgress")
    .component-zone
      .title dialog
      .input-zone
        input(placeholder="title" v-model="dialogTitle")
        input(placeholder="text" v-model="dialogText")
        input(placeholder="negative message" v-model="dialogNegativeMessage")
        input(placeholder="positive message" v-model="dialogPositiveMessage")
      button(@click="dialogOpen") execute
      .result-zone
    .component-zone
    .component-zone

</template>
<script>
export default {
  name: 'components',
  data() {
    return {
      dialogTitle: '',
      dialogText: '',
      dialogNegativeMessage: '',
      dialogPositiveMessage: ''
    };
  },
  methods: {
    startProgress() {
      this.$progress.start();
    },
    endProgress() {
      this.$progress.end();
    },

    startSmallProgress() {
      this.$refs.smallProgress.start();
    },
    endSmallProgress() {
      this.$refs.smallProgress.end();
    },
    dialogOpen() {
      this.$dialog.open({
        title: this.dialogTitle,
        text: this.dialogText,
        negative: this.dialogNegativeMessage,
        positive: this.dialogPositiveMessage,
        onPositive: () => {
          console.log('on positive');
        },
        onNegative: () => {
          console.log('on negative');
        }
      });
    }
  }
};
</script>
<style scoped lang="sass">
.window
  width: 100vw
  height: 100vh
  display: flex
  flex-wrap: wrap
  .component-zone
    width: calc(100% / 3)
    height: 400px
    border: solid 1px #eeeeee
    padding: 16px
    .title
      font-size: 24px
      font-weight: 800
    .input-zone
      min-height: 50px
      flex-wrap: wrap
      display: flex
      align-items: center
      justify-content: center
      input
        font-size: 16px
        max-width: 150px
        margin: 0 auto
        padding: 0 0 0 8px
        border-style: none
        border: solid 1px #eeeeee
        border-radius: 4px
    button
      width: 100px
      height: 30px
      margin: 8px 5px
      border: solid 1px #76cad4
      border-radius: 5px
      background: #ffffff
      color: #76cad4
      font-size: 16px
      &:hover
        cursor: pointer
        background: #76cad4
        border: #ffffff
        color: #ffffff
    .result-zone
      height: 228px
      border: solid 1px #eeeeee
      box-shadow: 2px 5px 10px #cccccc
      margin: auto
  h1
</style>
