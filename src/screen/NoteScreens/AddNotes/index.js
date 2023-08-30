import {TextInput, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modals from '../../../Popup';
import {Formik} from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import SnackBar from '../../../components/Snackbar';
import Icons from 'react-native-vector-icons/Ionicons';
export default function AddNotes(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [val, setval] = useState('');
  const [status, setstatus] = useState('Thinking');
  const styles = useThemeAwareObject(createstyles);
  const handleItemSelected = item => {
    setstatus(item);
  };
  const handledata = values => {
    setstatus('Thinking');
    {
      status == 'Completed'
        ? props.navigation.navigate('Complete')
        : props.navigation.navigate('New');
    }
    const currentTimestamp = firestore.Timestamp.fromDate(new Date());

    firestore()
      .collection('users')
      .add({
        status: status,
        note: values.editnotes,
        time: currentTimestamp,
      })
      .then(() => {
        SnackBar('Notes added!', true, 'short');
      });
  };
  const Edit = yup.object().shape({
    editnotes: yup.string().required('Please enter notes'),
  });
  return (
    <Formik
      initialValues={{editnotes: ''}}
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
            <Text style={styles.heading}>Add Notes</Text>

            <Text></Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Status:</Text>
            </View>
            <View style={styles.ContainerStatusedit}>
              <Text style={styles.notestext}>{status}</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon style={styles.icon} name="expand-more" size={40} />
              </TouchableOpacity>
            </View>

            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Notes:</Text>
            </View>

            <View
              style={[
                styles.Containertextinput,

                {
                  borderColor:
                    errors.editnotes && touched.editnotes
                      ? Colours.red
                      : Colours.sky,
                },
              ]}>
              <TextInput
                textAlignVertical="top"
                onChangeText={handleChange('editnotes')}
                onBlur={handleBlur('editnotes')}
                value={values.editnotes}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter Note"></TextInput>
            </View>
            {errors.editnotes && touched.editnotes && (
              <Text style={styles.eror}>{errors.editnotes}</Text>
            )}
            <View style={styles.MaincontainerBtn}>
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.containerBtn}>
                <Text style={styles.btntext}>Done</Text>
              </TouchableOpacity>
            </View>

            <Modals
              visible={modalVisible}
              ItemSelected={handleItemSelected}
              onClose={() => setModalVisible(false)}
            />
          </ScrollView>
        </View>
      )}
    </Formik>
  );
}
