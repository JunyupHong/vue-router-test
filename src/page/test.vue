<template>
  <div class="window">
    <button @click="open">X</button>
    <button @click="pro">X</button>
    <!--<myProgress :loading-state="false"></myProgress>-->
  </div>
</template>

<script>

export default {
  name: 'test',
  data() {
    return {
      name: 'template test'
    };
  },
  computed: {},
  methods: {
    pro() {
      this.$progress.startProgress();
    },
    open() {
      this.$dialog.open({
        title: 'Title 입니다',
        text: '삭제하시겠습니까? 삭제하시겠습니까?',
        negative: 'no',
        positive: 'yes',
        onPositive: () => {
          console.log('on positive');
        },
        onNegative: () => {
          console.log('on negative');
        }
      });
    }
  },
  mounted() {

    // setTimeout(() => {
    //   this.$refs.defaultDialog.open({
    //     title: 'Title 입니다',
    //     text: '삭제하시겠습니까? 삭제하시겠습니까?',
    //     negative: 'no',
    //     positive: 'yes',
    //     onPositive: () => {
    //       console.log('on positive');
    //     },
    //     onNegative: () => {
    //       console.log('on negative');
    //     }
    //   });
    // }, 2000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.window
  width: 100vw
  height: 100vh
</style>
