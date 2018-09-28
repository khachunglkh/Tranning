import React, { Component } from 'react';
import {
  Text, View, FlatList, Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput, Keyboard, TouchableWithoutFeedback,
  RefreshControl
} from 'react-native'
import { connect } from 'react-redux';
import styles from './styles'
import _ from 'lodash'
import { fetchJobsAction } from '../../ducks/jobs'
import { fetchDetailsAction } from '../../ducks/details'
import Job from './job';


class Jobs extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.fetchJobsAction()
      this.props.fetchDetailsAction()
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevProps.token != this.props.token) {
      this.props.fetchJobsAction()
      // this.props.fetchDetailsAction()
    }
  }

  render() {
    const { jobs } = this.props.jobs
    if (_.isEmpty(jobs)) {
      return null
    }
    // const { details } = this.props.details
    // if (_.isEmpty(details)) {
    //   return null
    // }


    return(
      <View style={styles.container}>
        <FlatList
          data={jobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (

                <Job item={item} index={index}>
                </Job>


            );
          }}
        >
        </FlatList>
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { jobs } = state.job
  // const { details } = state.detail
  return {
    details: state.detail.details,
    jobs: jobs,
    token: state.user.token
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchJobsAction: () => dispatch(fetchJobsAction()),
  fetchDetailsAction: () => dispatch(fetchDetailsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
