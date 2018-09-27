import React, { Component } from 'react';
import {
    Text, View, Image
} from 'react-native';
import { connect } from 'react-redux'
import styles from './styles'

class Job extends Component{
    render(){
        return(
            <View style={styles.item}>
              <View style={styles.avatar}>
                <Image
                  style={ styles.image }
                  source={{uri: 'https://joby.vn/assets/img/logo-full.png'}}
                />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{this.props.item.title}</Text>
                <Text>{this.props.item.salary}</Text>
                <Text>{this.props.item.company.name}</Text>
              </View>
              <View style={styles.infoMeta}>
                <Text>{this.props.item.worklocation[0].province}</Text>
              </View>
            </View>
        )
    }
}

export default Job;
