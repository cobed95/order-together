import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../global';
import OrderRequest from '../components/OrderRequest';

const Order = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <OrderRequest {...route.params} navigation={navigation} />
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
