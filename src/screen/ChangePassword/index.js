import {View, Image, Button, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../components/CustomText';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
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
import Ico from 'react-native-vector-icons/Ionicons';
const CELL_COUNT = 6;
export default function ChangePassword(props) {
  const focus = useIsFocused();
  const styles = useThemeAwareObject(createstyles);
  const [valuenew, setValuenew] = useState('');
  const [valueold, setValueold] = useState('');
  const [loading, setloading] = useState(false);
  const ref = useBlurOnFulfill({valuenew, valueold, cellCount: CELL_COUNT});
  const [proops, getCellOnLayoutHandler] = useClearByFocusCell({
    valuenew,
    valueold,
    setValuenew,
    setValueold,
  });

  const firebasedata = () => {
    if (valueold.length == 6) {
      firestore()
        .collection('authentication')
        .get()
        .then(querySnapshot => {
          const usersArray = querySnapshot.docs.map(documentSnapshot => ({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          }));
          if (usersArray[0].password == valueold) {
           if(valuenew.length==6){
            firestore()
            .collection('authentication')
            .doc('authentication')
            .update({
              password: valuenew,
            })
            .then(() => {
              SnackBar('Password updated!', true, 'short');
              props.navigation.goBack()
              setValuenew('')
              setValueold('')
            });
           } else {
            SnackBar('Enter new pasword', true, 'short');
          }
          } else {
            SnackBar('Incorrect oldpasword', true, 'short');
          }
        });
    } else {
      SnackBar('Enter oldpasword!', true, 'short');
    }
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={Colours.softblue} barStyle="light-content" />
      <View style={styles.Containerheading}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.openDrawer()}>
          <Ico name="menu-sharp" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>ChangePassword</Text>

        <Text> </Text>
      </View>
      <View>
        <Text style={styles.headingnew}>Enter old password:</Text>
      </View>
      <View style={styles.Containercode}>
        <CodeField
          ref={ref}
          {...proops}
          value={valueold}
          onChangeText={setValueold}
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
      <View>
        <Text style={styles.headingnew}>Enter new password:</Text>
      </View>
      <View style={styles.Containercode}>
        <CodeField
          ref={ref}
          {...proops}
          value={valuenew}
          onChangeText={setValuenew}
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
        <Text style={styles.btntext}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
