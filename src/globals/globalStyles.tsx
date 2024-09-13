import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const globalStyles=StyleSheet.create({
    input:{
        padding:10,
        fontSize:15,
        borderWidth:1.6,
        borderColor:colors.borderGreen,
        width:'90%',
        borderRadius:10,
    },
    flexRowCenter:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    flexColCenter:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    flexRowSpaceBTW:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    }
})