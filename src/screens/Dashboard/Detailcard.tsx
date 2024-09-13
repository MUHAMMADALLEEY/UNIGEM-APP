import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing Ionicons
import { colors } from '../../globals/Colors';

function CardDetail() {
  const route = useRoute();
  const navigation = useNavigation(); // Access the navigation object
  const { item } = route.params || {};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        <View style={styles.imageWrapper}>
          <Image 
            source={item.image} 
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {item.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sapien varius, scelerisque ipsum a, aliquet erat."}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 10,
    padding: 10,
  },
  cardContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 30,
  },
  imageWrapper: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495E",
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: "#95A5A6",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: "#95A5A6",
    marginBottom: 20,
  },
  descriptionWrapper: {
    backgroundColor: "#ECF0F1",
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },
  description: {
    fontSize: 16,
    color: "#7F8C8D",
    textAlign: "center",
  },
});

export default CardDetail;
