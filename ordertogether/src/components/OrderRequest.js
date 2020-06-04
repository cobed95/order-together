import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button, Card, Image} from 'react-native-elements';

const OrderRequest = (props) => {
  const {name, image, volume, demand, price, batchSize, navigation} = props;

  return (
    <Card>
      <View style={styles.content}>
        <Image
          source={image}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text
          style={
            styles.productName
          }>{`${name} ${volume.value}${volume.unit} ${batchSize}개 묶음`}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="취소할게요"
            onPress={() => navigation.navigate('Main')}
            buttonStyle={{width: 150}}
          />
          <Button
            title="주문할래요"
            onPress={() => navigation.navigate('Wait')}
            buttonStyle={{width: 150}}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 225,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productName: {
    margin: 10,
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default OrderRequest;
