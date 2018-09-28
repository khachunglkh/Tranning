import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
const layers = (<Icon name="layers" size={20} color="rgb(236,98,52)" />);
const heart = (<Entypo name="heart" size={15} color="#fff" />);
const paper_plane = (<Entypo name="paper-plane" size={15} color="#fff" />);
import { fetchDetailsAction } from '../../ducks/details'
import { connect } from 'react-redux';import _ from 'lodash'
import level from '../../constants/level'



class JobDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    if (this.props.token) {
      this.props.fetchDetailsAction(this.props._id)
    }


  }

  componentDidUpdate(prevProps, prevState, snapshot){

    if (prevProps.token != this.props.token) {
      this.props.fetchDetailsAction(this.props._id)
    }
  }
  render(){
    const { details } = this.props
    if (_.isEmpty(details)) {
      return null
    }
    const {level} = this.props.details
    console.log('level',level.level)
    return(
      <View style={styles.detailContainer}>
      <ScrollView>
        <View style={styles.detailItem}>
          <View style={styles.detailAvatar}>
            <Image
              style={styles.detailImage}
              source={{uri: 'https://joby.vn/assets/img/logo-full.png'}}
            />
          </View>
          <Text style={styles.detailTitle}>{this.props.details.title}</Text>
          <View style ={styles.detailMeta}>
            <Text style ={styles.detailKm}>
              {this.props.details.km}
            </Text>
            <Text style ={styles.detailSalary}>
              {this.props.details.salary} triệu
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
              {this.props.details.worklocation[0].district}
            </Text>
          </View>
          <View style ={styles.detailMeta1}>
            <Text style ={styles.orange}>
              Ngành nghề:
            </Text>

              <FlatList
                data={this.props.details.categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  console.log('categories',this.props.details.categories)
                  return (
                    <Text style={styles.gray}>{item.title}</Text>
                  )
                }}
              />

          </View>
          <View style ={styles.detailMeta1}>
            <View style={styles.detailMeta2}>
              <Text style ={styles.orange}>
                Cấp bậc:
              </Text>
              <Text style={styles.gray}>
                {this.props.details.level}
              </Text>
            </View>
            <View style={styles.detailMeta3}>
              <Text style={styles.gray}>
                Toàn thời gian
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailItem}>
          <View style={styles.detailTop}>
            {layers}
            <Text style={styles.h1}>Yêu cầu công việc</Text>
          </View>
          <View>
            <Text>{this.props.details.job_require}</Text>
          </View>
        </View>
        <View style={styles.detailItem}>
          <View style={styles.detailTop} >
            {layers}
            <Text style={styles.h1}>Mô tả công</Text>
          </View>
          <View>
            <Text>{this.props.details.job_description}</Text>
          </View>
        </View>

        </ScrollView>
        <View style={styles.detailBottom}>
          <TouchableOpacity style={styles.detailButton1}
            onPress ={()=>{
              Alert.alert('Lưu công việc thành công')
            }}
          >

            <Text style={styles.detailButtonText}>
              {heart} Lưu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailButton2}
            onPress ={()=>{
            Alert.alert('Gửi ứng tuyển thành công')
          }}
          >
            <Text style={styles.detailButtonText}>
              {paper_plane} Ứng tuyển
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  const { jobs } = state.job
  // const { details } = state.detail
  return {
    details: state.detail.details.job,
    jobs: jobs,
    token: state.user.token
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchDetailsAction: (_id) => dispatch(fetchDetailsAction(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
