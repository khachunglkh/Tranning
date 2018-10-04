import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
const layers = (<Icon name="layers" size={20} color="rgb(236,98,52)" />);
const heart = (<Entypo name="heart" size={15} color="#fff" />);
const paper_plane = (<Entypo name="paper-plane" size={15} color="#fff" />);


export default class JobDetail extends Component {
  render(){
    return(
      <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
          <View style={styles.detailAvatar}>
            <Image
              style={styles.detailImage}
              source={{uri: 'https://joby.vn/assets/img/logo-full.png'}}
            />
          </View>
          <Text style={styles.detailTitle}>{this.props.title}</Text>
          <View style ={styles.detailMeta}>
            <Text style ={styles.detailKm}>
              12km
            </Text>
            <Text style ={styles.detailSalary}>
              {this.props.salary} triệu
            </Text>
            <Text style ={styles.detailDate}>
              2 ngày trước
            </Text>
          </View>
          <View style ={styles.detailMeta1}>
            <Text style ={styles.orange}>
              Nơi làm việc:
            </Text>
            <Text style={styles.gray}>
              {this.props.district}
            </Text>
          </View>
          <View style ={styles.detailMeta1}>
            <Text style ={styles.orange}>
              Ngành nghề:
            </Text>
            <Text style={styles.gray}>
              Kế toán
            </Text>
          </View>
          <View style ={styles.detailMeta1}>
            <View style={styles.detailMeta2}>
              <Text style ={styles.orange}>
                Cấp bậc:
              </Text>
              <Text style={styles.gray}>
                Nhân viên
              </Text>
            </View>
            <View style={styles.detailMeta3}>
              <Text style={styles.gray}>
                Nhân viên
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailItem}>
          <View style={styles.detailTop}>
            {layers}
            <Text style={styles.h1}>Yêu cầu công việc</Text>
          </View>

        </View>
        <View style={styles.detailItem}>
          <View style={styles.detailTop} >
            {layers}
            <Text style={styles.h1}>Mô tả công</Text>
          </View>
        </View>
        <View style={styles.detailBottom}>
          <TouchableOpacity style={styles.detailButton1}>

            <Text style={styles.detailButtonText}>
              {heart} Lưu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailButton2}>
            <Text style={styles.detailButtonText}>
              {paper_plane} Ứng tuyển
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
