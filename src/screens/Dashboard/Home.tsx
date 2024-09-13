import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { colors } from '../../globals/Colors';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import firestore from '@react-native-firebase/firestore';
import { getProfile } from '../../store/Dashboard/asynThunk';
import { globalStyles } from '../../globals/globalStyles';
import CustomButton from '../../components/Custom/CustomButton';
import Events from './Events';

const Home = () => {
  const dispatch = useAppDispatch();
  const { authData } = useAppSelector((state: any) => state.authData);
  const userID = authData?.response?.uid;
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    const profileRef = firestore().collection('users').doc(userID);
    dispatch(getProfile(profileRef));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={{ width: '98%', top: 4, left: 2 }}>
          <Text style={styles.headertext}>Florida State University</Text>
        </View>

        <View style={styles.btnview}>
          <CustomButton
            title="Location"
            onPress={() => setShowMap(true)}
            style={{ marginRight: 30, paddingVertical: 11, height: 50, left: 5 }}
          />
          <CustomButton
            title="Events"
            onPress={() => setShowMap(false)}
            style={{ paddingVertical: 11, height: 50 }}
          />
        </View>
      </View>

      {showMap && (
        <View style={styles.searchView}>
          <TextInput
            style={[globalStyles.input, { backgroundColor: '#fff', width: '100%' }]}
            placeholder="Search location"
          />
        </View>
      )}

      {
      showMap ? (
        <MapView
          style={{ height: '83.3%', top: -7 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomControlEnabled={true}
          showsUserLocation={true}
          onMapReady={() => console.log('Map is ready')}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="My Marker" />
        </MapView>
      ) : (
        <Events />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 55,
    width: '100%',
    backgroundColor: '#383737',
  },
  headertext: {
    height: 50,
    color: colors.lightText,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: colors.primary,
  },
  btnview: {
    flexDirection: 'row',
    height: 70,
    top: -1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 90,
    marginHorizontal: -90,
  },
  searchView: {
    position: 'absolute',
    top: 120,
    left: 5,
    right: 5,
    zIndex: 1000,
    padding: 10,
    shadowOpacity: 0.1,
    elevation: 8,
  },
  eventContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Home;
