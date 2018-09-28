import React, { Component } from 'react';
import {
    Text, View, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import styles from './styles'
import { Actions } from 'react-native-router-flux';

class Job extends Component{
    render(){
        return(
          <TouchableOpacity
            onPress={ ()=>
              Actions.jobdetail({
                title: this.props.item.title,
                renderTitle: this.props.item.title,
                company: this.props.item.company.name,
                salary: this.props.item.salary,
                province: this.props.item.worklocation[0].province,
                street: this.props.item.worklocation[0].street,
                district: this.props.item.worklocation[0].district
              })
            }
          >
            <View style={styles.item}>
              <View style={styles.avatar}>
                <Image
                  style={ styles.image }
                  source={{uri: 'https://joby.vn/assets/img/logo-full.png'}}
                />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{this.props.item.title}</Text>
                <Text>{this.props.item.company.name}</Text>
                <Text>{this.props.item.salary} triệu đồng</Text>
                <Text>{this.props.item.worklocation[0].province}</Text>
              </View>
              <View style={styles.infoMeta}>
                <Text style={{textAlign: 'center',  color: 'rgb(234,109,57)'}}>12 km</Text>
              </View>
            </View>
            </TouchableOpacity>
        )
    }
}

export default Job;
