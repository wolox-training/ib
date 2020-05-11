import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

function CustomButton({title = 'Press Me', white = false, onClick = () => null, disable = false }){
  return (
    <TouchableHighlight onPress={onClick} disabled={disable}>
      <View style={[styles.mainContainer, (white && !disable) && styles.white, disable && styles.disable]}>
        <Text style={[styles.text, (white && !disable) && styles.white, disable && styles.disabledText]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CustomButton;
