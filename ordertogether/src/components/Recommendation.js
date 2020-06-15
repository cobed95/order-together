import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button, Card, Image} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {User} from '../global';

const Recommendation = (props) => {
  const {
    name,
    image,
    volumeValue,
    volumeUnit,
    demand,
    priceAsUnit,
    priceAsBatch,
    batchSize,
    navigation,
  } = props;

  return (
    <Card style={styles.container}>
      <View style={styles.content}>
        <Image
          source={image}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.productName}>
          {`${name} ${volumeValue}${volumeUnit} ${batchSize}개 묶음`}
        </Text>
        <View style={styles.description}>
          <Text>{`${User.region} 현재 예상 수요: ${demand}`}</Text>
          <Text>{`낱개 가격: ₩${priceAsUnit}`}</Text>
          <Text>{`묶음 가격: ₩${priceAsBatch}`}</Text>
          <Text>{`묶음 성사시 낱개 가격: ₩${Math.floor(
            priceAsBatch / batchSize,
          )}`}</Text>
        </View>
        <Button
          title="지금 주문하기"
          onPress={() =>
            navigation.navigate('Order', {
              name,
              image,
              volumeValue,
              volumeUnit,
              demand,
              priceAsUnit,
              priceAsBatch,
              batchSize,
            })
          }
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 225,
  },
  productName: {
    margin: 10,
    fontSize: 20,
    width: 300,
    textAlign: 'center',
  },
  description: {
    margin: 10,
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});

export default Recommendation;
