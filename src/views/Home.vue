<template>
  <div class="home">
    <div class="text">ABCDEFG</div>
    <div id="read"></div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  const DOWNLOAD_URL = '/static/2013_Book_FungalDiseaseInBritainAndTheUn.epub'

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
    components: {
    },
    methods: {
      // 电子书的解析渲染
      showEpub() {
        // 生成ebook
        this.book = new Epub(DOWNLOAD_URL)
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
