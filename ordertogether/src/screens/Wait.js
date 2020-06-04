import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../global';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Wait = ({routes, navigation}) => {
  setTimeout(() => {
    navigation.navigate('Main');
  }, 5000);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.white} />
      <Text style={styles.message}>고객님의 주문이 처리중입니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
  },
  message: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 50,
  },
});

export default Wait;
