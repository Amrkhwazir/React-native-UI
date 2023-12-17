import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { GoogleAuthProvider, auth, provider, signInWithEmailAndPassword, getRedirectResult } from '../../firebaseConfig';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  // login   
    const loginHandler = () => {

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)

    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, "error message")
    // ..
  });
};


// Google authentication
const googleAuthHAndler = () => {
    
    getRedirectResult(auth)
    .then((result) => {
      console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
        console.log(user,token, "===> user")
       
      }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
    
        const email = error.customData.email;
    
        const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode,errorMessage, "error found")
      });

}


  return (
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require("../../assets/Secure login-pana.png")}
                    style={{width:"100%",height:"35%", marginBottom: "35px"}}
                />
                <Text
              style={{
                     fontWeight: 700,
                     fontSize:24,
                     alignSelf:"center",
                     marginBottom: "20px"
                 }}
                >Login And Enjoy 
                Your Journey!</Text>

                <Text
                style={{    
                    marginHorizontal:55,
                    textAlign:'center',
                    opacity:0.4,
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:25,
                    paddingHorizontal:10,
                    borderColor:"#FF5733",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    {/* <Icon name="mail" color="#FF5733" size={24}/> */}
              <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#FF5733"
                        onChangeText={(text) => setEmail(text)}
                  style={{
                      paddingHorizontal: 10, color: "#FF5733",
                      outline: "none"
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
                    paddingVertical:2,
                }}>
                  
              <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#FF5733"
                        onChangeText={(text) => setPassword(text)}
                  style={{
                      paddingHorizontal: 10,
                    color: "#FF5733", outline: "none" }}
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
                }} onPress={googleAuthHAndler}>Google</Text>
                </View>
                <Text     
                style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,
                    paddingVertical:7,
                    borderRadius:23,
                    borderWidth:2,
                    textAlign: "center",
                    color: "#ff5733",
                    borderColor: "#ff5733",
                    fontWeight: "500"
                }} onPress={loginHandler}>Login</Text>
            </View>
  )
}

export default Login