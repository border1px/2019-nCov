<template>
  <div class="pf-mask">
    <div class="pf-alert">
      <div class="pf-alert-hd">{{title}}</div>
      <div class="pf-alert-by" v-html="msg"></div>
      <div class="pf-alert-bt btn-primary" @click.stop="closeAlert">{{buttonText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    msg: String,
    buttonText: {
      type: String,
      default: '确定'
    }
  }
}
</script>

<style lang="stylus">
$dialog-bg = #F4F4F4
$dialog-title-height = 60px
$dialog-btn-height = 40px
$theme-color = #2196F3
$dialog-btn-bg-active = #E4E4E4

@keyframes pf-zoom-in {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
}

.pf-mask
  position absolute
  left 0
  right 0
  bottom 0
  top 0
  background-color rgba(0,0,0,0.4)
  display flex
  align-items center
  justify-content center
.pf-alert
  position absolute
  top:50px
  width 80%
  box-sizing border-box
  border-radius 4px
  background-color $dialog-bg
  animation: pf-zoom-in .15s ease ;
  a
    // text-decoration underline
    color: blue
  &-hd
    line-height $dialog-title-height;
    text-align center
    font-weight bold
  &-by
    text-align: left;
    padding: 0 20px;
    font-size: 14px;
    color: $dialog-text-color;
    line-height: 20px;
    word-break: break-all;
  &-bt
    line-height: $dialog-btn-height;
    margin-top: 14px;
    text-align:center;
    &.btn-primary
      color: $theme-color;
    &:active
      background-color $dialog-btn-bg-active
</style>
