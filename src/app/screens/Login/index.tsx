import React, {useEffect, useState} from 'react';
import {View, Image, Text, ImageBackground, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
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
import { validateEmail, validatePassword } from 'src/utils/validations';

function Login({navigation}: any) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  useEffect(() => {
    dispatch(actions.getBooks());
  }, []);

  const handleSubmit = () => {
    if(!emailError && !passwordError){
      return navigation.navigate(Routes.Library, {user: email})
    }
    return ;
  };

  const allowSubmit = () => !!emailError || !!passwordError || !email || !password; 

  const handleEmailInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(value.nativeEvent.text);
    setEmailError(validateEmail(email));
  }

  const handlePasswordInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(value.nativeEvent.text);
    setPasswordError(validatePassword(password));
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={background} style={styles.background} >
        <Image source={icon}/>
        <View>
          <Text style={styles.inputTitle}>Email: </Text>
          <TextInput placeholder='nombre@tuEmail.com.ar' style={styles.input} onChange={handleEmailInput} keyboardType='email-address' returnKeyType="next" />
          {!!emailError && <Text style={styles.error}>{emailError}</Text>}
          <Spacer height={10}/>
          <Text style={styles.inputTitle}>Contraseña: </Text>
          <TextInput placeholder='Contraseña' style={styles.input} onChange={handlePasswordInput} secureTextEntry/>
          {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
        </View>
        <CustomButton title='INGRESAR' white onClick={handleSubmit} disable={allowSubmit()}/>
        <Text>Designed, developed and used by woloxers</Text>
      </ImageBackground>
    </View>
  );
}

export default Login;
