import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {State} from 'src/app/interfaces/state';
import CustomButton from 'src/app/components/CustomButton';
import Routes from 'src/constants/routes';
import {TextInput} from 'react-native-gesture-handler';
import Spacer from 'src/app/components/Spacer';
import {validateEmail, validatePassword} from 'src/utils/validations';
import actions from 'src/redux/Auth/actions';
import icon from './assets/Group.png';
import background from './assets/bc_inicio.png';
import styles from './styles';

function Login({navigation}: any) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  const user = useSelector((state: State) => state.currentUser.user);

  const navigateToLibrary = async () => {
    const token = await AsyncStorage.getItem('access-token');
    if (token) {
      navigation.navigate(Routes.Library, {user: user.email});
    }
  };

  useEffect(() => {
    navigateToLibrary();
  }, [user]);

  const handleSubmit = () => {
    if (!emailError && !passwordError) {
      const newUser = {email, password};
      dispatch(actions.loginUser(newUser));
    }
    return null;
  };

  const allowSubmit = () => !!emailError || !!passwordError || !email || !password;

  const handleEmailInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(value.nativeEvent.text);
    setEmailError(validateEmail(email));
  };

  const handlePasswordInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(value.nativeEvent.text);
    setPasswordError(validatePassword(password));
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={background} style={styles.background}>
        <Image source={icon} />
        <View>
          <Text style={styles.inputTitle}>Email: </Text>
          <TextInput
            placeholder="nombre@tuEmail.com.ar"
            style={styles.input}
            onChange={handleEmailInput}
            keyboardType="email-address"
            returnKeyType="next"
          />
          {!!emailError && <Text style={styles.error}>{emailError}</Text>}
          <Spacer height={10} />
          <Text style={styles.inputTitle}>Contraseña: </Text>
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            onChange={handlePasswordInput}
            secureTextEntry
          />
          {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
        </View>
        <CustomButton title="INGRESAR" white onClick={handleSubmit} disable={allowSubmit()} />
        <Text>Designed, developed and used by woloxers</Text>
      </ImageBackground>
    </View>
  );
}

export default Login;
