import React from 'react'
import { useEffect } from 'react';
import { View, Text } from 'react-native';


const Splash = ({navigation}) => {

  useEffect(() => {
    const fakeTask = async () => {

      await new Promise(resolve => setTimeout(resolve, 5000));
      navigation.replace('Onboard');
    };

    fakeTask();
  }, [navigation]);

  return (
    <View>
      <Text>Red</Text>
  </View>
  )
}

export default Splash