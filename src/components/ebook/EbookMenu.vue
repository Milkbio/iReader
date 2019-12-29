<template>
  <section class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="isShowMenu">
        <div class="icon-wrapper" @click="handleShowSetting(0)"><span class="icon-menu icon"></span></div>
        <div class="icon-wrapper" @click="handleShowSetting(1)"><span class="icon-progress icon"></span></div>
        <div class="icon-wrapper" @click="handleShowSetting(2)"><span class="icon-bright icon"></span></div>
        <div class="icon-wrapper" @click="handleShowSetting(3)"><span class="icon-a icon">A</span></div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="isShowSetting">
        <set-progress
          :bookAvailable="bookAvailable"
          v-show="showTag === 1"
          @onProgressChange="onProgressChange"/>
        <set-theme
          :themeList="themeList"
          :defaultTheme="defaultTheme"
          v-show="showTag === 2"
          @setTheme="setTheme"/>
        <set-font-size
          v-show="showTag === 3"
          @setFontSize="setFontSize"/>
      </div>
    </transition>
  </section>
</template>

<script>
  import SetFontSize from './SetFontSize'
  import SetTheme from './SetTheme'
  import SetProgress from './SetProgress'
  export default {
    name: 'EbookMenu',
    props: {
      isShowMenu: {
        type: Boolean,
        default: false
      },
      themeList: Array,
      defaultTheme: Number,
      bookAvailable: Boolean
    },
    components: {SetFontSize, SetTheme, SetProgress},
    data() {
      return {
        isShowSetting: false,
        showTag: -1
      }
    },
    watch: {
      isShowMenu(val) {
        if (!val) this.isShowSetting = val
      }
    },
    methods: {
      handleShowSetting(val) {
        if (val) {
          this.isShowSetting = true
          this.showTag = val
        } else {
          this.$emit('handleShowCatalogue')
        }
      },
      setFontSize(size) {
        this.$emit('setFontSize', size)
      },
      setTheme(index) {
        this.$emit('setTheme', index)
      },
      /* x为range滑块松开后当前的value值*/
      onProgressChange(x) {
        this.$emit('onProgressChange', x)
      },
    }
  }
</script>

<style scoped lang="scss">
  .menu-bar {
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
      .icon-wrapper {
        width: 60px;
        text-align: center;
      }
    }
    .setting-wrapper {
      position: absolute;
      bottom: 48px;
      left: 0;
      z-index: 102;
      width: 100%;
      height: 60px;
      background: #fff;
      box-shadow: 0 -8px 8px rgba(0, 0, 0, .2);
    }

  }
</style>
