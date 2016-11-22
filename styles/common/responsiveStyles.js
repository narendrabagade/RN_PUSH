import { Dimensions } from 'react-native'

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width
const y = Dimensions.get('window').height
const deviceHeight = x
const ratioX = deviceHeight < 568 ? (deviceHeight < 375 ? 0.825 : 1.1) : 1.25

// We set our base font size value
const baseUnit = 16

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX

function em(value) {
  return unit * value
}

function widthUnit(val) {
  if (x < 720) {
    if (x < 325) {
      return val * 0.775 * x / 100
    }
    return val * 0.825 * x / 100
  }
  return val * 0.725 * x / 100
}

function totalWidth(val) {
  return val * x / 100
}

function px(val) {
  if (x < 720) {
    return val * (y > x ? 1 * y / 100 : 1 * x / 100)
  }
  return val * (y > x ? y / 100 : x / 100)
}

export default responsiveStyle = {
  Width5: {
    width: px(5)
  },
  Width25: {
    width: px(25)
  },
  widthUnit30: {
    width: widthUnit(58)
  },
  Width35: {
    width: px(35)
  },
  Width50: {
    width: px(50)
  },
  Width15: {
    width: px(15)
  },
  Width75: {
    width: px(40)
  },
  width90: {
    width: px(90)
  },
  widthSearchContent: {
    width: widthUnit(118)
  },
  height5: {
    height: px(5)
  },
  height6: {
    height: px(6)
  },
  height7: {
    height: px(7)
  },
  height8: {
    height: px(8)
  },
  height80: {
    height: px(60)
  },
  height20: {
    height: px(20)
  },
  height15: {
    height: px(15)
  },
  height10: {
    height: px(10)
  },
  height19: {
    height: px(19)
  },
  height22: {
    height: px(22)
  },
  height25: {
    height: px(25)
  },
  height30: {
    height: px(30)
  },
  rowDivs : {
    width: px(28),
    height: px(28)
  },
  imgStyles :  {
    width:  px(29),
    height: px(11),
    margin: px(2.5)
  },
  imgStylesCt :  {
    width:  px(44),
    height: px(11),
    margin: px(2.5)
  },
  navBar: {
    flex: 1,
    backgroundColor: '#005abc',
    height: px(18)
  },
  sbarStyle: {
    height: px(18)
  },
  srchInputStyle: {
    height: px(10)
  },
  inputWidth: {
    width: px(90)
  },
  ImageSize: {
    width: px(25),
    height: px(20)
  },
  searchImg: {
    width: widthUnit(30),
    height: px(12)
  },
  lotImg: {
    width: px(18),
    height: px(18)
  },
  paddingXs: {
    padding: px(1)
  },
  emFontSize1: {
    fontSize: em(1)
  },
  emFontSizeS: {
    fontSize: em(0.8)
  },
  emFontSize: {
    fontSize: em(1.1)
  },
  emFontSizeM: {
    fontSize: em(0.9)
  },
  emFontSizeXL: {
    fontSize: em(1.8)
  },
  biddinginputimgstyles: {
    height: px(3)
  },
  homeImgStyles: {
    width: px(6),
    height: px(6)
  },
  cameraImgStyles: {
    width: px(6),
    height: px(6)
  },
  syncImgStyles: {
    width: px(6),
    height: px(10)
  },
  containerWidth: {
    width: widthUnit(37),
    height: widthUnit(35)
  },
  imagecontainerWidth: {
    width: widthUnit(50),
    height: 150
  },
  borderRightBtm: {
    borderStyle: 'solid',
    borderColor: '#bbb',
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  borderBottom: {
    borderStyle: 'solid',
    borderColor: '#bbb',
    borderBottomWidth: 1,
  },
  borderRight: {
    borderStyle: 'solid',
    borderColor: '#bbb',
    borderRightWidth: 1,
  },
  borderBottomTopGreyThin: {
    borderStyle: 'solid',
    borderColor: '#DEDEDE',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  top50: {
    top: px(7)
  },
  globImgStyles: {
    width: px(3),
    height: px(3)
  },
  dropdwnImgStyles: {
    width: px(2.2),
    height: px(1.5),
    marginRight: 5,
    marginLeft: 5
  },
  paddingSearchBar: {
    padding: px(1),
  },
  searchBarFont: {
    fontSize: em(0.9)
  },
  clickthroughImgStyles: {
    width: px(1.25),
    height: px(2)
  },
  signInDes: {
    fontSize: em(0.9),
    marginTop: px(1.5),
    textAlign: 'center',
    color: '#55585D',
    width: widthUnit(80)
  },
  inputStyles: {
    borderBottomWidth: 1,
    color: 'red'
  },
  makeOfferInput: {
    height: 40,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderColor: '#DDD',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3
  },
  searchfilterWidth: {
    width: widthUnit(78)
  },
  empaddingXs: {
    padding: em(0.7)
  },
  empaddingMd: {
    padding: em(0.5)
  },
  bottomPadding: {
    paddingBottom: 5
  },
  fontLeft: {
    textAlign: 'left'
  },
  flexarrow: {
    flex: 0.05
  },
  flexarrowCurncy: {
    flex: 0.22
  },
  flexarrowSm: {
    flex: 0.03
  },
  flexFoutyFive: {
    flex: 0.45
  },
  fullWidth96: {
    width: totalWidth(96)
  },
  fullWidth100: {
    width: totalWidth(100)
  },
  lineHeight20: {
    lineHeight: 16
  }
}
