import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {StyleSheet,Linking,View,Text,Image,Button} from 'react-native';



class Home extends Component{

  static navigationOptions = {
    // used to hide the header
    header: null,
    // title:'title'
    
  }

  constructor(props){
    super(props)
  }

 

  render(){
     

    return (
      <Image
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../../assets/test.png')}
      >
        <Text
          style={{
            backgroundColor: 'transparent',
            textAlign: 'center',
            fontSize: 30,
            padding: 40,
          }}
        >
          test
        </Text>
      </Image>
    );
  }
}




const mapStateToProps = ({first}) => ({
  test:first.test, 
});




export default connect(mapStateToProps)(Home);












// const { navigate } = this.props.navigation;