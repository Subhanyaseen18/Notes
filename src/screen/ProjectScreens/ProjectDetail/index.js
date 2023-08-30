import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Ico from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import ModalProjects from '../PopupProject';
import {Formik} from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import Icones from 'react-native-vector-icons/MaterialIcons';
import SnackBar from '../../../components/Snackbar';
import DatePicker from 'react-native-date-picker';
import ModalMethod from '../ModalMethod';
import ModalType from '../ModalType';
import MileStonesModal from '../MileStonesModal';
import {useIsFocused} from '@react-navigation/native';
import DelModal from '../../../DelModal';
export default function DetailProject(props) {
  const focus = useIsFocused();
  const styles = useThemeAwareObject(createstyles);
  const [editable, seteditable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setstatus] = useState(props.route.params.status);
  const [date, setDate] = useState(new Date(props.route.params.date.toDate()));
  const [open, setOpen] = useState(false);
  const [method, setmethod] = useState(props.route.params.paymentmethod);
  const [modalmethod, setmodalmethod] = useState(false);
  const [type, settype] = useState(props.route.params.type);
  const [modaltype, setmodaltype] = useState(false);
  const [milestonemodal, setmilestonemodal] = useState(false);
  const [DEldone, setDEldone] = useState(false);
  handledata = values => {
    const currentTimestamp = firestore.Timestamp.fromDate(date);

    seteditable(false);

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
              type: type,
              paymentmethod: method,
            })
            .then(() => {
              SnackBar('Project updated!', true, 'short');
            });
    }
  };

  const handleItemSelected = item => {
    setstatus(item);
  };
  const handlemethodSelected = item => {
    setmethod(item);
  };
  const handleItemtype = item => {
    settype(item);
  };
  const handledelete = () => {
    props.navigation.goBack();
    setDEldone(false);
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
    notes: yup.string().required('Please enter notes'),
    by: yup.string().required('Please enter your name'),
  });
  return (
    <Formik
      initialValues={{
        projectname: props.route.params.projectname,
        clientname: props.route.params.clientname,
        clienttime: props.route.params.clienttime,
        country: props.route.params.country,

        by: props.route.params.submitby,
        notes: props.route.params.notes,
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
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon name="leftcircle" size={35} style={styles.Bariconcolor} />
            </TouchableOpacity>
            <Text style={styles.heading}>Project Details</Text>
            {editable == false ? (
              <TouchableOpacity
                style={styles.backarrow}
                onPress={() => seteditable(true)}>
                <Icons name="edit" size={35} style={styles.Bariconcolor} />
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
                {editable == true && <Icones name="expand-more" size={40} style={styles.icon}/>}
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
                onChangeText={handleChange('clientname')}
                onBlur={handleBlur('clientname')}
                value={values.clientname}
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
                  <Ico name="expand-more" size={40}  style={styles.icon}/>
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
                onChangeText={handleChange('clienttime')}
                onBlur={handleBlur('clienttime')}
                value={values.clienttime}
                style={styles.textinput}
                placeholder="Enter clienttime"></TextInput>
            </View>
            {errors.clienttime && touched.clienttime && (
              <Text style={styles.eror}>{errors.clienttime}</Text>
            )}
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Milestone:</Text>
            </View>

            <View style={[styles.Containertextinput]}>
              <TouchableOpacity
                style={styles.containerBtn}
                onPress={() => setmilestonemodal(true)}>
                <Text style={styles.btntext}>Add Milestones</Text>
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
                onChangeText={handleChange('country')}
                onBlur={handleBlur('country')}
                value={values.country}
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
              style={
                editable == false
                  ? styles.ContainerStatus
                  : styles.ContainerStatusedit
              }>
              <Text style={styles.statustext}>{type}</Text>
              <TouchableOpacity onPress={() => setmodaltype(true)}>
                {editable == true && <Icones name="expand-more" size={40} style={styles.icon}/>}
              </TouchableOpacity>
            </View>
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
                onChangeText={handleChange('notes')}
                onBlur={handleBlur('notes')}
                value={values.notes}
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
                onChangeText={handleChange('by')}
                onBlur={handleBlur('by')}
                value={values.by}
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
              style={
                editable == false
                  ? styles.ContainerStatus
                  : styles.ContainerStatusedit
              }>
              <Text style={styles.statustext}>{method}.</Text>
              <TouchableOpacity onPress={() => setmodalmethod(true)}>
                {editable == true && <Icones name="expand-more" size={40} style={styles.icon}/>}
              </TouchableOpacity>
            </View>

            <View style={styles.MaincontainerBtn}>
              {editable == false && (
                <TouchableOpacity onPress={() => setDEldone(true)}>
                  <View style={styles.containerBtnDEl}>
                    <Text style={styles.btntext}>Delete</Text>
                  </View>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[
                  editable == false ? styles.containerBtn : styles.containerBtnEdit,
                ]}
                onPress={() => handleSubmit()}>
                <Text style={styles.btntext}>Done</Text>
              </TouchableOpacity>
            </View>

            <ModalProjects
              visible={modalVisible}
              ItemSelected={handleItemSelected}
              onClose={() => setModalVisible(false)}
            />
            <ModalMethod
              visibles={modalmethod}
              ItemSelect={handlemethodSelected}
              onCloses={() => setmodalmethod(false)}
            />
            <ModalType
              open={modaltype}
              ItemSelect={handleItemtype}
              Close={() => setmodaltype(false)}
            />
            <MileStonesModal
              opens={milestonemodal}
              Items={props.route.params.id}
              Close={() => setmilestonemodal(false)}
            />
            <DelModal
              visible={DEldone}
              ItemSelected={handledelete}
              onClose={() => setDEldone(false)}
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
