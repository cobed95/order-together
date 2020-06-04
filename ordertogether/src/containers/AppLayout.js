import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

const AppLayout = (props) => {
  const {Child} = props;

  return (
    <SafeAreaView>
      <ScrollView>
        <Child />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLayout;
