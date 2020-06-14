import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {AppColors} from '../global';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DeliverySuccess = ({routes, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>주문하신 상품이 배달됐습니다.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="라이더 평가하기"
          buttonStyle={{
            backgroundColor: Colors.white,
            margin: 10,
          }}
          titleStyle={{
            color: AppColors.primary,
          }}
          onPress={() => navigation.navigate('OnDelivery')}
        />
        <Button
          title="나중에 할래요"
          buttonStyle={{
            backgroundColor: Colors.white,
            margin: 10,
          }}
          titleStyle={{
            color: AppColors.primary,
          }}
          onPress={() => navigation.navigate('Main')}
        />
      </View>
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
    paddingBottom: 50,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default DeliverySuccess;
