import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Header = ({ leftIcon, rightIcons }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name={leftIcon.name} size={leftIcon.size || 24} color={leftIcon.color || 'black'} />
      </TouchableOpacity>
      <View style={styles.rightIconsContainer}>
        {rightIcons.map((icon, index) => (
          <TouchableOpacity key={index} style={styles.iconContainer}>
            <Icon name={icon.name} size={icon.size || 24} color={icon.color || 'black'} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 8,
    backgroundColor: '#f8f8f8', 
    alignItems: 'center',
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});

export default Header;
