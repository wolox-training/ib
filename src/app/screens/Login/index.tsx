import React, {useEffect} from 'react';
import {View, Image, Text, ImageBackground, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {State} from 'src/app/interfaces/state';
import styles from './styles';
import actions from '../../../redux/Books/actions';
import background from './assets/bc_inicio.png';
import icon from './assets/Group.png';
import CustomButton from 'src/app/components/CustomButton';
import Routes from 'src/constants/routes';
import { TextInput } from 'react-native-gesture-handler';
import Spacer from 'src/app/components/Spacer';

function Login({navigation}: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBooks());
  }, []);

  const handleClick = () => navigation.navigate(Routes.Library);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={background} style={styles.background} >
        <Image source={icon}/>
        <View>
          <Text style={styles.inputTitle}>Email: </Text>
          <TextInput placeholder='nombre@tuEmail.com.ar' style={styles.input}/>
          <Spacer height={10}/>
          <Text style={styles.inputTitle}>Contraseña: </Text>
          <TextInput placeholder='Contraseña' style={styles.input}/>
        </View>
        <CustomButton title='INGRESAR' white onClick={handleClick}/>
        <Text>Designed, developed and used by woloxers</Text>
      </ImageBackground>
    </View>
  );
}

export default Login;
