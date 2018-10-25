import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'
import styles from './styles'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const briefcase = (<SimpleLineIcons name="briefcase" size={22} color="#fc5830)" />);
export default class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image style={styles.bannerImage} source={require('../../img/nha_hang_khach_san.jpg')}/>
        </View>
        <View style={styles.search}>
          <View style={styles.searchOptions}>
            <View>
              {briefcase}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
