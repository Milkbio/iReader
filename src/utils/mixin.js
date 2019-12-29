import {mapGetters, mapActions} from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible',
      'settingVisible',
      'fontFamilyVisible',
      'defaultFontSize',
      'defaultFontFamily',
      'currentBook'
    ])
  },
  methods: {
    ...mapActions([
      'setFilename',
      'setMenuVisible',
      'setSettingVisible',
      'setFontFamilyVisible',
      'setDefaultFontSize',
      'setDefaultFontFamily',
      'setCurrentBook'
    ])
  }
}
