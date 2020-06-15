import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {AppColors} from '../global';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Wait = ({routes, navigation}) => {
  const [match, setMatch] = useState(false);

  setTimeout(() => {
    // navigation.navigate('MatchSuccess');
    setMatch(true);
  }, 2000);

  const Prompt = () => {
    if (!match)
      return <Text style={styles.message}>고객님의 주문이 처리중입니다.</Text>;

    return (
      <View>
        <Text style={styles.message}>함께 살 동료를 찾았어요!</Text>
        <Button
          title="주문하기"
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
    );
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={!match} size="large" color={Colors.white} />
      <Prompt />
      {/* <Text style={styles.message}>고객님의 주문이 처리중입니다.</Text> */}
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
});

export default Wait;
