import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../global';
import OrderRequest from '../components/OrderRequest';

const Order = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <OrderRequest {...route.params} navigation={navigation} />
      {/* <Text>Order Screen</Text>
      <Text>{name}</Text>
      <Button onPress={() => navigation.navigate('Main')} title="To Main" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
});

export default Order;
