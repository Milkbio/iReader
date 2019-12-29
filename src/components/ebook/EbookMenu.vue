<template>
  <transition name="slide-up">
    <section>
      <div class="menu-wrapper"
           :class="{'hide-box-shadow': !menuVisible || settingVisible > -1}"
           v-show="menuVisible">
        <div class="icon-wrapper" @click="handleShowSetting(-1)"><span class="icon-menu"></span></div>
        <div class="icon-wrapper" @click="handleShowSetting(0)"><span class="icon-progress"></span></div>
        <div class="icon-wrapper" @click="handleShowSetting(1)"><span class="icon-bright"></span></div>
        <div class="icon-wrapper" @click="handleShowSetting(2)"><span class="icon-A"></span></div>
      </div>
      <ebook-set-font/>
    </section>
  </transition>
</template>

<script>
  import {ebookMixin} from '@/utils/mixin'
  import EbookSetFont from './EbookSetFont'

  export default {
    name: 'EbookMenu',
    props: {
      themeList: Array,
      defaultTheme: Number,
      bookAvailable: Boolean
    },
    components: {
      EbookSetFont
    },
    mixins: [ebookMixin],
    data() {
      return {
      }
    },
    watch: {
    },
    methods: {
      handleShowSetting(val) {
        this.setSettingVisible(val)
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 48px;
    background: #fff;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, .2);
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    .icon-wrapper {
      width: 60px;
      line-height: 48px;
      text-align: center;
    }
    &.hide-box-shadow {
      box-shadow: none;
    }
  }
</style>
<style lang="scss">
  .setting-wrapper {
    position: absolute;
    bottom: 48px;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 90px;
    background: #fff;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, .2);
  }
</style>
