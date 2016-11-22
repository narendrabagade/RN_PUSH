import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import componentStyles from './styles/common/commonStyles'
import responsiveStyles from './styles/common/responsiveStyles'
import HomeData from './screenData/homeData'
import CodePush from "react-native-code-push";

const s = StyleSheet.create(componentStyles)

const rs = StyleSheet.create(responsiveStyles)
const styles = StyleSheet.create({
  containerMain: {
    flexDirection : 'row',
    backgroundColor: '#FFFFFF',
    paddingTop : 80

  },
  rowStyles: {
    padding: 1
  },
  linHght20: {
    lineHeight : 20
  }
})

export default class RN_PUSH extends Component {
  componentDidMount(){
    CodePush.allowRestart();
  }

  render() {
    const rowData = HomeData.links
    const configureHomeDivs = rowData.map((r, i) => {
      let pushIcon = 0
      if (r.availableForYards.indexOf('2') > -1) {
        pushIcon = 1
      } else if (r.availableForYards === 'ALL' && r.exceptYards.indexOf('2') < 0) {
        pushIcon = 1
      }
      if (pushIcon === 1 && this.props.homeYard !== '' && this.props.homeYard !== null) {
        return (
          <TouchableWithoutFeedback key={i} onPress={() => {
            this.handleClicks(r)
          }} >
            <View style={[s.flexFull,s.justifyCenter, s.borderRightGreyThin, s.borderBottomGreyThin, s.alignItemsCenter, rs.containerWidth]}>

              <View style={[s.flexRow, s.flexWrap]}>
                <Image resizeMode={'contain'} source={r.icon} style={rs.homeImgStyles} />
              </View>
              <Text style={[s.fontCenter, s.fontBlack, s.fontBold, s.topPaddingSm, rs.emFontSizeM]}>{r.title}</Text>
            </View>
          </TouchableWithoutFeedback>
       )
      }
    })
    return (
          <View style={[s.flexFull, styles.containerMain]}>
          <View style={[s.flexFull]} >
          <Image source={require('./styles/images/logo.png')} style={[s.logoImage, s.alignSelfCenter, s.topMarginSm, s.bottomMargin30] }/>
          <View style={[s.flexRowWrap, s.borderTopGreyThin, s.justifyCenter, s.bottomMarginSm]}>
          {configureHomeDivs}
          </View>
          <View style={[s.alignItemsCenter, s.fullPaddingLg]}>
          <TouchableHighlight
            underlayColor="white"
            >
            <Image
              resizeMode={'contain'}
              source={require('./styles/images/blue-arrow.png')}
            />
            </TouchableHighlight>
            <Text style={[s.fontBold, s.fontBlack]}>Sync</Text>
            </View>
          </View>
          </View>
   )
  }
}
// Fully silent update which keeps the app in
// sync with the server, without ever
// interrupting the end user
//RN_PUSH = CodePush(RN_PUSH);

/*Same as 1, except we check for updates, or apply an update if one exists every time the app returns to the foreground after being “backgrounded”*/
RN_PUSH = CodePush({ checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, installMode: CodePush.InstallMode.ON_NEXT_RESUME })(RN_PUSH);

/* Active update, which lets the end user know
 about each update, and displays it to them
 immediately after downloading it*/
//  var updateDialogOptions = {
//         updateTitle: "You have an update",
//         mandatoryContinueButtonLabel:"Install"
//     };
// RN_PUSH = CodePush({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE })(RN_PUSH);

AppRegistry.registerComponent('RN_PUSH', () => RN_PUSH);
