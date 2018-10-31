<template lang="pug">
  .chat-wrapper
    .empty-bar
    .left-side-bar
      .left-header
        .header-image {{ userImage }}
        .header-name {{ userName }}
        .header-status
          .i.fas.fa-power-off
      .left-input
        .input-bar
          .i.fas.fa-search
          input(placeholder="검색 (CMD+K)")
        .adder +
      .left-body-part

      .left-footer {{ name }}
    .main-part
      .main-header
        .i.far.fa-star
        .i.fas.fa-lock
        .header-text class_level1

      .main-chatting(ref="chattingZone")
        .chat-date
          .date-line
          .date-text 2018년 5월 25일
          .date-line

        mychat-chatting(v-for="message in messageDatas"
        :type="message.type"
        :userName="message.userName"
        :userImage="message.userImage"
        :message="message.message"
        :grades="message.grades"
        :time="message.time")


      .main-input
        .main-input-content
          .input-bar
            .i.far.fa-grin
            textarea(placeholder='메세지' ref="textarea"
            v-model="message" @keyup="setTextArea" @keyup.enter.exact="sendMessage")
          .content-bar
            .contents
              .i.fas.fa-paperclip
              .i.fas.fa-microphone
              .i.fas.fa-video
            .empty-content
    .right-side-bar
      .icon.i.fas.fa-info-circle
      .icon.i.fas.fa-search
      .icon.i.fas.fa-users
      .icon.i.fas.fa-bell
      .icon.i.fas.fa-paperclip
      .icon.i.fas.fa-at
      .icon.i.fas.fa-star
      .icon.i.fas.fa-thumbtack
</template>

<script>
import Vue from 'vue';
import * as _ from 'lodash';

import Chatting from '../components/mychat-chatting';


Vue.component(Chatting.name, Chatting);

export default {
  name: 'myChat',
  data() {
    return {
      name: 'TheTheChat',
      userName: 'junyup hong',
      userImage: 'JH',
      grades: ['Admin', 'Owner'],
      message: '',
      messageDatas: []
    };
  },
  methods: {
    setUserProfile() {
      // userName 과 userImage 설정
      this.userName = 'junyup hong';
      const array = this.userName.split(' ');
      for (let i = 0; i < array.length; i += 1) {
        this.userImage += array[i][0].toUpperCase();
      }
      console.log(this.userName, this.userImage);
    },

    sendMessage: _.debounce(function () {
      if (this.message.trim() === '') {
        this.message = '';
        return;
      }

      // 이전 message와 비교
      let messageType = 'profile';
      if (this.messageDatas.length !== 0
        && this.messageDatas[this.messageDatas.length - 1].userName === this.userName) {
        messageType = 'noProfile';
      }


      // 시간 설정
      const date = new Date();
      let ampm;
      let hours = date.getHours();
      if (hours < 12) {
        ampm = '오전';
      } else ampm = '오후';
      hours %= 12;
      if (hours === 0) hours = 12;
      const chattingTime = `${ampm} ${hours}시 ${date.getMinutes()}분`;


      // push
      this.messageDatas.push({
        type: messageType,
        userName: this.userName,
        userImage: this.userImage,
        time: chattingTime,
        message: this.message,
        grades: this.grades
      });


      this.message = '';
      console.log(this.messageDatas);

      // 스크롤바 맨아래로 설정
      // this.$refs.chattingZone.scrollTop = this.$refs.chattingZone.scrollHeight;
    }),
    setTextArea() {
      this.$refs.textarea.style.height = '';
      // this.$refs.textarea.scrollTop = this.$refs.textarea.scrollHeight;
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
      console.log(this.$refs.textarea.style.height);
    }
  },
  updated() {
    // 스크롤바 맨아래로 설정
    this.$refs.chattingZone.scrollTop = this.$refs.chattingZone.scrollHeight;
  }
};
</script>

<style scoped lang="sass">
@import "./myChatGlobal"

*
  box-sizing: border-box

body
  padding: 0
  margin: 0

.display-none
  display: none !important

.display-block
  display: block !important

.chat-wrapper
  width: 100vw
  height: 100vh
  display: flex
  .empty-bar
    width: 80px
    height: 100%
    background: #222
  .left-side-bar
    width: 220px
    height: 100%
    .left-header
      width: 100%
      height: 50px
      display: flex
      padding: 8px
      $header-height: 34px
      background: $background-blue-first
      .header-image
        width: $header-height
        height: $header-height
        background: $state-occupied
        border-radius: 4px
        color: $font-grey-first
        font-size: 21px
        font-weight: 600
        line-height: $header-height
        text-align: center
      .header-name
        flex: 1
        height: $header-height
        padding: 0 8px
        line-height: $header-height
        color: $font-blue-first
        font-weight: 300
      .header-status
        width: 16px
        height: $header-height
        .i
          width: 100%
          height: 100%
          color: $font-blue-first
          line-height: $header-height
    .left-input
      background: $background-blue-first
      width: 100%
      height: 45px
      display: flex
      padding: 8px
      .input-bar
        flex: 1
        height: 100%
        border: 1px solid $border-blue-first
        border-radius: 4px
        position: relative
        margin-right: 16px
        opacity: 0.8
        .i
          width: 16px
          height: 29px
          color: $font-blue-second
          position: absolute
          left: 8px
          line-height: 29px
          font-size: 12px
        input
          width: 100%
          height: 100%
          background: $background-blue-ninth
          border: none
          outline: none
          padding-left: 32px
          color: $font-grey-first
          &::placeholder
            color: $font-blue-second
            font-weight: 300
      .adder
        width: 15px
        height: 100%
        line-height: 29px
        color: $font-blue-second
        font-size: 22px
        font-weight: 500
    .left-body-part
      width: 100%
      height: calc(100% - 155px)
      overflow-y: auto
      //opacity: 0.97
      background: $background-blue-third
      padding: 8px
      color: $font-blue-third
      .empty-part
        width: 100%
        height: 10px
      .header-part
        width: 100%
        height: 24px
        font-size: 11px
        line-height: 24px
        color: inherit
        padding-left: 8px
      .item-part
        width: 100%
        height: 24px
        display: flex
        cursor: pointer
        padding-left: 4px
        .i
          width: 18px
          height: 100%
          color: inherit
          font-size: 11px
          opacity: 0.8
          line-height: 24px
          text-align: center
        .item-text
          flex: 1
          font-size: 12px
          line-height: 24px
        .show
          display: none
        &:hover
          background: $background-blue-fourth
          .show
            display: block
    .left-footer
      width: 100%
      height: 60px
      background: $background-blue-first
      padding: 8px
      line-height: 44px
      color: white
      font-size: 36px
      font-weight: 800
  .main-part
    flex: 1
    height: 100%
    display: flex
    flex-direction: column
    .main-header
      width: 100%
      height: 50px
      border-bottom: 1px solid $border-grey-first
      padding: 8px 16px
      display: flex
      .i
        width: 32px
        height: 100%
        line-height: 34px
        color: $font-grey-second
      .header-text
        flex: 1
        height: 100%
        line-height: 34px
        color: #444
        text-align: left
        font-size: 21px
        font-weight: 800
    .main-chatting
      width: 100%
      flex: 1
      overflow-y: auto
      .chat-date
        width: 100%
        height: 40px
        display: flex
        .date-line
          flex: 1
          height: 20px
          border-bottom: 1px solid $font-grey-third
        .date-text
          width: 110px
          line-height: 40px
          text-align: center
          height: 40px
          font-size: 10px
          color: #444
          font-weight: 600

    .main-input
      width: 100%
      border-top: 1px solid #ddd
      padding: 8px 16px 16px 16px
      .main-input-content
        width: 100%
        border: 1px solid #ddd
        border-radius: 4px
        display: flex
        .input-bar
          flex: 1
          border-right: 1px solid #ddd
          position: relative
          .i
            position: absolute
            left: 8px
            top: 8px
            color: #ccc
          textarea
            resize: none
            width: 100%
            max-height: 200px
            padding-left: 32px
            padding-top: 8px
            border: none
            outline: none
            overflow: auto
            &::placeholder
              color: #999
        .content-bar
          width: 80px
          height: 32px
          .contents
            display: flex
            height: 30px
            border-bottom: 1px solid #efefef
            background: #eee
            .i
              flex: 1
              text-align: center
              height: 30px
              color: #777
              line-height: 30px

  .right-side-bar
    width: 36px
    height: 100%
    border-left: 1px solid #ccc
    padding: 8px
    .icon
      width: 20px
      height: 36px
      line-height: 36px
      color: #444
      font-size: 12px
      text-align: center

</style>
