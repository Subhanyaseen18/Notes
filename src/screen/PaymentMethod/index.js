import {View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../components/CustomText';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {Colours} from '../../components/Colors';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../components/Snackbar';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icons from 'react-native-vector-icons/Ionicons';
export default function PaymentMethod(props) {
  const styles = useThemeAwareObject(createstyles);

  const focus = useIsFocused();

  const handledata = values => {
    firestore()
      .collection('payment')
      .add({
        method: values.addmethod,
      })
      .then(() => {
        SnackBar('Payment added!', true, 'short');
        props.navigation.goBack();
      });
  };

  const Edit = yup.object().shape({
    addmethod: yup.string().required('Please enter payment method'),
  });
  return (
    <Formik
      initialValues={{addmethod: ''}}
      validateOnMount={true}
      onSubmit={(values, {resetForm}) => {
        handledata(values);
        resetForm({values: ''});
      }}
      validationSchema={Edit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,

        isValid,
        values,
        touched,
        errors,
      }) => (
        <View style={styles.Container}>
         <View style={styles.Containerheading}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.openDrawer()}>
          <Icons name="menu-sharp" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>Payment Method</Text>

        <Text></Text>
      </View>
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingtext}>Add Method:</Text>
          </View>
          <View
            style={[
              styles. Containertextinput,

              {
                borderColor:
                  errors.addmethod && touched.addmethod
                    ? Colours.red
                    : Colours.Wild_Sand,
              },
            ]}>
            <TextInput
              textAlignVertical="top"
              onChangeText={handleChange('addmethod')}
              onBlur={handleBlur('addmethod')}
              value={values.addmethod}
              multiline={true}
              style={styles.textinput}
              placeholder="Enter project Name"></TextInput>
          </View>
          {errors.addmethod && touched.addmethod && (
            <Text style={styles.eror}>{errors.addmethod}</Text>
          )}
          <View style={styles.ContainerMainbtn}>
            <TouchableOpacity
              style={styles.containerBtn}
              onPress={() => handleSubmit()}>
              <Text style={styles.btntext}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
