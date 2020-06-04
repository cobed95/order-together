import React from 'react';
import {Header} from 'react-native-elements';
import {AppColors} from '../global';

const AppHeader = () => (
  <Header
    statusBarProps={{barStyle: 'light-content'}}
    barStyle="light-content"
    backgroundColor={AppColors.primary}
    leftComponent={{icon: 'menu', color: AppColors.backgroundText}}
    centerComponent={{
      text: '쉐어마트',
      style: {
        color: AppColors.backgroundText,
        fontSize: 20,
        fontWeight: 'bold',
      },
    }}
    rightComponent={{
      icon: 'account-circle',
      color: AppColors.backgroundText,
    }}
  />
);

export default AppHeader;
