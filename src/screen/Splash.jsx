import React from 'react'
import { useEffect } from 'react';
import { View, Text } from 'react-native';


const Splash = ({navigation}) => {

  useEffect(() => {
    const fakeTask = async () => {

      await new Promise(resolve => setTimeout(resolve, 3000));
      navigation.replace('Onboard');
    };

    fakeTask();
  }, [navigation]);

  return (
    <View style={{width: "100%", height: "100%", backgroundColor: "#FF5733", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text style={{color: "white", textAlign: "center",}}>Red</Text>
  </View>
  )
}

export default Splash