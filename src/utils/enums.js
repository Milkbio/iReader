export const FONT_SIZE_LIST = [
  {fontSize: 12},
  {fontSize: 14},
  {fontSize: 16},
  {fontSize: 18},
  {fontSize: 20},
  {fontSize: 22},
  {fontSize: 24}
]

export const FONT_FAMILY_LIST = [
  {font: 'Default'},
  {font: 'Cabin'},
  {font: 'Days One'},
  {font: 'Montserrat'},
  {font: 'Tangerine'}
]

const VUE_APP_RES_URL = process.env.VUE_APP_RES_URL
const path = '/resource/fonts/'
export const FONT_URL_LIST = [
  `${VUE_APP_RES_URL + path}cabin.css`,
  `${VUE_APP_RES_URL + path}daysOne.css`,
  `${VUE_APP_RES_URL + path}montserrat.css`,
  `${VUE_APP_RES_URL + path}tangerine.css`
]
