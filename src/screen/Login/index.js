import {View, Image, Button, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../components/CustomText';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {images} from '../../components/Imagespath';
import SnackBar from '../../components/Snackbar';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Colours} from '../../components/Colors';
import {useIsFocused} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native-paper';
const CELL_COUNT = 6;
export default function Login(props) {
  const focus = useIsFocused();
  const styles = useThemeAwareObject(createstyles);
  const [value, setValue] = useState('');
  const [loading, setloading] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [proops, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const firebasedata = () => {
    setloading(true);
    firestore()
      .collection('authentication')
      .get()
      .then(querySnapshot => {
        const usersArray = querySnapshot.docs.map(documentSnapshot => ({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        }));
        if (usersArray[0].password == value) {
          props.navigation.navigate('MyDrawer');
        } else {
          SnackBar('Incorrect pasword', true, 'short');
        }
      });
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={Colours.softblue} barStyle="light-content" />
      <View style={styles.Containerlogo}>
        <Image style={styles.logoimg} source={images.logologin} />
        <Text style={styles.heading}>Notes</Text>
      </View>
      <View style={styles.Containercode}>
        <CodeField
          ref={ref}
          {...proops}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <TouchableOpacity style={styles.containerBtn} onPress={firebasedata}>
        <Text style={styles.btntext}> Login</Text>
      </TouchableOpacity>
    </View>
  );
}
