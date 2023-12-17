import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { auth, createUserWithEmailAndPassword } from '../../firebaseConfig';

const Register = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const RegisterHandler = () => {
    //   console.log(email,password,username);

     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    setEmail("");
    setUsername("");
    setPassword("");
    navigation.navigate("Login");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, "error message");
    // ..
  });

    }

  return (
        <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require("../../assets/Computer login-pana.png")}
                    style={{width:"100%",height:"30%", marginBottom: "20px"}}
                />
                <Text
                 style={{
                     fontSize:24,
                    fontWeight: 600,
                     alignSelf:"center",
                 }}
                >Let's Engage With People's</Text>

                {/* <Text
                style={{
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text> */}

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#FF5733",
                    borderRadius:23,
                    paddingVertical:4
                }}>
                  
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#FF5733"
                        onChangeText={(text)=> setEmail(text)}
                        style={{paddingHorizontal:10, outline: "none"}}
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
                    paddingVertical:4
                }}>
                  
                    <TextInput
                        placeholder="username"
                        onChangeText={(text)=> setUsername(text)}
                        placeholderTextColor="#FF5733"
                        style={{paddingHorizontal:10, outline: "none"}}
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
                    paddingVertical:4
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={(text)=> setPassword(text)}
                        placeholderTextColor="#FF5733"
                        style={{paddingHorizontal:10, outline: "none"}}
                    />


                </View>
                {/* <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#FF5733",
                    borderRadius:23,
                    paddingVertical:4
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#FF5733"
                        style={{paddingHorizontal:10, outline: "none"}}
                    />
                    

                </View> */}

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:25,
                    backgroundColor:"#FF5733",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                }} onPress={()=> navigation.navigate("Login")}>Already a member</Text>
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,
                    backgroundColor:"#FF5733",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                    }} onPress={RegisterHandler} >Register</Text>
                </View>
              
            </View>
  )
}

export default Register