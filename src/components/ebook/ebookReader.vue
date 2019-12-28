<template>
  <section class="ebook-reader">
    <div id="read"></div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Epub from 'epubjs'
  global.ePub = Epub

  export default {
    name: 'ebookReader',
    data() {
      return {
        book: null,
        rendition: null,
        themes: null,
        locations: null,
        navigation: null
      }
    },
    components: {

    },
    computed: {
      ...mapGetters(['filename'])
    },
    methods: {
      // 电子书的解析渲染
      initEpub() {
        // 生成ebook
        const url = `http://192.168.1.103:9000/resource/epub/${this.filename}.epub`
        this.book = new Epub(url)
        // 生成Rendition
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
          method: 'default'
        })
        // 通过Rendition.display渲染电子书
        this.rendition.display()
        // 获取theme对象
        /*this.themes = this.rendition.themes
        this.setFontSize(16)
        // 注册主题
        this.registerTheme()
        this.setTheme(this.defaultTheme)
        // 获取location, navigation对象,通过epubjs钩子函数实现
        this.book.ready.then(() => {
          return this.book.locations.generate()
        }).then(() => {
          this.locations = this.book.locations
          this.navigation = this.book.navigation
          this.bookAvailable = true
        })*/
      }
    },
    mounted() {
      const filename = this.$route.params.filename.split('|').join('/')
      this.$store.dispatch('setFilename', filename).then(() => {
        this.initEpub()
      })
    }
  }
</script>

<style scoped lang="scss">

</style>
