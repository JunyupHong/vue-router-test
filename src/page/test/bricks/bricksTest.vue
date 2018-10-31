<template lang="pug">
  .bricks-window(@scroll="onScroll")
    .test-area
      h1 COMPONENT TEST PAGE
      button(@click='addItem') addCard
    .bricks-vue
      .item(v-for="card in cards")
        .image-wrapper
          .image-area
        .text-area
          .title {{ card.title }}
          .desc {{ card.desc }}
    .progress-zone
      my-small-progress(ref="progress")
</template>

<script>
import Bricks from 'bricks.js';


let bricksInstance;

export default {
  name: 'bricksTest',
  data() {
    return {
      cards: [
        { title: 'HELLO', desc: 'HELLO' },
        { title: 'HELLO', desc: 'HELLO' }
      ],
      bricksUpdating: false
    };
  },
  methods: {
    addItem() {
      this.cards.push({
        title: `CARD ${this.cards.length + 1}`,
        desc: `description ${this.cards.length + 1}`
      });
      this.bricksUpdating = true;
    },
    bricksDone() {
      this.bricksUpdating = false;
    },
    onScroll(e) {
      if (e.target.scrollTop === e.target.scrollHeight - window.innerHeight
        && e.target.scrollTop !== 0) {
        for (let i = 0; i < 20; i += 1) {
          this.addItem();
        }
      }
    },
    startProgress() {
      this.$refs.progress.start();
    },
    endProgress() {
      this.$refs.progress.end();
    }
  },
  beforeUpdate() {
    this.startProgress();
  },
  updated() {
    if (this.bricksUpdating) bricksInstance.update();
    this.endProgress();
  },
  mounted() {
    bricksInstance = Bricks({
      container: '.bricks-vue',
      packed: 'data-packed',
      sizes: [
        { columns: 5, gutter: 10 }
        // { mq: '768px', columns: 3, gutter: 25 },
        // { mq: '1024px', columns: 4, gutter: 50 }
      ]
    });
    bricksInstance.on('update', this.bricksDone);
    bricksInstance.on('pack', this.bricksDone);
    bricksInstance.pack(); // 처음 초기화는 pack, 나중에는 update를 해준다
  }
};
</script>

<style scoped lang="sass">
.bricks-window
  height: 100vh
  overflow: auto

.bricks-vue
  width: 1200px
  margin: auto

  .item
    width: 240px
    background: #fff
    border: solid 1px #eee
    &:hover
      cursor: pointer
      .image-wrapper
        background: #333 !important
        filter: brightness(70%)
        transition: filter 0.5s
        .image-area
          transform: scale(1.2)
          transition: transform 0.5s
      .text-area
        .title
          color: #279bd4
    &:nth-child(4n+0)
      .image-wrapper
        .image-area
          height: 230px
          background: url("https://www.w3schools.com/w3css/img_lights.jpg") center
          background-size: cover
    &:nth-child(4n+1)
      .image-wrapper
        .image-area
          height: 250px
          background: url("data:image/jpeg;base64,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")
          background-position: center
          background-size: cover
    &:nth-child(4n+2)
      .image-wrapper
        .image-area
          background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9x-imhslMgdzZpIAeTZOv3YPbzPVr8Rf4u7UO1Jh7MHNquQ2") center
          background-size: cover
    &:nth-child(4n+3)
      .image-wrapper
        .image-area
          height: 270px
          background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedvopUIgdz2XtpWTcq9ueDOlQaZxPqc2Gtw6IpsODMfR0-Fxb") center
          background-size: cover
    .image-wrapper
      height: 100%
      overflow: hidden

      .image-area
        min-height: 200px
        background: #d8d8d8
    .text-area
      padding: 16px
      text-align: left
      .title
        color: #555
        font-weight: 800
        font-size: 24px
        line-height: 2
      .desc
        color: #777
        font-weight: 500
        line-height: 1.35
        font-size: 12px
  .progress-zone
    width: 100%
    height: 50px
    border: solid 1px
h1

</style>
