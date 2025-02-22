import React, { Component } from 'react'
import {View} from 'react-native'
import { tokenRequestAction } from './ducks/users'
import { Router, Scene, Stack, Tabs, ActionConst } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import configureStore from './stores/store'
import Jobs from './components/jobs/jobs'
import Login from './components/users/login'
import JobDetail from './components/jobs/job-detail'

const store = configureStore()
export {store}
const RouterWithRedux = connect()(Router)

export default class App extends Component {
  constructor(props) {
    super(props)
    store.dispatch(tokenRequestAction())
  }
  render() {
    return(
      <Provider store={store}>
        <View style={{flex: 1}}>
          <RouterWithRedux>
            <Stack key="root" navigationBarStyle={{ backgroundColor: '#fff' }}
                titleStyle={{ color: '#586069', alignSelf: 'center' }}>
                <Scene key="jobs" component={Jobs} title="Jobs" back="true"/>
                <Scene key="login" component={Jobs} title="Login" initial/>
                <Scene key="jobdetail" component={JobDetail}  backTitle=" "	/>
            </Stack>
          </RouterWithRedux>
        </View>
       </Provider>
    )
  }
}
