<template lang="pug">
  .chat-content(v-if="type === 'profile'")
    .chat-image-zone
      .chat-image.orange {{ userImage }}
    .chat
      .chat-profile-content
        .profile-name {{ userName }}
        .profile-owner-content
          .owner-text(v-for="grade in grades") {{ grade }}
        .profile-date {{ time }}
        .i.fas.fa-cog
      .chat-text-content {{ message }}

  .chat-content(v-else-if="type === 'noProfile'")
    .chat-image-zone
      .chat-image
      .i.fas.fa-cog
    .chat
      .chat-profile-content
        .profile-name
        .profile-owner-content
        .profile-date
      .chat-text-content {{ message }}
</template>

<script>
export default {
  name: 'mychat-chatting',
  props: {
    type: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    userImage: {
      type: String,
      required: true
    },
    grades: {
      type: Array,
      default() {
        return [];
      }
    },
    time: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="sass">
@import "../page/myChatGlobal"

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
  .chat-content
    width: 100%
    display: flex
    padding: 8px 16px 0 16px
    position: relative
    &:hover
      cursor: pointer
      .chat-image-zone
        .i.fas.fa-cog
          display: block
      .chat
        .chat-profile-content
          .i.fas.fa-cog
            display: block
    .chat-image-zone
      width: 40px
      .chat-image
        width: 100%
        text-align: center
        font-size: 30px
        border-radius: 5px
        line-height: 40px
        max-height: 40px
        color: white
        &.orange
          background: $state-occupied
      .i.fas.fa-cog
        width: 100%
        display: none
        color: $font-grey-third
        font-size: 12px
        text-align: end
        line-height: 21px
    .chat
      width: calc(100% - 40px)
      .chat-profile-content
        width: 100%
        display: flex
        .profile-name
          padding-left: 8px
          color: #333
          font-size: 13px
          font-weight: 500
        .profile-owner-content
          padding: 0 4px
          display: flex
          .owner-text
            font-weight: 300
            text-align: center
            margin: 0 2px
            font-size: 12px
            width: 40px
            background: $background-grey-third
            color: #fdfdfd
            border-radius: 2px
        .profile-date
          line-height: 16px
          color: #666666
          font-size: 8px
          margin: 0 4px 0 0
        .i.fas.fa-cog
          font-size: 12px
          line-height: 16px
          color: $font-grey-third
          display: none
      .chat-text-content
        padding: 4px 8px 0 8px
        color: #555
        font-size: 12px
        line-height: 18px
        text-align: left
        white-space: pre-line
</style>
