import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import { globalStyles } from '../../../constants/styles';
let { width, height } = Dimensions.get('window');

class GenreTab extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <ScrollView
        style={globalStyles.containerView}
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <View style={{ height: 180, width: width, marginBottom: 10 }}>
          <Text>Tab The loai</Text>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(GenreTab);