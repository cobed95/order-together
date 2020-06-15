import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AppLayout from '../containers/AppLayout';
import Recommendation from '../components/Recommendation';
import {AppColors, products, User} from '../global';

import samdasoo from '../../static/samdasoo.jpg';
import shampoo from '../../static/elastine.png';
import chamgreen from '../../static/chamgreen.jpeg';
import toothpaste from '../../static/2080.jpg';
import soap from '../../static/soap.jpg';

const images = {samdasoo, shampoo, chamgreen, toothpaste, soap};

const Main = ({navigation}) => {
  products.forEach((product, i) => {
    product.image = images[product.image];
  });

  const MainContent = () => (
    <View>
      <Text style={styles.title}>{`${User.region}의 오늘의 추천`}</Text>
      {products.map((product, i) => (
        <Recommendation
          {...product}
          navigation={navigation}
          key={`recommendation${i}`}
        />
      ))}
    </View>
  );

  return AppLayout({Child: MainContent});
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: AppColors.primary,
    backgroundColor: Colors.white,
    padding: 10,
  },
});

export default Main;
