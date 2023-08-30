import {View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalProjname from '../ModalProject';
import {useIsFocused} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import StatusBilling from '../StatusModel';
import {Formik} from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import SnackBar from '../../../components/Snackbar';
import {Dispatch} from '@reduxjs/toolkit';
import {Id} from '../../../Redux/Slice';
import ModalMile from '../ModalMilestone';
import Icons from 'react-native-vector-icons/Ionicons';
export default function Billig(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modelstatus, setmodelstatus] = useState(false);
  const [project, setproject] = useState('Select the project');
  const styles = useThemeAwareObject(createstyles);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [method, setmethod] = useState('');
  const [milestones, setmilestones] = useState('Select the milestone');
  const [status, setstatus] = useState('Pending');
  const [modalmile, setmodalmile] = useState(false);

  const handleItemSelected = item => {
    setproject(item.projectname);
    setmethod(item.paymentmethod);
    setmilestones('Select the milestone');
  };
  const handleSelected = item => {
    setstatus(item);
  };
  const handlemileSelected = item => {
    setmilestones(item);
  };
  const handledata = values => {
    const currentTimestamp = firestore.Timestamp.fromDate(date);
    if (
      project !== 'Select the project' &&
      milestones !== 'Select the milestone' &&
      method !== ''
    ) {
      firestore()
        .collection('billing')
        .add({
          project: project,
          method: method,
          date: currentTimestamp,
          status: status,
          milestone: milestones,
          amount: values.amount,
        })
        .then(() => {
          props.navigation.goBack();
          setmilestones('Select the milestone');
          setstatus('Pending');
          setproject('Select the project');
          setmethod('');
          SnackBar('Billing added!', true, 'short');
        });
    } else {
      SnackBar('Please added complete data!', true, 'short');
    }
  };
  const Edit = yup.object().shape({
    amount: yup.string().required('Please enter amount'),
  });
  return (
    <Formik
      initialValues={{amount: ''}}
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
            <Text style={styles.heading}>Add Bill</Text>

            <Text></Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Project:</Text>
            </View>
            <View style={styles.ContainerProject}>
              <TextInput
                style={styles.statustext}
                value={project}
                editable={false}></TextInput>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon  style={styles.icon} name="expand-more" size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Payment Method:</Text>
            </View>
            <View style={styles.ContainerProject}>
              <TextInput
                style={styles.methodtext}
                value={method}
                editable={false}></TextInput>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}></TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Date:</Text>
            </View>
            <View style={styles.ContainerProject}>
              <Text style={styles.statustext}> {date.toDateString()}</Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Icon  style={styles.icon} name="expand-more" size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Status:</Text>
            </View>
            <View style={styles.ContainerProject}>
              <TextInput
                style={styles.statustext}
                value={status}
                editable={false}></TextInput>
              <TouchableOpacity onPress={() => setmodelstatus(true)}>
                <Icon  style={styles.icon} name="expand-more" size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Milestone:</Text>
            </View>
            <View style={styles.ContainerProject}>
              <Text style={styles.statustext}>{milestones}</Text>
              <TouchableOpacity onPress={() => setmodalmile(true)}>
                <Icon  style={styles.icon} name="expand-more" size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Amount:</Text>
            </View>

            <View
              style={[
                styles.ContainerProject,

                {
                  borderColor:
                    errors.amount && touched.amount ? Colours.red : Colours.sky,
                },
              ]}>
              <TextInput
                textAlignVertical="top"
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
                value={values.amount}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter Note"></TextInput>
            </View>
            {errors.amount && touched.amount && (
              <Text style={styles.eror}>{errors.amount}</Text>
            )}
            <View style={styles.MaincontainerBtn}>
              <TouchableOpacity
                style={styles.containerBtn}
                onPress={() => handleSubmit()}>
                <Text style={styles.btntext}>Done</Text>
              </TouchableOpacity>
            </View>
            <ModalProjname
              visible={modalVisible}
              ItemSelected={handleItemSelected}
              onClose={() => setModalVisible(false)}
            />
            <StatusBilling
              open={modelstatus}
              Selectedstatus={handleSelected}
              Close={() => setmodelstatus(false)}
            />
            <ModalMile
              visibles={modalmile}
              ItemSelect={handlemileSelected}
              onCloses={() => setmodalmile(false)}
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
