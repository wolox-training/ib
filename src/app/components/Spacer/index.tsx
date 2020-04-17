import React from 'react';
import {View} from 'react-native';

const Spacer = ({width = 0, height = 0}) => {
  return (
    <View
      style={{
        height,
        width
      }}
    />
  );
};

export default Spacer;
