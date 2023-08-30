import {TextInput, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalProjects from '../PopupProject';
import {Formik} from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import SnackBar from '../../../components/Snackbar';
import DatePicker from 'react-native-date-picker';
import ModalType from '../ModalType';
import ModalMethod from '../ModalMethod';
import Icons from 'react-native-vector-icons/Ionicons';
export default function AddProject(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setstatus] = useState('Paused');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [type, settype] = useState('Job');
  const [modaltype, setmodaltype] = useState(false);
  const [modalmethod, setmodalmethod] = useState(false);
  const [method, setmethod] = useState('Select the payment method');
  const styles = useThemeAwareObject(createstyles);
  const handleItemSelected = item => {
    setstatus(item);
  };
  const handleItemtype = item => {
    settype(item);
  };
  const handlemethodSelected = item => {
    setmethod(item);
  };
  const handledata = values => {
    const currentTimestamp = firestore.Timestamp.fromDate(date);

    if (method !== 'Select the payment method') {
      firestore()
        .collection('projects')
        .add({
          clientname: values.clientname,
          clienttime: values.clientname,
          country: values.country,
          data: currentTimestamp,
          notes: values.notes,
          projectname: values.projectname,
          status: status,
          submitby: values.by,
          type: type,
          paymentmethod: method,
        })
        .then(() => {
          SnackBar('Notes added!', true, 'short');
          {
            status == 'Completed' || status == 'Paused'
              ? props.navigation.navigate('InActive')
              : props.navigation.navigate('Active');
          }
          setstatus('Paused');
          settype('Job');
          setmethod('Select the payment method')
        });
    } else {
      SnackBar('Please added complete data', true, 'short');
    }
  };
  const Edit = yup.object().shape({
    projectname: yup.string().required('Please enter projectname'),
    clientname: yup.string().required('Please enter clientname'),
    clienttime: yup.string().required('Please enter  clienttime'),
    country: yup.string().required('Please enter country'),

    notes: yup.string().required('Please enter notes'),
    by: yup.string().required('Please enter your name'),
  });

  return (
    <Formik
      initialValues={{
        projectname: '',
        clientname: '',
        clienttime: '',
        country: '',
        by: '',
        notes: '',
      }}
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
            <Text style={styles.heading}>Add Projects</Text>

            <Text></Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Status:</Text>
            </View>
            <View style={styles.ContainerStatusedit}>
              <Text style={styles.notestext}>{status}</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon name="expand-more" size={40} style={styles.icon}/>
              </TouchableOpacity>
            </View>

            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Project Name:</Text>
            </View>
            <View
              style={[
                styles.Containertextinput,

                {
                  borderColor:
                    errors.projectname && touched.projectname
                      ? Colours.red
                      : Colours.sky,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('projectname')}
                onBlur={handleBlur('projectname')}
                value={values.projectname}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter project Name"></TextInput>
            </View>
            {errors.projectname && touched.projectname && (
              <Text style={styles.eror}>{errors.projectname}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Client Name:</Text>
            </View>
            <View
              style={[
                styles.Containertextinput,

                {
                  borderColor:
                    errors.clientname && touched.clientname
                      ? Colours.red
                      : Colours.sky,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('clientname')}
                onBlur={handleBlur('clientname')}
                value={values.clientname}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter client Name"></TextInput>
            </View>
            {errors.clientname && touched.clientname && (
              <Text style={styles.eror}>{errors.clientname}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Start Date:</Text>
            </View>
            <View style={styles.ContainerDate}>
              <Text style={styles.Datetext}> {date.toDateString()}</Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Icon name="expand-more" size={40} style={styles.icon}/>
              </TouchableOpacity>
            </View>

            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Client Timezone:</Text>
            </View>
            <View
              style={[
                styles.Containertextinput,

                {
                  borderColor:
                    errors.clienttime && touched.clienttime
                      ? Colours.red
                      : Colours.sky,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('clienttime')}
                onBlur={handleBlur('clienttime')}
                value={values.clienttime}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter clienttime"></TextInput>
            </View>
            {errors.clienttime && touched.clienttime && (
              <Text style={styles.eror}>{errors.clienttime}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Country:</Text>
            </View>
            <View
              style={[
                styles.Containertextinput,

                {
                  borderColor:
                    errors.country && touched.country
                      ? Colours.red
                      : Colours.sky,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('country')}
                onBlur={handleBlur('country')}
                value={values.country}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter country"></TextInput>
            </View>
            {errors.country && touched.country && (
              <Text style={styles.eror}>{errors.country}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Type:</Text>
            </View>

            <View style={styles.ContainerStatusedit}>
              <Text style={styles.notestext}>{type}</Text>
              <TouchableOpacity onPress={() => setmodaltype(true)}>
                <Icon name="expand-more" size={40} style={styles.icon}/>
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
                    errors.notes && touched.notes ? Colours.red : Colours.sky,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('notes')}
                onBlur={handleBlur('notes')}
                value={values.notes}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter Note"></TextInput>
            </View>
            {errors.notes && touched.notes && (
              <Text style={styles.eror}>{errors.notes}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Project submited by:</Text>
            </View>
            <View
              style={[
                styles.Containertextinput,

                {
                  borderColor:
                    errors.by && touched.by ? Colours.red : Colours.sky,
                },
              ]}>
              <TextInput
                onChangeText={handleChange('by')}
                onBlur={handleBlur('by')}
                value={values.by}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter your name"></TextInput>
            </View>
            {errors.by && touched.by && (
              <Text style={styles.eror}>{errors.by}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Payment Method:</Text>
            </View>
            <View style={styles.ContainerStatusedit}>
              <Text style={styles.notestext}>{method}</Text>
              <TouchableOpacity onPress={() => setmodalmethod(true)}>
                <Icon name="expand-more" size={40} style={styles.icon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.MaincontainerBtn}>
             
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.containerBtn}>
                <Text style={styles.btntext}>Done</Text>
              </TouchableOpacity>
            </View>

            <ModalProjects
              visible={modalVisible}
              ItemSelected={handleItemSelected}
              onClose={() => setModalVisible(false)}
            />
            <ModalType
              open={modaltype}
              ItemSelect={handleItemtype}
              Close={() => setmodaltype(false)}
            />
            <ModalMethod
              visibles={modalmethod}
              ItemSelect={handlemethodSelected}
              onCloses={() => setmodalmethod(false)}
            />
          </ScrollView>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            mode="date"
          />
        </View>
      )}
    </Formik>
  );
}
