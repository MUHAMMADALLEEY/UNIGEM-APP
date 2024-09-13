import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';

function Post({ imagess }) {
  const renderImages = () => {
    switch (imagess.length) {
      case 1:
        return (
          <Image
            style={[styles.fullImage, { width: '100%' }]}
            source={imagess[0]}
          />
        );
      case 2:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={[styles.halfImage, { marginRight: 4 }]}
              source={imagess[0]}
            />
            <Image
              style={styles.halfImage}
              source={imagess[1]}
            />
          </View>
        );
      case 3:
        return (
          <View style={styles.threeImagesContainer}>
            <Image
              style={[styles.leftImage,{marginRight:4}]}
              source={imagess[0]}
            />
            <View style={styles.rightContainer}>
              <Image
                style={[styles.rightImage, { marginBottom: 4 }]}
                source={imagess[1]}
              />
              <Image
                style={styles.rightImage}
                source={imagess[2]}
              />
            </View>
          </View>
        );
      case 4:
      default:
        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Image
              style={[styles.quarterImage, { marginRight: 4, marginBottom: 4 }]}
              source={imagess[0]}
            />
            <Image
              style={[styles.quarterImage, { marginBottom: 4 }]}
              source={imagess[1]}
            />
            <Image
              style={[styles.quarterImage, { marginRight: 4 }]}
              source={imagess[2]}
            />
            <Image
              style={styles.quarterImage}
              source={imagess[3]}
            />
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{ flexDirection: "row", height: 100, left: 4 }}>
          <Image
            style={styles.image}
            source={require('../../assets/cambridge.jpeg')}
          />
          <CustomText  style={{ paddingVertical: 6, paddingHorizontal: 10, fontWeight: "bold", color: "black" }}>
            Muhammad Ali
          </CustomText >
          <CustomText  style={{ paddingVertical: 24, left: -110 }}>45m</CustomText >
        </View>
        <CustomText  style={styles.moreIcon}>...</CustomText >
      </View>
      
      {renderImages()}
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    marginTop: 9,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
    height: 60,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    left: 3,
  },
  timeText: {
    position: 'absolute',
    bottom: -11,
    left: 2,
    fontSize: 12,
    color: '#666',
  },
  moreIcon: {
    fontSize: 24,
    color: '#666',
    marginRight: 16,
  },
  fullImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    marginBottom: 8, 
  },
  halfImage: {
    width: '49%',
    height: 200,
    resizeMode: 'cover',
  },
  quarterImage: {
    width: '49%',
    height: 120,
    resizeMode: 'cover',
  },
  threeImagesContainer: {
    flexDirection: 'row',
  },
  leftImage: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
  },
  rightContainer: {
    width: '50%',
    flexDirection: 'column',
  },
  rightImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});
