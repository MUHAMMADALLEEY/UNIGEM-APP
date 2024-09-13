import React, { useState } from 'react';
import { View, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import CustomButton from '../../components/Custom/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../globals/Colors';

function CreatePost({ route }) {
  const { images } = route.params;
  const [caption, setCaption] = useState('');
  const renderImages = () => {
    
    console.log('Number of images:', images.length); 
    
    if (images.length === 1) {
      return <Image source={{ uri: images[0].uri }} style={styles.fullImage} />;
    }
  
    if (images.length === 2) {
      return (
        <View style={styles.row}>
          <Image source={{ uri: images[0].uri }} style={styles.halfImage} />
          <Image source={{ uri: images[1].uri }} style={styles.halfImage} />
        </View>
      );
    }
  
    if (images.length === 3) {
      return (
        <View style={styles.threeImagesContainer}>
          <Image style={styles.leftImage} source={{ uri: images[0].uri }} />
          <View style={styles.rightContainer}>
            <Image style={[styles.rightImage, { marginBottom: 4 }]} source={{ uri: images[1].uri }} />
            <Image style={styles.rightImage} source={{ uri: images[2].uri }} />
          </View>
        </View>
      );
    }
  
    if (images.length === 4) {
      return (
        <View style={styles.grid}>
          <Image source={{ uri: images[0].uri }} style={styles.gridImage} />
          <Image source={{ uri: images[1].uri }} style={styles.gridImage} />
          <Image source={{ uri: images[2].uri }} style={styles.gridImage} />
          <Image source={{ uri: images[3].uri }} style={styles.gridImage} />
        </View>
      );
    }
  
    return (
      <ScrollView horizontal style={styles.imageScrollView}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image.uri }} style={styles.img} />
        ))}
      </ScrollView>
    );
  };
  
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" style={styles.backIcon} size={20} color="white" />
      <TextInput
        style={styles.input}
        multiline
        placeholder="Add Your Thoughts"
        value={caption}
        onChangeText={setCaption}
        placeholderTextColor="#4e7297"
        textAlignVertical="top"
        onChange={(e) => {
          const text = e.nativeEvent.text;
          if (text.length <= 40) {
            setCaption(text);
          }
        }}
      />
<View style={styles.imageContainer}>
  {renderImages()}
</View>

      <View style={styles.buttonContainer}>
        <CustomButton title='Post' style={styles.buttonStyle} />
        <Icon style={styles.photoIcon} name="photo" size={30} color="white" />
      </View>
    </View>
  );
}

export default CreatePost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  buttonStyle: {
    height: 40,
    width: 216,
    paddingVertical: 6,
    marginLeft: 50,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
  fullImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  halfImage: {
    width: '48%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  gridImage: {
    width: '48%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  input: {
    height: 80,
    top: 30,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    width: '100%',
    borderColor: colors.primary,
    marginBottom: 15,
    color: colors.lightText,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    top: 16,
  },
  imageScrollView: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  threeImagesContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  leftImage: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
    marginRight: 4,
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
  backIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  photoIcon: {
    left: -9,
  },
  imageContainer: {
    marginTop: 25, 
    width: '100%',
    alignItems: 'center',
  },
});
