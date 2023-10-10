const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const COLOR_TEA_ROSE = "#F8C7CC"
const COLOR_CAMBRIDGE_BLUE = "#81A684"
const COLOR_VIRIDIAN = "#57886C"
const COLOR_FELDGRAU = "#466060"
const COLOR_RICH_BLACK = "#0E0F19"
const COLOR_WHITE = "#fff"

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  background: {
    backgroundColor: COLOR_RICH_BLACK,
    color: COLOR_WHITE
  },
  menu: {
    backgroundColor: COLOR_TEA_ROSE,
  },
  content: {
    backgroundColor: COLOR_CAMBRIDGE_BLUE,
    color: COLOR_WHITE,
    borderStyle: 'solid',
    borderColor: COLOR_RICH_BLACK,
    borderLeftWidth: 8,
    borderTopWidth: 3,
  },
  title1: {
    backgroundColor: COLOR_RICH_BLACK,
    color: COLOR_WHITE,
    paddingVertical: 26,
    paddingHorizontal: 100,
    fontSize: 32
  },
  title2: {
    backgroundColor: COLOR_FELDGRAU,
    color: COLOR_WHITE,
    padding: 26,
    fontSize: 32
  },
  contentText: {
    fontFamily: "Josefin_Slab",
    fontSize: 18,
    padding: 12,
    color: COLOR_RICH_BLACK
  }

};
