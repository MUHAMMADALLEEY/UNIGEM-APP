import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Dashboard/Home';
import SearchUniversity from '../screens/Dashboard/SearchUniversity';
import { Image, StyleSheet } from 'react-native';
import UserProfile from '../screens/Dashboard/UserProfile';
import Community from '../screens/Dashboard/Community';
import { colors } from '../globals/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    margin: 10,
 width:"100%",
 left:-10,
 bottom:-7,
                    borderRadius: 30,
                    padding: 5,
                    position: 'absolute',
                    backgroundColor: colors.primary,
                },
                tabBarActiveTintColor: 'blue', 
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/home.png')} style={[styll.imgg, { tintColor: color }]} />
                    ),
                    headerShown: false,
                }} 
            />
           
            <Tab.Screen 
                name="Community" 
                component={Community} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/community.png')} style={[styll.imgg, { tintColor: color }]} />
                    ),
                    headerShown: false,
                }} 
            />
         
            <Tab.Screen 
                name="SearchUniversity" 
                component={SearchUniversity} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/search.png')} style={[styll.imgg, { tintColor: color }]} />
                    ),
                    headerShown: false,
                }} 
            />
            <Tab.Screen 
                name="UserProfile" 
                component={UserProfile} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/profile.png')} style={[styll.imgg, { tintColor: color }]} />
                    ),
                    headerShown: false,
                }} 
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;

const styll = StyleSheet.create({
    imgg: {
        height: 30,
        width: 30,
    },
});
