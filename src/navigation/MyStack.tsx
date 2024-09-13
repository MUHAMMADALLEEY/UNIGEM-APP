import React from 'react';
import DashboardStack from './DashboardStack';
import { useAppSelector } from '../store/hooks';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Yourcommunity from '../screens/Dashboard/Yourcommunity';
const Stack = createNativeStackNavigator();
const MyStack = () => {
    const {authData} = useAppSelector((state: any) => state.authData);
    console.log(authData,"auth");
    return (
        <Stack.Navigator   screenOptions={{headerShown:false,
        animation:'slide_from_right'}}>
            {
             authData?.status===null?   
            <Stack.Screen name='Authstack' component={AuthStack} options={{headerShown:false}}/>
            : <Stack.Screen name='DashboardStack' component={DashboardStack} options={{headerShown:false}}
            
            />
            
            }
            </Stack.Navigator>
    )
}

export default MyStack