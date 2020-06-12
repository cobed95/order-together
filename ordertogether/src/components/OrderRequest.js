import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button, Card, Image} from 'react-native-elements';
import {User} from '../global';

const OrderRequest = (props) => {
  const {name, image, volume, demand, price, batchSize, navigation} = props;
  const saving = price.asUnit - Math.floor(price.asBatch / batchSize);

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
        <View style={styles.messages}>
          <View style={styles.regionDemand}>
            <Text style={styles.region}>
              {`${User.region}의 이 상품에 대한 예측 수요는`}
            </Text>
            <Text style={styles.demand}>{`${demand}개`}</Text>
          </View>
          <View style={styles.regionDemand}>
            <Text style={styles.region}>공동 주문 하실 경우 개당</Text>
            <Text style={styles.demand}>{`${saving}원`}</Text>
            <Text style={styles.region}>절약하실 수 있습니다.</Text>
          </View>
        </View>
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
  messages: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginLeft: 10,
  },
  regionDemand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  region: {
    fontSize: 15,
    marginRight: 10,
  },
  demand: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default OrderRequest;
