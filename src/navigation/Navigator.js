import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screen/Register';
import Login from '../screen/Login';
import Onboard from '../screen/Onboard';
import OnboardSecond from '../screen/OnboardSecond';
import OnboardThird from '../screen/OnboardThird';
import Home from '../screen/Home';
import Splash from '../screen/Splash';


const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Splash" component={Splash} /> */}
                <Stack.Screen name="Onboard" component={Onboard} />
                <Stack.Screen name="OnboardSecond" component={OnboardSecond} />
                <Stack.Screen name="OnboardThird" component={OnboardThird} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigator;