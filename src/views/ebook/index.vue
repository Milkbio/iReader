<template>
  <section class="ebook">
    <ebook-title :isShow="isShowTools"/>
    <ebook-reader/>
  </section>
</template>

<script>
  import EbookReader from '@/components/ebook/EbookReader'
  import EbookTitle from '@/components/ebook/EbookTitle'

  export default {
    name: 'Index',
    components: {EbookReader, EbookTitle},
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
      console.log(this.$store)
    }
  }
</script>

<style scoped lang="scss">

</style>
