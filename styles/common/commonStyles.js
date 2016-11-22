/**
 * @providesModule commonStyles
 */

const HEADER_HEIGHT = 64

module.exports = {
  container: {
    paddingTop: HEADER_HEIGHT + 150
  },

  content: {
    flex: 1,
    padding: 20
  },
  footer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0
  },
  input: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderColor: 'orange',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  button: {
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
    backgroundColor: 'orange',
    color: 'white'
  },
  label: {
    color: 'orange',
    padding: 5,
    fontWeight: "700",
    fontStyle: 'italic'
  },
  errorText: {
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    fontWeight: "700",
    fontStyle: 'italic'
  },

  flexFull: {
    flex: 1
  },
  flexHalf: {
    flex: 0.5
  },
  flexThird: {
    flex: 0.33
  },
  flexForty: {
    flex: 0.40
  },
  flexOneFourth: {
    flex: 0.25
  },
  flexOneFifth: {
    flex: 0.20
  },
  flexFifteen: {
    flex: 0.15
  },
  flexEighteen: {
    flex: 0.18
  },
  flexOne: {
    flex: 0.11
  },
  flexEighty: {
    flex: 0.80
  },
  flexTwoThird: {
    flex: 0.66
  },
  flexFour: {
    flex: 4
  },
  flexNine: {
    flex: 9
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // alignItems: 'flex-start',
  },
  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  flexColumn: {
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  flexColumnWrap: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end'
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start'
  },
  alignSelfCenter: {
    alignSelf: 'center'
  },
  alignSelfStretch: {
    alignSelf: 'stretch'
  },
  overflowVisible: {
    overflow: 'visible'
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  positionFullHeight: {
    top: 0,
    bottom: 0
  },
  positionSet: {
    position: 'absolute'
  },
  positionFullWidth: {
    right: 0,
    left: 0
  },
  fullMargin: {
    margin: 10,
  },
  fullMarginLg: {
    margin: 15,
  },
  fullMarginXLg: {
    margin: 15,
  },
  fullMarginSm: {
    margin: 5,
  },
  fullMarginXSm: {
    margin: 3,
  },
  fullMarginNone: {
    margin: 0,
  },
  leftMargin: {
    left: 40,
  },
  righMargin: {
    left: 40,
  },
  leftMarginSm: {
    left: 10,
  },
  sideMargin: {
    marginLeft: 10,
    marginRight: 10
  },
  sideMarginMd: {
    marginLeft: 5,
    marginRight: 5
  },
  sideMarginXSm: {
    marginLeft: 3,
    marginRight: 3
  },
  sideMarginRight: {
    marginRight: 10
  },
  sideMarginRightXXLg: {
    marginRight: 60
  },
  sideMarginLg: {
    marginLeft: 30,
    marginRight: 40
  },
  sideMarginLeftXXLg: {
    marginLeft: 50
  },
  sideMarginLeftXLg: {
    marginLeft: 30
  },
  sideMarginLeftLg: {
    marginLeft: 15
  },
  sideMarginLeft: {
    marginLeft: 10
  },
  sideMarginLefts: {
    marginLeft: 5
  },
  topMargin: {
    marginTop: 63,
  },
  topMarginhead: {
    marginTop: 55,
  },
  topMarginLg: {
    marginTop: 80,
  },
  topMarginSm: {
    marginTop: 5,
  },
  topMarginMd: {
    marginTop: 20,
  },
  topMarginXMd: {
    marginTop: 10,
  },
  bottomMargin: {
    marginBottom: 10
  },
  bottomMarginSm: {
    marginBottom: 5
  },
  bottomMargin30: {
    marginBottom: 30
  },
  fullPadding: {
    padding: 5,
  },
  textPadding: {
    padding: 12,
  },
  bottomMarginLg: {
    marginBottom: 60
  },
  bottomMarginNone: {
    marginBottom: 0
  },
  fullPaddingLg: {
    padding: 15,
  },
  fullPaddingSm: {
    padding: 5,
  },
  fullPaddingNone: {
    padding: 0,
  },
  sidePadding: {
    paddingLeft: 10,
    paddingRight: 10
  },
  sidePaddingSm: {
    paddingLeft: 5,
    paddingRight: 5
  },
  sidePaddingLeft: {
    paddingLeft: 10,
  },
  sidePaddingLeftLg: {
    paddingLeft: 20,
  },
  sidePaddingLeft30: {
    paddingLeft: 30,
  },
  sidePaddingLeftMd: {
    paddingLeft: 7
  },
  sidePaddingLeftSm: {
    paddingLeft: 5
  },
  sidePaddingLeftXXLg: {
    paddingLeft: 50
  },
  sidePaddingRight: {
    paddingRight: 10,
  },
  sidePaddingRightLg: {
    paddingRight: 50,
  },
  sidePaddingRightSm: {
    paddingRight: 5
  },
  verticalPadding: {
    paddingTop: 10,
    paddingBottom: 10
  },
  topPaddingXXLg: {
    paddingTop: 70
  },
  topPaddingXLg: {
    paddingTop: 36
  },
  topPaddingLg: {
    paddingTop: 14
  },
  topPadding: {
    paddingTop: 30
  },
  topPaddingMd: {
    paddingTop: 10
  },
  topPaddingSm: {
    paddingTop: 5
  },
  topPaddingXSm: {
    paddingTop: 3
  },
  bottomPadding: {
    paddingBottom: 10
  },
  borderBottomGreyThin: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#d2d2d2',
  },
  borderTopGreyThin: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#d2d2d2',
  },
  borderRightGreyThin: {
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#d2d2d2',
  },
  borderLeftGreyThin: {
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: '#d2d2d2',
  },
  borderFullGreyThin: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d2d2d2',
  },
  borderRadius: {
    borderRadius: 5,
  },
  GreenCheckborderRadius: {
    borderRadius: 50,
  },
  borderRadiusSm: {
    borderRadius: 3,
  },
  fontBlack: {
    color: '#000'
  },
  fontOffBlack: {
    color: '#444'
  },
  fontWhite: {
    color: '#FFF'
  },
  fontGrey: {
    color: '#777'
  },
  fontBrandColor: {
    color: '#005ABC'
  },
  fontLightGrey: {
    color: 'rgb(180, 180, 180)'
  },
  fontBlue: {
    fontSize: 15,
    color: '#005abb'
  },
  fontLightindigo: {
    color: '#3964C3'
  },
  fontPositiveColor: {
    color: 'rgb(66, 149, 59)'
  },
  fontNegativeColor: {
    color: '#FE2E2E'
  },
  fontBold: {
    fontWeight: 'bold'
  },
  fontLight: {
    fontWeight: '200'
  },
  fontLightMd: {
    fontWeight: '500'
  },
  fontXXSm: {
    fontSize: 5
  },
  fontXSm: {
    fontSize: 10
  },
  fontSm: {
    fontSize: 11
  },
  fontMd: {
    fontSize: 12
  },
  fontXMd: {
    fontSize: 13
  },
  fontLg: {
    fontSize: 14
  },
  fontXLg: {
    fontSize: 16
  },
  fontXXLg: {
    fontSize: 18
  },
  fontCenter: {
    textAlign: 'center'
  },
  fontRight: {
    textAlign: 'right'
  },
  textAlignWrap: {
    flexWrap: 'wrap'
  },
  backgroundRed: {
    backgroundColor: 'red',
  },
  backgroundTransparent: {
    backgroundColor: 'transparent',
  },
  backgroundBrand: {
    backgroundColor: '#005abc'
  },
  backgroundBrandDeselect: {
    backgroundColor: '#FFFF00'
  },
  backgroundSuccess: {
    backgroundColor: 'rgb(76, 176, 64)',
  },
  backgroundSuccessDark: {
    backgroundColor: 'rgb(45, 106, 38)',
  },
  backgroundError: {
    backgroundColor: 'rgb(201, 41, 41)',
  },
  backgroundErrorDark: {
    backgroundColor: 'rgb(149, 33, 33)',
  },
  backgroundSectionColor: {
    backgroundColor: 'rgb(230, 229, 224)',
  },
  backgroundWhite: {
    backgroundColor: '#fff',
  },
  backgroundGrey: {
    backgroundColor: '#ccc',
  },
  backgroundLightGrey: {
    backgroundColor: '#ddd',
  },
  backgroundDarkGrey: {
    backgroundColor: 'rgb(128, 128, 128)',
  },
  backgroundOffBlack: {
    backgroundColor: '#222',
  },
  backgroundOffCell: {
    backgroundColor: 'rgb(226, 228, 228)',
  },
  backgroundOffSetting: {
    backgroundColor: 'rgb(230, 229, 223)',
  },
  height1: {
    height: 1
  },
  height15: {
    height: 15
  },
  height25: {
    height: 25
  },
  height30: {
    height: 30
  },
  height40: {
    height: 40
  },
  height50: {
    height: 50
  },
  height60: {
    height: 60
  },
  height75: {
    height: 75
  },
  height82: {
    height: 82
  },
  height85: {
    height: 85
  },
  height100: {
    height: 100
  },
  height160: {
    height: 160
  },
  height500: {
    height: 550
  },
  height700: {
    height: 800
  },
  width1: {
    width: 1
  },
  width30: {
    width: 30
  },
  width40: {
    width: 40
  },
  width50: {
    width: 50
  },
  width100: {
    width: 100
  },
  width125: {
    width: 125
  },
  width135: {
    width: 135
  },
  width150: {
    width: 150
  },
  width155: {
    width: 155
  },
  width160: {
    width: 160
  },
  width180: {
    width: 180
  },
  width210: {
    width: 210
  },
  width220: {
    width: 220
  },
  width250: {
    width: 250
  },
  width260: {
    width: 260
  },
  width300: {
    width: 300
  },
  width345: {
    width: 345
  },
  row: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: 360
  },
  rowWrapperImageHeaderView: {
    flex: 1,
    flexDirection: 'row',
    width: 245
  },
  rowMargingRight: {
    marginRight: 5
  },
  rowMargingTop: {
    marginTop: 10
  },
  title: {
    flex: 1,
    marginLeft: 10,
    color: '#4078C0',
    fontWeight: 'bold'
  },
  blackTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  regularBlackTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: '#000000',
  },
  lotDetailTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  whiteTitle: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  headingview: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 26,
    color: '#ccc'
  },
  Termsand:
  {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 5,
    justifyContent: 'center',
  //backgroundColor:'yellow',

  },
  Buttons:
  {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
  },
  terms: {
    color: 'red',
    fontSize: 10,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 15,
    letterSpacing: 0.1,
    fontWeight: 'bold',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  flexDirectionRow:
  {
    flexDirection: 'row',
  },
  flexDirectionColumn:
  {
    flexDirection: 'column',
  },
  ImageSize: {
    width: 96,
    height: 72
  },
  OutBidTextStyle: {
    color: '#FFF',
    fontSize: 10
  },
  relativeposition: {
    position: 'relative'
  },
  drawerbgcolor: {
    backgroundColor: 'rgb(18, 63, 83)',
  },
  formbgcolor: {
    backgroundColor: 'white',
  },
  headingviewReg: {
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 5,
  },
  descriptionview: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 50,
  },
  inputview:
  {
    height: 100,

  },
  usernamepasswordlink: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    left: 10,
    right: 10,
  },
  usernamepasscontent: {
    fontSize: 12,
  },
  Signinview:
  {

    height: 50,
    top: 50,
    margin: 40,
    justifyContent: 'center',
  },

  Register:
  {
    flex: 1,
    backgroundColor: '#005abc',
    height: 30,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    borderRadius: 4,
    color: 'white',
    textAlign: 'center'
  },
  RegisteriOS:
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#005abc',
    padding: 10,
    height: 30,
    width: 350,
    marginRight: 5,
    borderRadius: 4,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  generalcontainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    top: 0,
    alignSelf: 'stretch'
  },
  bitInputButtonstyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 3,
    width: 50,
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  EditButtonstyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 3,
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'center'

  },
  SubmitButtonStyle: {
    borderRadius: 3,
    height: 48,
    backgroundColor: '#005abc',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 13
  },
  bidButtonStyle: {
    borderRadius: 3,
    height: 40,
    backgroundColor: '#005abc',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 13
  },
  registercontainer: {
    flex: 1,
    //marginTop: 50,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    backgroundColor: '#fff',
    top: 0,
    alignSelf: 'stretch'
  },
  registercontainerSignin: {
    flex: 1,
    //top: -10,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: 'stretch'
  },


  registercontent: {
    justifyContent: 'center'
  },
  registerheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

    alignItems: 'center',

  },
  registerheadingview: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  registerdescription: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'stretch',
    color: 'black'
  },
  registerEmail: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    flex: 1,
    padding: 3,
    margin: 10,
    alignSelf: 'stretch',

  },
  registerEmailtext: {
    color: '#777',
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  nestedChildField: {
    flex: 1,
    color: '#777',
    fontSize: 13,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',


  },
  nestedParentFields: {
    top: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',


  },
  registerRegister:
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#005abc',
    padding: 10,
    height: 30,
    width: 350,
    marginRight: 5,
    borderRadius: 4,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  registerButtons:
  {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
  //backgroundColor:'red',
  },
  registercheckboxcountainer:
  {
    borderRadius: 5,
    top: 40,
    marginLeft: 2,
  //backgroundColor:'blue'
  },
  registerDropdownview:
  {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  registerdropdown:
  {

    top: 10,
    height: 20,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  registerTermsand:
  {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    justifyContent: 'center',
  //backgroundColor:'yellow',

  },
  registerterms: {
    color: 'red',
    fontSize: 10,
    margin: 15,
    letterSpacing: 0.1,
    fontWeight: 'bold',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bbb',
  },
  aboutusroot: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ddd',
    alignSelf: 'stretch'
  },

  aboutusimage: {
    top: 10,
    height: 200,
    alignItems: 'center',
    backgroundColor: '#ddd',
    alignSelf: 'stretch',
  },
  aboutuscontainer: {
    top: 40,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    alignSelf: 'stretch',
  },

  aboutustextview: {
    top: 20,
  },

  aboutuscontent: {
    color: 'black',
    fontSize: 12,
    lineHeight: 20,
  },

  commonroot: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ddd',
    alignSelf: 'stretch'

  },
  commoncontainer: {
    margin: 10,
    padding: 5,
    top: 50,
    alignSelf: 'stretch',
  },

  depositcontent: {
    color: 'black',
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 8,
  },

  depositcontent1: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold'
  },
  commonphone:
  {
    color: '#2980b9',
    fontSize: 12,
  },

  depositviewalignment:
  {
    left: 3,
    right: 20,
    alignSelf: 'stretch',
    padding: 15,

  },
  paymentheader: {
    fontStyle: 'italic',
    paddingBottom: 15,
    color: 'black',
  },
  paymentcontent: {
    color: 'black',
    fontSize: 12,
    lineHeight: 20,
  },
  footerImage: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 5,
    bottom: -5,
    flexDirection: 'row',
    height: 30,
  },

  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  appsettingcontainer: {
    flex: 1,
    top: 60,
    flexDirection: 'column'
  },
  appInfoDetailcontainer: {
    flex: 1,
    flexDirection: 'column'
  },
  Segmentview: {
    alignItems: 'center',
    top: -8,
    justifyContent: 'center',

  },
  contactusHeading:
  {
    marginTop: 8,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',

  },
  hyperlink:
  {
    color: '#2980b9',
    fontSize: 12,
  },
  fontblack:
  {
    color: 'black',
    fontSize: 13,
  },
  Marginswitch:
  {
    marginTop: -15,
  },
  ModelBottomBorder:
  {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#2980b9',
  },
  fontCustomModel: {
    color: '#2980b9'
  },

  vehicleSourceRadioLabel:
  {
    fontSize: 12,
    color: '#000',
    marginLeft: 5,
    fontWeight: 'bold'
  },

  logoImage:
  {
    marginTop: 35,
    height: 60,
    width: 160,
  },

  userNameInput:
  {
    marginTop: 55,
    padding: 10,
    height: 40,
    width: 280,
    color: 'black',
    backgroundColor: 'white',
    alignSelf: 'center'
  },

  passwordInput:
  {
    height: 40,
    padding: 10,
    marginTop: 10,
    width: 280,
    color: 'black',
    backgroundColor: 'white',
    alignSelf: 'center'
  },

  login:
  {
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 280,
    padding: 4,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#005abb',
    color: 'white'
  },
  saveAndCompleteText:
  {
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 280,
    padding: 4,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#005abb',
    color: 'white'
  },
  unableToCompleteText:
  {
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 280,
    padding: 4,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white'
  },

  submitAllLots:
  {
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 360,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: '#005abb'
  },
  unableToComplete:
  {
    height: 40,
    backgroundColor: 'black',
  },
  saveAndComplete:
  {
    marginTop: 5,
    height: 40,
    backgroundColor: '#005abb',
  },
  switchHighlight:
  {
    marginTop: 20,
    borderColor: '#005abb',
    borderWidth: 1,
    height: 50,
    width: 75,
    backgroundColor: '#005abb',
  },
  switchNonHighlight:
  {
    marginTop: 20,
    borderColor: '#005abb',
    borderWidth: 1,
    height: 50,
    width: 75,
    backgroundColor: 'white',
  }
}
