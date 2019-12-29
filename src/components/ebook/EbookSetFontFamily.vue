<template>
  <transition name="popup-slide-up">
    <section class="font-family-popup-wrapper" v-show="fontFamilyVisible">
      <div class="popup-header">
        <div class="icon" @click="hide"><span class="icon-down2"></span></div>
        <div class="title">选择字体</div>
      </div>
      <ul class="popup-body">
        <li v-for="(item, index) in fontFamilyList" :key="index" @click="setFontFamily(item.font)">
          <div class="text" :class="{selected: isSelected(item.font)}">{{item.font}}</div>
          <div class="icon-check" v-show="isSelected(item.font)"></div>
        </li>
      </ul>
    </section>
  </transition>
</template>

<script>
  import {ebookMixin} from '@/utils/mixin'
  import {FONT_FAMILY_LIST} from '@/utils/enums'
  export default {
    name: 'EbookSetFontFamily',
    data() {
      return {
        fontFamilyList: FONT_FAMILY_LIST
      }
    },
    components: {},
    mixins: [ebookMixin],
    computed: {},
    methods: {
      // 隐藏字体类型面板
      hide() {
        this.setFontFamilyVisible(false)
      },
      isSelected(font) {
        return font === this.defaultFontFamily
      },
      // 点击list项目设置reader字体
      setFontFamily(font) {
        this.setDefaultFontFamily(font)
        this.currentBook.rendition.themes.font(font)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
.font-family-popup-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 109;
  background: white;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, .2);
  .popup-header {
    padding: 15px;
    border-bottom: 1px solid #b8b9bb;
    position: relative;
    .icon {
      position: absolute;
      top: 15px;
      left: 15px;
      font-size: 16px;
    }
    .title {
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
  }
  .popup-body {
    li {
      display: flex;
      margin: 0 15px;
      padding: 10px 0;
      border-bottom: 1px solid #b8b9bb;
      font-size: 14px;
      color: #666;
      .text {
        flex: 1;
        &.selected {
          color: #346cb9;
          font-weight: bold;
        }
      }
      .icon-check {
        font-weight: bold;
        color: #3bb90e;
      }
    }
  }
}
</style>
