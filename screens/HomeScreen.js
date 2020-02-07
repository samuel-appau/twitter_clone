import React from 'react';
import {
  StyleSheet,
  Text,
  
  View,
} from 'react-native';



export default function HomeScreen() {
  return (
    <View style={{
      backgroundColor:"#4ce1a2",
      justifyContent:"center",
      alignItems:"center",
      flex:1
        
      }}>
      <Text style={{color:'#fff',
                    fontSize:17
      }}>Welcome to cscd322</Text>
    </View>
  )
};
