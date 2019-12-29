<template>
  <section class="ebook">
    <ebook-title/>
    <ebook-reader/>
    <ebook-menu/>
  </section>
</template>

<script>
  import EbookReader from '@/components/ebook/EbookReader'
  import EbookTitle from '@/components/ebook/EbookTitle'
  import EbookMenu from '@/components/ebook/EbookMenu'

  export default {
    name: 'Index',
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    },
    data() {
      return {
        isShowTools: false,
        isShowCatalogue: false,
        themeList: [],
        defaultTheme: 0,
        // 读书是否处于可用状态
        bookAvailable: false
      }
    },
    methods: {

    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">

</style>
