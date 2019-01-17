import React from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import colors from '../../constants/colors';
import GenreTab from './GenreTab';
import DiscoveryTab from './DiscoveryTab';
import FindStoryTab from './FindStoryTab';
// import { LY_THUYET, MO_RONG, THUC_HANH, IC_MENU } from '../../constants/linkImages';
let { width, height } = Dimensions.get('window');
import { MyStatusBar } from '../../components/MyStatusBar';
import { TabView } from 'react-native-tab-view';
import { DrawerActions } from 'react-navigation';
import { connect } from "react-redux";
import { globalStyles } from '../../constants/styles';

class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'Genre', title: 'Genre' },
        { key: 'Discovery', title: 'Discovery' },
        { key: 'FindStory', title: 'FindStory' },
      ],
    };

  }

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? colors.colorPrimaryDark : 'gray')
            ),
          });
          let tintColor = i === this.state.index ? colors.colorPrimaryDark : 'gray';
          // let iconName = 'ios-analytics-outline';
          // let n = i % 3;
          // if (n === 0) {
          //   iconName = LY_THUYET
          // }
          // if (n === 1) {
          //   iconName = THUC_HANH
          // }
          // if (n === 2) {
          //   iconName = MO_RONG
          // }
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              activeOpacity={0.1}
              onPress={() => this.setState({ index: i })}
            >
              {/* <Image source={iconName} style={[styles.iconTab, { tintColor: tintColor }]} /> */}
              <Animated.Text style={{ color, fontSize: 12 }}
              >
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'Genre':
        return (
          <GenreTab
            navigation={this.props.navigation}
          />
        );
      case 'Discovery':
        return (
          <DiscoveryTab
            navigation={this.props.navigation}
          />
        );
      case 'FindStory':
        return (
          <FindStoryTab
            navigation={this.props.navigation}
            toggleBottomTab={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              this.setState(prevState => ({
                expandedBottomTab: !prevState.expandedBottomTab
              }))
            }}
            valueSelectBottom={this.state.valueSelectBottom}
            isActived={this.state.index === 3}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar backgroundColor={colors.colorPrimaryDark} />
        <View style={{ flexDirection: 'row', width: width, backgroundColor: colors.colorPrimary, padding: 15 }}>
          <TouchableOpacity onPress={() => { this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}>
            {/* <Image source={IC_MENU} style={{ width: 24, height: 24, tintColor: 'white' }} /> */}
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
            <Text style={globalStyles.styleTextToolbar}>Ôn thi giấy phép lái xe</Text>
          </View>

        </View>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          swipeEnabled
          onIndexChange={index => this.setState({ index })}
          tabBarPosition='bottom'
          renderTabBar={this._renderTabBar}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 60
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  iconTab: {
    resizeMode: 'contain',
    height: 22,
    width: 22,
    marginBottom: 5
  },
  labelStyle: {

  },
  typeQuestionBox: {
    height: 25,
    width: 25,
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: "center",
    marginLeft: 5,
    marginTop: 2
  }
});

function mapStateToProps(state) {
  return {

  };
}
// export default HomeScreen;
export default connect(mapStateToProps, null)(HomeScreen);
