import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './styles';

export function withSpinner(Component: any) {
  return ({ isLoading, ...props }) =>
  isLoading
    ? <ActivityIndicator size='large' style={styles.spinner}/>
    : <Component { ...props } />
};
