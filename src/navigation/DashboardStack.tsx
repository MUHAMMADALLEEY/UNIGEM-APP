import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './TabNavigator';
import Settings from '../screens/Dashboard/Settings';
import EditProfile from '../screens/Dashboard/EditProfile';
import Yourcommunity from '../screens/Dashboard/Yourcommunity';
import CreatePost from '../screens/Dashboard/CreatePost';
import CardDetail from '../screens/Dashboard/Detailcard';
const Stack = createStackNavigator();
const DashboardStack = () => {

    return (
        <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name='Tabs' component={TabNavigator} options={{headerShown:false}} />
           <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown:false}} />
           <Stack.Screen name='Settings' component={Settings} />
           <Stack.Screen name='yourcommunity' component={Yourcommunity} options={{headerShown:false}}/>
           <Stack.Screen name='createpost' component={CreatePost} options={{headerShown:false}}/>
           <Stack.Screen name='carddetail' component={CardDetail} options={{headerShown:false}}/>

        
            {/* <Stack.Screen name='SearchUniversity' component={SearchUniversity} />
            <Stack.Screen name='Community' component={Community} />
           <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown:true ,title:"Edit"}}/> */}
        </Stack.Navigator>
    ) 
}

export default DashboardStack