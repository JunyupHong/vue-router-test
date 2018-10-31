<template lang="pug">
  .window
    input(v-model="url" placeholder="website URL")
    button(@click="getSiteContent") get site content
    .result-zone
      .siteContent-zone
        .site-content(v-for="content in contents") {{content.split('>')[1]}}
      .tag-zone
        a(v-for="tag in contents", v-bind:href="tag.split('\"')[1]") {{tag.split('"')[1]}}
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'siteScrapper',
  data() {
    return {
      url: 'https://www.daum.net',
      siteContent: '',
      contents: [],
      contents: [],
      realTags: []
    };
  },
  mounted() {
  },
  methods: {
    URLModal(title1, text1) {
      this.$dialog.open({
        title: title1,
        text: text1,
        positive: 'yes',
        onPositive: () => {
          console.log('on positive');
        },
        onNegative: () => {
          console.log('on negative');
        }
      });
    },
    setContents() {
      // contents
      const re = new RegExp('<([^>]+) [^>]*>([^>]*)</\\1>', 'gi');
      this.contents = [];
      let html;
      while (html = re.exec(this.siteContent.data)) {
        if (!_.isNil(html[0])) {
          const fixedContent = />[^<]+/.exec(html[0]);
          if (!_.isNil(fixedContent)) this.contents.push(fixedContent[0]);
        }
      }
    },
    async getSiteContent() {
      try {
        if (this.url !== '') {
          this.siteContent = await this.$http.get(`http://127.0.0.1:3002/${encodeURIComponent(this.url)}`);
          this.setContents();
          // contents
          // *******************여기하기*******/
          const urlRE = new RegExp('<a[^>]*href=([^>]*)"[^>]*>', 'gi');
          this.tags = [];
          let tagHtml;
          while (tagHtml = urlRE.exec(this.siteContent.data)) {
            if (!_.isNil(tagHtml[0])) {
              const fixedTag = /href="[^"]+/.exec(tagHtml[0]);
              if (!_.isNil(fixedTag)) this.contents.push(fixedTag[0]);
            }
          }
          console.log(this.contents);
        } else this.URLModal('Site Scrapper', 'URL을 입력해주세요');
      } catch (e) {
        console.log('aaaaa', e);
      }
    }
  }
};
</script>

<style scoped lang="sass">
.window
  width: 100vw
  height: 100vh
  background: #eeeeee
  overflow: auto
  input
    width: 360px
    height: 40px
    font-size: 16px
    line-height: 40px
    margin: 10px 0
    padding: 0 10px
    border-style: none
    border: solid 1px #cccccc
    border-radius: 5px
  button
    display: block
    width: 200px
    height: 40px
    border: solid 1px #1e88e5
    border-radius: 5px
    margin: 10px auto
    color: white
    background: #1e88e5
    font-size: 16px
    font-weight: 700
    &:hover
      cursor: pointer
      color: #1e88e5
      background: white
      border: solid 1px #1e88e5
  .result-zone
    width: 80%
    height: calc(100% - 120px)
    padding: 20px
    font-size: 20px
    margin: auto
    .siteContent-zone
      padding: 20px
      height: 500px
      overflow: auto
      border: solid 1px #ffffff
      .site-content
        margin: 16px 0
        text-align: left
    .tag-zone
      padding: 20px
      height: 400px
      overflow: auto
      border: solid 1px #ffffff
      margin-bottom: 40px
      a
        display: block
        margin: 8px 0


</style>
