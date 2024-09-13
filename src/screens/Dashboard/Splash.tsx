import React from 'react'
import TabNavigator from '../../navigation/TabNavigator'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../globals/Colors'

const Splash = () => {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,  
  },
})

export default Splash