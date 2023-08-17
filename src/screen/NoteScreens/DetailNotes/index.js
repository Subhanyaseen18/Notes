import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import Modals from '../../../Popup';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Icones from 'react-native-vector-icons/MaterialIcons';
import SnackBar from '../../../components/Snackbar';
export default function DetailNotes(props) {
  const styles = useThemeAwareObject(createstyles);
  const [editable, seteditable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setstatus] = useState(props.route.params.status);

  const handledata = values => {
   
    {
      editable == false
        ?  props.navigation.goBack()
        : firestore()
            .collection('users')
            .doc(props.route.params.id)
            .update({
              status: status,
              note: values.editnotes,
            })
            .then(() => {
              SnackBar('Notes updated!', true, 'short');
            });

      seteditable(false);
    }
   
  };
  const handleItemSelected = item => {
    setstatus(item);
  };
  const handledelete = () => {
    props.navigation.goBack()

    firestore()
      .collection('users')
      .doc(props.route.params.id)
      .delete()
      .then(() => {
        SnackBar('Notes deleted!', true, 'short');
      });
  };

  const Edit = yup.object().shape({
    editnotes: yup
      .string()

      .required('Please enter firstname')
    
  });
  return (
    <Formik
      initialValues={{
        editnotes: props.route.params.note,
      }}
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
            <TouchableOpacity
              style={styles.backarrow}
              onPress={() => props.navigation.goBack()}>
              <Icon name="leftcircle" size={40} style={styles.Bariconcolor} />
            </TouchableOpacity>
            <Text style={styles.heading}>Details</Text>
            {editable == false ? (
              <TouchableOpacity onPress={() => seteditable(true)}>
                <Icons name="edit" size={40} style={styles.Bariconcolor} />
              </TouchableOpacity>
            ) : (
              <Text> </Text>
            )}
          </View>
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingtext}>Status:</Text>
          </View>
          <View
            style={
              editable == false
                ? styles.ContainerStatus
                : styles.ContainerStatusedit
            }>
            <Text style={styles.statustext}>{status}.</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              {editable == true && <Icones name="expand-more" size={50} />}
            </TouchableOpacity>
          </View>
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingtext}>Notes:</Text>
          </View>
          <View style={styles.Containernotes}>
            <TextInput
              editable={editable}
              style={
                editable == false
                  ? styles.notestext
                  : [
                      styles.editnotetext,
                      {
                        borderColor:
                          errors.editnotes && touched.editnotes
                            ? Colours.red
                            : Colours.lightblack,
                      },
                    ]
              }
              onChangeText={handleChange('editnotes')}
              onBlur={handleBlur('editnotes')}
              value={values.editnotes}
              placeholderTextColor={'rgba(0, 0, 0,0.3)'}
              placeholder="Enter Notes"
              multiline></TextInput>
          </View>

          <View style={styles.MaincontainerBtn}>
            {editable == true ? (
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.containerBtn}>
                  <Text style={styles.btntext}>status</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handledelete()}>
                <View style={styles.containerBtn}>
                  <Text style={styles.btntext}>Delete</Text>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.containerBtn}
              onPress={() => handleSubmit()}>
              <Text style={styles.btntext}>Done</Text>
            </TouchableOpacity>
          </View>
          <Modals
            visible={modalVisible}
            ItemSelected={handleItemSelected}
            onClose={() => setModalVisible(false)}
          />
        </View>
      )}
    </Formik>
  );
}
