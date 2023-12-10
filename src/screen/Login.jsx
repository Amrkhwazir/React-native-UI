import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source =""
                    style={{width:"100%",height:"35%"}}
                />
                <Text
              style={{
                     fontWeight: 700,
                     fontSize:26,
                     alignSelf:"center",
                 }}
                >Login And Enjoy Your Journey!</Text>

                <Text
                style={{
                    
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#FF5733",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    {/* <Icon name="mail" color="#FF5733" size={24}/> */}
              <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#FF5733"
                  style={{
                      paddingHorizontal: 10, color: "#FF5733",
                            }}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#FF5733",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    {/* <Icon name="mail" color="#FF5733" size={24}/> */}
              <TextInput 
                        placeholder="Password"
                        placeholderTextColor="#FF5733"
                  style={{
                      paddingHorizontal: 10,
                    color: "#FF5733" }}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#FF5733",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                }} onPress={()=> navigation.navigate("Register")}>Already a member</Text>
                </View>
                <Text     
                style={{
                    alignSelf:"center",
                    color:"#FF5733",
                  paddingVertical: 30,
                    fontWeight: "bold"
                }} onPress={()=>navigation.navigate("Home")}>Login</Text>
            </View>
  )
}

export default Login