import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './src/navigation/MyStack'
import { Platform, View } from 'react-native'
import { colors } from './src/globals/Colors'
import { Provider } from 'react-redux'
import store from './src/store'
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message'
const App = () => {
  
  return (
    <Provider store={store}>

      <NavigationContainer>
      {/* <View style={{backgroundColor:'#000'}}> */}
        <MyStack />
        <Toast topOffset={Platform.OS==='ios'?30:20}/>
      {/* </View> */}
      </NavigationContainer>

    </Provider>
  )
}

export default App