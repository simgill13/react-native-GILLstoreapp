import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {StyleSheet,Linking,View,Text,Image,Button} from 'react-native';



class Home extends Component{

  static navigationOptions = {
    // used to hide the header
    // header: null,
    title:'title'
    
  }

  constructor(props){
    super(props)
  }

 

  render(){
     const { navigate } = this.props.navigation;
    return (
      <View>
        <Text >
          Hi, {this.props.test}| HELLOOOOOOOOOOO
        </Text> 

        <Button
          onPress={() => navigate('Second',{user:'sim'})}
          title=" Click here"
        /> 
      </View>
    );
  }
}




const mapStateToProps = ({first}) => ({
  test:first.test,
  
});

export default connect(mapStateToProps)(Home);












// const { navigate } = this.props.navigation;