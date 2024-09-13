import React from 'react'
import { View,StyleSheet } from 'react-native'
import { colors } from '../../globals/Colors'
import Eventcard from '../../components/Custom/Eventcard'

function Events() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.viewww}>
<Eventcard/>
</View>
            </View>
            </View>
            )}
export default Events


const styles=StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor:'#383737'
      },
      viewww:{
        backgroundColor:colors.lightText,
            height:"100.7%", 
            width:"97%",
            top:-6,left:5
      }
})