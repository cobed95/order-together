import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Divider, Icon} from 'react-native-elements';
import {AppColors} from '../global';

// const mapConstants = {
//   centroid: {
//     latitude: 126.9514432,
//     longitude: 37.4779071,
//   },
//   boundingBox: {
//     southWest: {
//       latitude: 126.9477396,
//       longitude: 37.474206,
//     },
//     northEast: {
//       latitude: 126.9550739,
//       longitude: 37.4779071,
//     },
//   },
// };

// const {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;

// const {latitude, longitude} = mapConstants.centroid;
// const {northEast, southWest} = mapConstants.boundingBox;
// const latitudeDelta = northEast.latitude - southWest.latitude;
// const longitudeDelta = latitudeDelta * ASPECT_RATIO;

// const initialRegion = {
//   latitude,
//   longitude,
//   latitudeDelta: 0.007,
//   longitudeDelta: 0.003,
// };

const initialRegion = {
  latitude: 37.480879420894354,
  latitudeDelta: 0.004912542396461106,
  longitude: 126.95289338716827,
  longitudeDelta: 0.004441738774744408,
};

const OnDelivery = ({routes, navigation}) => {
  const {latitude, longitude} = initialRegion;
  const [driverCoord, setDriverCoord] = useState({
    latitude: latitude - 0.003,
    longitude: longitude - 0.0006,
  });
  const [count, setCount] = useState(0);
  const onPress = () => {
    if (count >= 5) {
      navigation.navigate('DeliverySuccess');
    } else {
      setDriverCoord({
        latitude: driverCoord.latitude + 0.0005,
        longitude: driverCoord.longitude + 0.0001,
      });
      setCount(count + 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((cnt) => cnt + 1);
      setDriverCoord((coord) => ({
        latitude: coord.latitude + 0.0005,
        longitude: coord.longitude + 0.0001,
      }));
    }, 1000);
    return () => {
      if (count >= 5) {
        clearInterval(interval);
        navigation.navigate('DeliverySuccess');
      }
    };
  }, [navigation, count]);
  const listItems = [
    {
      type: 'circle',
      active: true,
      text: '배달자 상품수령',
      time: '20:01 PM',
    },
    {
      type: 'line',
      active: true,
    },
    {
      type: 'circle',
      active: true,
      text: '배달중',
      time: '20:15 PM',
    },
    {
      type: 'line',
      active: false,
    },
    {
      type: 'circle',
      active: false,
      text: '배달완료',
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={initialRegion}
        onRegionChange={(region) => console.log(region)}>
        <Marker coordinate={{latitude, longitude}}>
          <Icon
            name="home-circle"
            type="material-community"
            color="#FF0000"
            size={40}
          />
        </Marker>
        <Marker coordinate={driverCoord}>
          <Icon
            name="motorcycle"
            type="font-awesome"
            color={AppColors.bold}
            size={40}
          />
        </Marker>
      </MapView>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.driverInfo}>
            <View style={styles.driverDetails}>
              <Icon
                name="user-circle-o"
                type="font-awesome"
                color="#D3D3D3"
                size={40}
                style={styles.driverIcon}
              />
              <View style={styles.driverId}>
                <Text style={styles.grayText}>이은도 라이더님</Text>
                <Text style={styles.grayText}>자전거로 이동중</Text>
              </View>
            </View>
            <Text style={styles.call}>전화하기</Text>
          </View>
        </TouchableWithoutFeedback>
        <Divider style={styles.divider} />
        <View style={styles.driverInfo}>
          <View style={styles.timeLeft}>
            <Text style={styles.timeLeftNumber}>1</Text>
            <Text style={styles.timeLeftUnit}>분</Text>
          </View>
          <Text style={styles.willArriveAt}>20:20 PM 도착예정</Text>
        </View>
        <View style={styles.flex2}>
          <FlatList
            data={listItems}
            renderItem={({item}) => {
              const {type} = item;
              const color = item.active ? AppColors.primary : '#808080';
              if (type === 'circle') {
                return (
                  <Icon
                    name="check-circle"
                    type="ant-design"
                    color={color}
                    size={30}
                  />
                );
              } else if (item.active) {
                return <View style={styles.verticalLineActive} />;
              } else {
                return <View style={styles.verticalLineInactive} />;
              }
            }}
            keyExtractor={(item, idx) => `${idx}`}
          />
          <FlatList
            data={listItems}
            renderItem={({item}) => {
              if (item.type === 'circle') {
                return <Text style={styles.listText}>{item.text}</Text>;
              } else {
                return <View style={styles.blankSpace} />;
              }
            }}
            keyExtractor={(item, idx) => `fjf${idx}`}
          />
          <FlatList
            data={listItems}
            renderItem={({item}) => {
              if (item.type === 'circle' && item.active) {
                return <Text style={styles.timeText}>{item.time}</Text>;
              } else {
                return <View style={styles.blankSpace} />;
              }
            }}
            keyExtractor={(item, idx) => `fjaweifoi${idx}`}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#808080',
  },
  container: {
    flex: 1,
  },
  flex2: {
    flex: 2,
    flexDirection: 'row',
  },
  driverInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driverIcon: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  text: {
    flex: 1,
  },
  driverDetails: {
    flexDirection: 'row',
  },
  grayText: {
    color: '#808080',
  },
  driverId: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  call: {
    paddingRight: 20,
    color: AppColors.bold,
  },
  timeLeft: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'flex-end',
  },
  timeLeftNumber: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  timeLeftUnit: {
    paddingLeft: 5,
    paddingBottom: 10,
  },
  willArriveAt: {
    paddingRight: 20,
    color: '#808080',
  },
  verticalLineActive: {
    backgroundColor: AppColors.primary,
    height: 20,
    width: 5,
    alignSelf: 'center',
  },
  verticalLineInactive: {
    backgroundColor: '#808080',
    height: 20,
    width: 5,
    alignSelf: 'center',
  },
  blankSpace: {
    height: 20,
    width: 5,
  },
  listText: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    color: '#808080',
    height: 30,
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
});

export default OnDelivery;
