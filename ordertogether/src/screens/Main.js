import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AppLayout from '../containers/AppLayout';
import Recommendation from '../components/Recommendation';
import {AppColors} from '../global';

import samdasoo from '../../static/samdasoo.jpg';
import shampoo from '../../static/elastine.png';
import chamgreen from '../../static/chamgreen.jpeg';
import toothpaste from '../../static/2080.jpg';
import soap from '../../static/soap.jpg';

const images = {samdasoo, shampoo, chamgreen, toothpaste, soap};

const Main = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () =>
    Promise.all(
      [
        'http://localhost:8083/v1/products',
        'http://localhost:8083/v1/mock',
      ].map((url) => fetch(url).then((res) => res.json())),
    );

  useEffect(() => {
    const initial = () =>
      getData().then(([p, u]) => {
        p.forEach((product, i) => {
          product.image = images[product.image];
        });
        setProducts(p);
        setUsers(u);
        setIsLoading(false);
      });
    initial();
  }, []);

  const [user] = users;

  const MainContent = () =>
    isLoading ? (
      <View>
        <Text>데이터를 불러오는 중입니다</Text>
      </View>
    ) : (
      <View>
        <Text style={styles.title}>{`${user.region}의 오늘의 추천`}</Text>
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
