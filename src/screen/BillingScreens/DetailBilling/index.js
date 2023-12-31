import {View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Ico from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import Icones from 'react-native-vector-icons/MaterialIcons';
import SnackBar from '../../../components/Snackbar';
import DatePicker from 'react-native-date-picker';
import ModalProjname from '../ModalProject';
import ModalMile from '../ModalMilestone';
import StatusBilling from '../StatusModel';
import DelModal from '../../../DelModal';
export default function DetailBilling(props) {
  const styles = useThemeAwareObject(createstyles);
  const [editable, seteditable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setstatus] = useState(props.route.params.status);
  const [method, setmethod] = useState(props.route.params.method);
  const [date, setDate] = useState(new Date(props.route.params.date.toDate()));
  const [open, setOpen] = useState(false);
  const [project, setproject] = useState(props.route.params.project);
  const [milestone, setmilestone] = useState(props.route.params.milestone);
  const [modalmile, setmodalmile] = useState(false);
  const [modelstatus, setmodelstatus] = useState(false);
  const [milestones, setmilestones] = useState('Select the milestone');
  const [DEldone, setDEldone] = useState(false);
  const handlemileSelected = item => {
    setmilestone(item);
  };
  const handleSelected = item => {
    setstatus(item);
  };
  const handleItemSelected = item => {
    setproject(item.projectname);
    setmethod(item.paymentmethod);
    setmilestone('Select the milestone');
  };
  const handledata = values => {
    const currentTimestamp = firestore.Timestamp.fromDate(date);

    {
      editable == false && props.navigation.goBack();
    }
    if (milestone !== 'Select the milestone') {
      firestore()
        .collection('billing')
        .doc(props.route.params.id)
        .update({
          project: project,
          method: method,
          date: currentTimestamp,
          status: status,
          milestone: milestone,
          amount: values.Amount,
        })
        .then(() => {
          SnackBar('Project updated!', true, 'short');
          seteditable(false);
        });
    }else{
      SnackBar('Please select milestone!', true, 'short');
    }
  };

  const handledelete = () => {
    props.navigation.goBack();
    setDEldone(false);
    firestore()
      .collection('billing')
      .doc(props.route.params.id)
      .delete()
      .then(() => {
        SnackBar('Notes deleted!', true, 'short');
      });
  };

  const Edit = yup.object().shape({
    Amount: yup.string().required('Please enter projectname'),
  });
  return (
    <Formik
      initialValues={{
        Amount: props.route.params.amount,
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
              <Icon name="leftcircle" size={35} style={styles.Bariconcolor} />
            </TouchableOpacity>
            <Text style={styles.heading}>Billing Details</Text>
            {editable == false ? (
              <TouchableOpacity onPress={() => seteditable(true)}>
                <Icons name="edit" size={35} style={styles.Bariconcolor} />
              </TouchableOpacity>
            ) : (
              <Text> </Text>
            )}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Project:</Text>
            </View>
            <View
              style={
                editable == false
                  ? styles.ContainerStatus
                  : styles.ContainerStatusedit
              }>
              <Text style={styles.statustext}>{project}</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                {editable == true && (
                  <Icones style={styles.icon} name="expand-more" size={40} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Payment Method:</Text>
            </View>
            <View
              style={
                editable == false
                  ? styles.ContainerStatus
                  : styles.ContainerStatusedit
              }>
              <Text style={styles.statustext}>{method}</Text>
            </View>

            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Date:</Text>
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
                  <Ico name="expand-more" size={40} style={styles.icon} />
                </TouchableOpacity>
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
              <Text style={styles.statustext}>{status}</Text>
              <TouchableOpacity onPress={() => setmodelstatus(true)}>
                {editable == true && (
                  <Icones style={styles.icon} name="expand-more" size={40} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Milestone:</Text>
            </View>
            <View
              style={
                editable == false
                  ? styles.ContainerStatus
                  : styles.ContainerStatusedit
              }>
              <Text style={styles.statustext}>{milestone}</Text>
              <TouchableOpacity onPress={() => setmodalmile(true)}>
                {editable == true && (
                  <Icones style={styles.icon} name="expand-more" size={40} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.Containerheadingname}>
              <Text style={styles.headingtext}>Amount:</Text>
            </View>
            <View
              style={[
                editable == false
                  ? styles.Containertextinput
                  : styles.Containeredit,

                {
                  borderColor:
                    errors.Amount && touched.Amount
                      ? Colours.red
                      : Colours.lightblack,
                },
              ]}>
              <TextInput
                editable={editable}
                textAlignVertical="top"
                onChangeText={handleChange('Amount')}
                onBlur={handleBlur('Amount')}
                value={values.Amount}
                multiline={true}
                style={styles.textinput}
                placeholder="Enter your name"></TextInput>
            </View>
            {errors.Amount && touched.Amount && (
              <Text style={styles.eror}>{errors.Amount}</Text>
            )}

            <View style={styles.MaincontainerBtn}>
              {editable == false && (
                <TouchableOpacity onPress={() => setDEldone(true)}>
                  <View style={styles.containerBtnDel}>
                    <Text style={styles.btntext}>Delete</Text>
                  </View>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[
                  editable == false
                    ? styles.containerBtn
                    : styles.containerBtnEdit,
                ]}
                onPress={() => handleSubmit()}>
                <Text style={styles.btntext}>Done</Text>
              </TouchableOpacity>
            </View>
            <ModalProjname
              visible={modalVisible}
              ItemSelected={handleItemSelected}
              onClose={() => setModalVisible(false)}
            />
            <ModalMile
              visibles={modalmile}
              ItemSelect={handlemileSelected}
              onCloses={() => setmodalmile(false)}
            />
            <StatusBilling
              open={modelstatus}
              Selectedstatus={handleSelected}
              Close={() => setmodelstatus(false)}
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
