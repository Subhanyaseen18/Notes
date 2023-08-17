import {View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../components/CustomText';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {Colours} from '../../components/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {Detail} from '../../Redux/Slice';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../components/Snackbar';
import {Formik} from 'formik';
import * as yup from 'yup';
export default function PaymentMethod(props) {
  const styles = useThemeAwareObject(createstyles);
  const {user} = useSelector(state => state.user);
  const [firebase, setfirebase] = useState([]);

  const focus = useIsFocused();

  const handledata = values => {
    firestore()
      .collection('payment')
      .add({
        paymentfrom: values.addmethod,
      })
      .then(() => {
        SnackBar('Payment added!', true, 'short');
        props.navigation.goBack();
      });
  };

  const Edit = yup.object().shape({
    addmethod: yup.string().required('Please enter addmethod'),
  });
  return (
    <Formik
      initialValues={{addmethod: ''}}
      validateOnMount={true}
      onSubmit={values => {
        handledata(values);
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
            <Text style={styles.heading}>Payment Method</Text>
          </View>
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingtext}>Add Method:</Text>
          </View>
          <View
            style={[
              styles.Containeredit,

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
