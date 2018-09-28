import React, { Component } from 'react';
import {View, Text, TouchableOpacity,TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { loginRequest } from '../../ducks/users';
import { Actions } from 'react-native-router-flux';

const emailIcon = (<Icon name="envelope" size={20} color="rgb(132,141,140)" />);
const passwordIcon = (<Icon name="lock" size={30} color="rgb(132,141,140)" />);
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password:''
    }
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'rgb(250,129,63)', justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={{backgroundColor: 'white', width: 350, justifyContent: 'center',padding: 20, borderRadius: 10}}>
          <Text style ={{textAlign: 'center', color: 'rgb(250,129,63)', fontSize: 25}}>
            Thông tin tài khoản
          </Text>
          <View style={{ height: 100, margin: 10 }}>
            <View style={{flexDirection:'row', paddingVertical: 10, marginVertical: 10}}>
              {emailIcon}
              <TextInput style={{ flex:1, marginHorizontal: 5, paddingHorizontal: 10, borderColor: 'gray',  }}
                onChangeText={(text) => this.setState({ email: text})}
                value={this.state.email}
                placeholder='Email'
              />
            </View>
            <View style={{flexDirection:'row', paddingVertical: 10, marginVertical: 10}} >
              {passwordIcon}
              <TextInput style={{ flex:1, margin: 5, paddingHorizontal: 10, borderColor: 'rgb(204,204,204)',  }}
                onChangeText={(text) => this.setState({ password: text})}
                value={this.state.password}
                placeholder='Mật khẩu'
              />
            </View>
          </View>
          <View style={{justifyContent: 'space-around', alignItems: 'center', marginTop: 30, marginBottom: 100}}>
            <TouchableOpacity
              style={{ padding: 10, margin: 10, width: 250, height: 45, borderRadius: 10, backgroundColor:'rgb(250,129,63)' }}
              onPress={()=>{

                const {email, password} = this.state;

                if(!email.length || !password.length){
                  Alert.alert('Vui lòng điền email và mật khẩu');
                  return;
                }
                // Actions.jobs();
                if(this.props.isLogin) Actions.jobs();
                 else Alert.alert('Email hoặc mật khẩu không đúng');
                this.props.onLoginAction({email : email, password: password});

              }}
            >
              <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  return{
    isLogin: state.isLogin,
  };
}
const mapDispatchToProps = (dispatch) => {
  return{
    onLoginAction:  (user) =>{
      dispatch(loginRequest(user));
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(Login);
