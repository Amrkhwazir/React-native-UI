import React from 'react'
import { View, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const OnboardSecond = ({navigation}) => {
  return (
      <SafeAreaView style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
      }}>
          <Image source={require("../../assets/Journey-pana.png")}
              style={{
              height: 400,
              width: "100%",
          }} />
          <View style={{
              backgroundColor: "white",
              height: 300,
              paddingVertical: "10px",
              paddingHorizontal: "10px",
              
          }}>
              <Text style={{
                  fontSize: 24,
                  fontWeight: "700",
                  marginBottom: 30,
                  alignSelf: "center",
                  textAlign: "center"

              }}>Connect's The People You Want </Text>
              <Text style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum quae, sit, dignissimos consectetur minima voluptates incidunt soluta maiores assumenda natus! Sed doloremque quae atque, quam at accusamus dolor blanditiis?</Text>
              <Text style={{
                  backgroundColor: "#FF5733",
                  color: "white",
                  paddingTop: 5,
                  paddingLeft: 15,
                  width: 60,
                  height: 30,
                  borderRadius: 50,
                  position: "absolute",
                  right: 20,
                  bottom: 50
                  
              }}  onPress={()=> navigation.navigate("OnboardThird")}  >Next</Text>
          </View>
    </SafeAreaView>
  )
}

export default OnboardSecond