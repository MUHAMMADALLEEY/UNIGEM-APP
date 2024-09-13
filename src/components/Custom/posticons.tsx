import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Posticons({ iconss }) { 
  return (
    <View style={styles.iconContainer}>
      {iconss.map((icon, index) => ( 
        <TouchableOpacity key={index} style={styles.iconStyle}>
          <Icon name={icon.name} size={icon.size || 24} color={icon.color || 'black'} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Posticons;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 40,
    width: '100%',
  },
  iconStyle: {
    marginHorizontal: 10,
  },
});
