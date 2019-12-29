<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left" @click="back">
        <span class="icon-back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper"><span class="icon-shelf"></span></div>
        <div class="icon-wrapper"><span class="icon-cart"></span></div>
        <div class="icon-wrapper"><span class="icon-more"></span></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'EbookTitle',
    props: {
    },
    computed: {
      ...mapGetters(['menuVisible'])
    },
    methods: {
      back() {}
    }
  }
</script>

<style scoped lang="scss">
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 48px;
    background: #fff;
    box-shadow: 0 8px 8px rgba(0, 0, 0, .2);
    display: flex;
    font-size: 20px;
    .left {
      width: 60px;
      line-height: 48px;
      padding-left: 15px;
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 40px;
        @include center;
        .icon-shelf, .icon-cart {
          font-size: 22px;
        }
      }
    }
  }
</style>
