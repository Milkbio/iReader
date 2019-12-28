<template>
  <div class="home">
    <div class="text">ABCDEFG</div>
    <div id="read"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Epub from 'epubjs'

  export default {
    name: 'home',
    data() {
      return {
        book: null,
        rendition: null,
        themes: null,
        locations: null
      }
    },
    computed: {
      ...mapGetters(['test'])
    },
    components: {
    },
    methods: {
      // 电子书的解析渲染
      showEpub() {
        // 生成ebook
        this.book = new Epub()
        // console.log(this.book)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
        // 通过Rendition.display渲染电子书
        this.rendition.display()
      }
    },
    mounted() {
      // this.showEpub()
    }
  }
</script>
<style lang="scss" scoped>
  .text {
    font-family: 'Days One';
    font-size: 20px;
    color: #ff0;
  }
</style>
