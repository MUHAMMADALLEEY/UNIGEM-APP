import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auths/Login';
import Register from '../screens/auths/Register';
const Stack = createStackNavigator();
const AuthStack = () => {

    return (
        <Stack.Navigator initialRouteName='login'>
         <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
            </Stack.Navigator>
    ) 
}

export default AuthStack