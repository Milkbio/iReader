<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 2">
      <section class="setting-font-size">
        <div class="preview" :style="{fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
        <div class="select-wrapper"
             v-for="(item, index) in fontSizeList"
             :key="index" @click="setFontSize(item.fontSize)">
          <div class="line"></div>
          <div class="pointer-wrapper">
            <div class="point" v-show="item.fontSize === defaultFontSize">
              <div class="small-point"></div>
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
      </section>
    </div>
  </transition>
</template>

<script>
  import {ebookMixin} from '@/utils/mixin'
  import {FONT_SIZE_LIST} from '@/utils/enums'

  export default {
    name: 'EbookSetFont',
    data() {
      return {
        fontSizeList: FONT_SIZE_LIST
      }
    },
    components: {},
    mixins: [ebookMixin],
    computed: {},
    methods: {
      // 设置字体大小
      setFontSize(size) {
        this.setDefaultFontSize(size)
        this.currentBook.rendition.themes.fontSize(size + 'px')
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .setting-font-size {
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 40px;
      @include center;
    }
    .select-wrapper {
      display: flex;
      flex: 1;
      align-items: center;
      .line {
        flex: 1;
        height: 0;
        border-top: 1px solid #999;
      }
      &:nth-of-type(2) {
        .line:first-child {
          border-top: none;
        }
      }
      &:nth-last-of-type(2) {
        .line:last-child {
          border-top: none;
        }
      }
      .pointer-wrapper {
        flex: 0 0 0;
        width: 0;
        height: 7px;
        border-left: 1px solid #999;
        position: relative;
        .point {
          position: absolute;
          top: -6.5px;
          left: -9.5px;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background: white;
          border: 1px solid #ccc;
          box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
          @include center;
          .small-point {
            width: 5px;
            height: 5px;
            background: #000;
            border-radius: 100%;
          }
        }
      }
    }
  }
</style>
