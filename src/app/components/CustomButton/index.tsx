import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

function CustomButton({title = 'Press Me', white = false, onClick = () => null }){
  return (
    <TouchableHighlight onPress={onClick}>
      <View style={[styles.mainContainer, white && styles.white]}>
        <Text style={[styles.text, white && styles.white]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CustomButton;
