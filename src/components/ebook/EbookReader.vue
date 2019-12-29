<template>
  <section class="ebook-reader">
    <div id="read"></div>
  </section>
</template>

<script>
  import Epub from 'epubjs'
  import {ebookMixin} from '@/utils/mixin'

  global.ePub = Epub

  export default {
    name: 'ebookReader',
    data() {
      return {
        book: null,
        rendition: null,
        themes: null,
        locations: null,
        navigation: null,
        touchStartX: 0,
        touchStartY: 0,
        touchStartTime: 0
      }
    },
    mixins: [ebookMixin],
    components: {
    },
    computed: {
    },
    methods: {
      // 电子书的解析渲染
      initEpub() {
        // 生成ebook
        const url = `http://192.168.1.103:9000/resource/epub/${this.filename}.epub`
        this.book = new Epub(url)
        this.setCurrentBook(this.book)
        // 生成Rendition
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
          method: 'default'
        })
        // 通过Rendition.display渲染电子书
        this.rendition.display()
        this.rendition.on('touchstart', (e) => {
          this.touchStartX = e.changedTouches[0].clientX
          this.touchStartTime = e.timeStamp
        })
        this.rendition.on('touchend', (e) => {
          const offsetX = e.changedTouches[0].clientX - this.touchStartX
          const time = e.timeStamp - this.touchStartTime
          if (time < 500) {
            if (offsetX > 40) this.prevPage()
            if (offsetX < -40) this.nextPage()
            this.handleHideTools() // 翻页时候隐藏上下工具栏
          } else {
            this.toggleShowTools()
          }
          e.preventDefault()
          e.stopPropagation()
        })

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
      },
      // 注册主题
      registerTheme() {
        this.themeList.forEach(theme => {
          this.themes.register(theme.name, theme.style)
        })
      },
      // 设置主题
      setTheme(index) {
        this.themes.select(this.themeList[index].name)
        this.defaultTheme = index
      },
      // progress进度条的数值（0-100）
      onProgressChange(progress) {
        const percentage = progress / 100
        const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
        this.rendition.display(location)
      },
      // 根据链接跳转指定位置
      jumpTo(link) {
        this.rendition.display(link)
        this.handleHideCatalogue()
      },
      // 上一页
      prevPage() {
        this.rendition && this.rendition.prev()
      },
      // 下一页
      nextPage() {
        this.rendition && this.rendition.next()
      },
      // 点击中间切换上下工具栏显示隐藏
      toggleShowTools() {
        this.setMenuVisible(!this.menuVisible)
        if (!this.menuVisible) {
          this.setSettingVisible(-1)
          this.setFontFamilyVisible(false)
        }
      },
      // 隐藏上下工具栏
      // 点击目录icon隐藏上下工具栏，显示目录
      // 点击目录隐藏目录
      // 点击目录遮罩隐藏目录
      handleHideTools() {
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      },
      // 显示目录
      handleShowCatalogue() {
        this.handleHideTools()
        this.isShowCatalogue = true
      },
      // 隐藏目录
      handleHideCatalogue() {
        this.isShowCatalogue = false
      }
    },
    mounted() {
      const filename = this.$route.params.filename.split('|').join('/')
      this.setFilename(filename).then(() => {
        this.initEpub()
      })
    }
  }
</script>

<style scoped lang="scss">

</style>
