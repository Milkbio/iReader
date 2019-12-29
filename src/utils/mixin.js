import {mapGetters, mapActions} from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible',
      'settingVisible',
      'defaultFontSize',
      'currentBook'
    ])
  },
  methods: {
    ...mapActions([
      'setFilename',
      'setMenuVisible',
      'setSettingVisible',
      'setDefaultFontSize',
      'setCurrentBook'
    ])
  }
}
