import React from 'react';
import { FlatList, Image, Text, View, Dimensions, Pressable, StyleSheet } from 'react-native';
import { eventss } from './Constant';
import { colors } from '../../globals/Colors';
import { useNavigation } from '@react-navigation/native';

function Eventcard() {
  const { width } = Dimensions.get('window');
  const itemWidth = (width / 2) - 15.9; 
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const { image, name, date,location } = item;

    return (
   <Pressable onPress={() => navigation.navigate("carddetail", { item })}>
  <View style={[styles.card, { width: itemWidth }]}>
    {image && (
      <Image 
        source={image} 
        style={styles.image} 
      />
    )}
    <Text style={styles.name} numberOfLines={10}>
      {name}
    </Text>
    <View style={styles.details}>
      <Text style={styles.detailText} numberOfLines={3}>{date}</Text>
    </View>
    <Text>{location}</Text>
  </View>
</Pressable>
 );
  };

  return (
    <FlatList 
      data={eventss}  
      style={styles.flatList}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={styles.columnWrapper}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    maxHeight:"100%"  },
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 7, 
    marginHorizontal: 6,
    padding: 10,
    left:-2,
    alignItems: "flex-start",
    backgroundColor: "#fff",
    height: 230,
  },
  image: {
    width: '105%', 
    height: 120,
    left:-4, 
    resizeMode: 'cover',
  },
  name: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    width: '100%',
    color:colors.darkText
  },
  details: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  detailText: {
    fontSize: 13,
    fontWeight:"500",
    color:colors.textColor
  },
  columnWrapper: {
    justifyContent: 'space-between',
  }
});

export default Eventcard;
