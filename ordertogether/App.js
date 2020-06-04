/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppColors} from './src/global';

import Main from './src/screens/Main';
import Order from './src/screens/Order';
import Wait from './src/screens/Wait';
import MatchSuccess from './src/screens/MatchSuccess';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: '쉐어마트',
          headerStyle: {
            backgroundColor: AppColors.primary,
          },
          headerTintColor: Colors.white,
          // headerTintStyle: {
          //   fontWeight: 'bold',
          //   fontSize: 20,
          // },
          headerTitle: () => <Text style={styles.headerTitle}>쉐어마트</Text>,
          headerLeft: () => (
            <Icon
              name="menu"
              type="material"
              color={Colors.white}
              style={styles.icon}
            />
          ),
          headerRight: () => (
            <Icon
              name="account-circle"
              type="material"
              color={Colors.white}
              style={styles.icon}
            />
          ),
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Wait" component={Wait} />
        <Stack.Screen name="MatchSuccess" component={MatchSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  icon: {
    margin: 10,
  },
  headerTitle: {
    color: AppColors.backgroundText,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
