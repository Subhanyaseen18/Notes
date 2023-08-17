import {View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Ico from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import ModalProjects from '../PopupProject';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Icones from 'react-native-vector-icons/MaterialIcons';
import SnackBar from '../../../components/Snackbar';
import DatePicker from 'react-native-date-picker';
export default function DetailProject(props) {
  const styles = useThemeAwareObject(createstyles);
  const [editable, seteditable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setstatus] = useState(props.route.params.status);
  const [date, setDate] = useState(new Date(props.route.params.date.toDate()));
  const [open, setOpen] = useState(false);
  const [textInputs, setTextInputs] = useState(
    props.route.params.milestone && props.route.params.milestone.length > 0
      ? props.route.params.milestone.map((value, index) => ({
          key: index.toString(),
          value: value.value || '',
        }))
      : [{key: '0', value: ''}],
  );

  const addTextInput = () => {
    if (textInputs.length < 5) {
      const newKey = textInputs.length;
      setTextInputs([...textInputs, {key: newKey, value: ''}]);
    }
  };
  const removeLastTextInput = () => {
    if (textInputs.length > 1) {
      const updatedInputs = textInputs.slice(0, -1);
      setTextInputs(updatedInputs);
    }
  };
  const handleInputChange = (key, value) => {
    const updatedInputs = textInputs.map(input => {
      if (input.key === key) {
        return {...input, value};
      }
      return input;
    });
    setTextInputs(updatedInputs);
  };

  const handledata = values => {
    const currentTimestamp = firestore.Timestamp.fromDate(date);
    const filteredArray = textInputs.filter(item => item.value !== '');
    console.log(filteredArray);
    seteditable(false);
    firestore()
      .collection('projects')
      .doc(props.route.params.id)
      .update({
        milestone: filteredArray,
      })
      .then(() => {
        // SnackBar('MileStone Added!', true, 'short');
      });

    {
      editable == false
        ? props.navigation.goBack()
        : firestore()
            .collection('projects')
            .doc(props.route.params.id)
            .update({
              clientname: values.clientname,
              clienttime: values.clientname,
              country: values.country,
              data: currentTimestamp,
              notes: values.notes,
              projectname: values.projectname,
              status: status,
              submitby: values.by,
              type: values.type,
              paymentmethod: values.payment,
              milestone: textInputs,
            })
            .then(() => {
              SnackBar('Project updated!', true, 'short');
            });
    }
  };
  const handleItemSelected = item => {
    setstatus(item);
  };
  const handledelete = () => {
    props.navigation.goBack();

    firestore()
      .collection('projects')
      .doc(props.route.params.id)
      .delete()
      .then(() => {
        SnackBar('Notes deleted!', true, 'short');
      });
  };

  const Edit = yup.object().shape({
    projectname: yup.string().required('Please enter projectname'),
    clientname: yup.string().required('Please enter clientname'),
    clienttime: yup.string().required('Please enter  clienttime'),
    country: yup.string().required('Please enter country'),
    type: yup.string().required('Please enter type'),
    notes: yup.string().required('Please enter notes'),
    by: yup.string().required('Please enter your name'),
    payment: yup.string().required('Please enter payment method'),
    // stone: yup.string().required('Please enter payment method')
  });
  return (
    <Formik
      initialValues={{
        projectname: props.route.params.projectname,
        clientname: props.route.params.clientname,
        clienttime: props.route.params.clienttime,
        country: props.route.params.country,
        type: props.route.params.type,
        by: props.route.params.submitby,
        notes: props.route.params.notes,
        payment: props.route.params.paymentmethod,
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
            <Text style={styles.heading}>Project Details</Text>
            {editable == false ? (
              <TouchableOpacity onPress={() => seteditable(true)}>
                <Icons name="edit" size={40} style={styles.Bariconcolor} />
              </TouchableOpacity>
            ) : (
              <Text> </Text>
            )}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={styles.headingtext}>Project Name:</Text>
            </View>
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.projectname && touched.projectname
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
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
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,
                ,
                {
                  borderColor:
                    errors.clientname && touched.clientname
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
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
            <View
              style={
                editable == false
                  ? styles.ContainerStatus
                  : styles.ContainerStatusedit
              }>
              <Text style={styles.statustext}>{date.toDateString()} </Text>
              {editable == true && (
                <TouchableOpacity onPress={() => setOpen(true)}>
                  <Ico name="expand-more" size={50} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Client Timezone:</Text>
            </View>
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.clienttime && touched.clienttime
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
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
              <Text style={styles.headingtext}>Milestone:</Text>
            </View>
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containertextmile,

                {
                  borderColor:
                    errors.clienttime && touched.clienttime
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <View>
                {textInputs.map(input => {
                  return (
                    <TextInput
                      multiline={true}
                      style={[
                        editable == false
                          ? styles.textinputicon
                          : styles.textinputEditicon,
                      ]}
                      key={input.key}
                      value={input.value}
                      onChangeText={value =>
                        handleInputChange(input.key, value)
                      }
                      placeholder={`MileStone ${input.key + 1}`}
                    />
                  );
                })}
              </View>
              <TouchableOpacity onPress={removeLastTextInput}>
                <Icon name="minuscircleo" size={30} style={styles.plusicon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={addTextInput}>
                <Icon name="pluscircleo" size={30} style={styles.plusicon} />
              </TouchableOpacity>
            </View>

            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Country:</Text>
            </View>
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.country && touched.country
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
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
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.type && touched.type
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
                onChangeText={handleChange('type')}
                onBlur={handleBlur('type')}
                value={values.type}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter type"></TextInput>
            </View>
            {errors.type && touched.type && (
              <Text style={styles.eror}>{errors.type}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Notes:</Text>
            </View>
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.notes && touched.notes
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
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
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.by && touched.by ? Colours.red : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
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
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.payment && touched.payment
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
                onChangeText={handleChange('payment')}
                onBlur={handleBlur('payment')}
                value={values.payment}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter your name"></TextInput>
            </View>
            {errors.payment && touched.payment && (
              <Text style={styles.eror}>{errors.payment}</Text>
            )}

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
            <ModalProjects
              visible={modalVisible}
              ItemSelected={handleItemSelected}
              onClose={() => setModalVisible(false)}
            />
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
          </ScrollView>
        </View>
      )}
    </Formik>
  );
}
