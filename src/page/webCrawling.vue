<template lang="pug">
  .window {{name}}
    .input-zone
      input(placeholder="website URL" v-model="url")
      button(@click="getSiteHtml") execute
    .search-zone
      input(placeholder="태그 검색" v-model="search")
      button search
    .result-zone
      .tags-zone
        .tag-content(v-for="content in contents")
          .tag {{content.tagName}}
          .content {{content.text}}
      .url-zone
        .url(v-for="url in urls") {{url}}
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'webCrawling',
  data() {
    return {
      name: 'Web Crawling',
      url: '',
      search: '',
      siteHtml: '',
      siteHtmlBody: '',
      contents: [],
      urls: []
    };
  },
  methods: {
    async getSiteHtml() {
      const siteContents = await this.$http.get(`http://127.0.0.1:3002/${encodeURIComponent(this.url)}`);
      this.siteHtml = siteContents.data;
      this.siteHtmlBody = /<body[\d\D]+<\/body>/.exec(this.siteHtml)[0];

      // contents
      const re = new RegExp('<([^>]+)[^>]*>([^>]*)</\\1>', 'gi');
      this.contents = [];
      let html;
      while (html = re.exec(this.siteHtmlBody)) {
        const tag = /<[^ >]+/.exec(html[0])[0].split('<')[1];
        if (!_.isNil(html[0])) {
          const fixedContent = />[^<]+/.exec(html[0]);
          if (!_.isNil(fixedContent)) this.contents.push({ tagName: tag, text: fixedContent[0].split('>')[1] });
        }
      }
      // url
      const urlRE = new RegExp('<a[^>]*href=([^>]*)"[^>]*>', 'gi');
      this.urls = [];
      let tagHtml;
      while (tagHtml = urlRE.exec(this.siteHtmlBody)) {
        if (!_.isNil(tagHtml[0])) {
          const fixedTag = /href="[^"]+/.exec(tagHtml[0]);
          if (!_.isNil(fixedTag)) this.urls.push(fixedTag[0].split('"')[1]);
        }
      }
    },
    filter() {
      if (this.search === '') return;
    }
  }
};
</script>

<style scoped lang="sass">
input
  width: 280px
  font-size: 20px
  border-style: none
  border: solid 1px #cccccc
  border-radius: 5px
  padding: 4px 10px
  margin: 0 30px

button
  width: 120px
  height: 30px
  background: white
  color: #60ccff
  border: solid 1px #60ccff
  border-radius: 5px
  font-size: 16px
  font-weight: 600
  &:hover
    cursor: pointer
    border: #60ccff
    background: #60ccff
    color: white

.window
  width: 100vw
  height: 100vh
  font-size: 40px
  font-weight: 800
  padding: 40px 0
  .input-zone
    height: 50px
    margin-top: 10px
    display: flex
    align-items: center
    justify-content: center
  .search-zone
    height: 50px
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 20px
    box-shadow: 0 5px 3px #cccccc

  .result-zone
    padding: 20px 0 80px 0
    .tags-zone
      width: 80%
      height: 500px
      margin: auto
      border: solid 1px #cccccc
      overflow: auto
      padding: 12px
      .tag-content
        display: flex
        margin: 12px
        .tag
          width: 100px
          color: #0d47a1
          text-align: left
          font-size: 20px
          font-weight: 500
        .content
          text-align: left
          font-size: 20px
          font-weight: 500
    .url-zone
      width: 80%
      height: 300px
      padding: 12px
      margin: 12px auto
      border: solid 1px #cccccc
      overflow: auto
      .url
        text-align: left
        font-size: 20px
        font-weight: 500
        margin: 12px
        color: blue
        &:hover
          cursor: pointer
</style>
