import {View, Image, Button, TouchableOpacity,StatusBar} from 'react-native';
import React, {useState} from 'react';
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
import { Colours } from '../../components/Colors';
const CELL_COUNT = 4;
export default function Login(props) {
  const styles = useThemeAwareObject(createstyles);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [proops, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleSubmit = () => {
    if (value == 1234) {
      props.navigation.navigate('BottomStack');
    }else{
      SnackBar('Enter correct pasword', true, 'short');
    }
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
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
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
      <View>
        <TouchableOpacity style={styles.containerBtn} onPress={handleSubmit}>
          <Text style={styles.btntext}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
