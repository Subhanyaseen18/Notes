import {
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import createstyles from './style';
import {useThemeAwareObject} from '../../../theme/theme';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import SnackBar from '../../../components/Snackbar';
import {useIsFocused} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Entypo';

const MileStonesModal = ({opens, Close, Items}) => {
  const styles = useThemeAwareObject(createstyles);
  const focus = useIsFocused();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [inputSets, setInputSets] = useState([
    {milestone: '', amount: 0, date: new Date()},
  ]);

  const handleData = () => {
    firestore()
      .collection('projects')
      .doc(Items)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          const dataObject = documentSnapshot.data().milestone;

          if (dataObject == undefined) {
            setInputSets([{milestone: '', amount: 0, date: new Date()}]);
          } else {
            const formattedData = dataObject.map(item => ({
              milestone: item.milestone || '',
              amount: item.amount || 0,
              date: item.date ? new Date(item.date.toDate()) : new Date(),
            }));
            setInputSets(formattedData);
          
            {
              formattedData.length === 0 &&
                setInputSets([{milestone: '', amount: 0, date: new Date()}]);
            }
          }
        }
      });
  };

  useEffect(() => {
    if (focus == true) handleData();
  }, [focus]);

  const showDatePicker = index => {
    setDatePickerVisibility(true);
    setSelectedDateIndex(index);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    const updatedInputSets = [...inputSets];
    updatedInputSets[selectedDateIndex].date = date;
    setInputSets(updatedInputSets);
    hideDatePicker();
  };
  const handleDataChange = (index, field, value) => {
    const updatedInputSets = [...inputSets];
    updatedInputSets[index][field] =
      field == 'amount' ? parseFloat(value) : value;
    setInputSets(updatedInputSets);
  };

  const handleAddSet = () => {
    setInputSets([...inputSets, {milestone: '', amount: 0, date: new Date()}]);
  };
  const handleDateChange = (index, newDate) => {
    const updatedInputSets = [...inputSets];
    updatedInputSets[index].date = newDate;
    setInputSets(updatedInputSets);
  };
  const handlescreendata = () => {
    const filteredArray = inputSets.filter(
      item => item.amount !== 0 && item.milestone !== '',
    );
    firestore()
      .collection('projects')
      .doc(Items)
      .update({
        milestone: filteredArray,
      })
      .then(() => {
        SnackBar('Milestone added!', true, 'short');
        Close();
      });
  };
  const totalExpense = inputSets.reduce(
    (accumulator, expense) => accumulator + expense.amount,
    0,
  );

  return (
    <View style={styles.Container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={opens}
        onRequestClose={Close}>
        <View style={styles.modalstylebackground}>
          <View style={styles.modalstyle}>
            <View style={styles.Containerheading}>
              <Text></Text>
              <Text style={styles.heading}>MileStone</Text>

              <TouchableOpacity
                style={styles.backarrow}
                onPress={() => Close()}>
                <Icons
                  name="circle-with-cross"
                  size={35}
                  style={styles.Bariconcolor}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.Containertextmile}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {inputSets.map((data, index) => (
                  <View key={index} style={styles.ContainerMAp}>
                    <TextInput
                      placeholder={`Milestone${index + 1}`}
                      value={data.milestone}
                      onChangeText={text =>
                        handleDataChange(index, 'milestone', text)
                      }
                      style={styles.inputtext}
                    />
                    <TextInput
                      keyboardType="numeric"
                      placeholder={`Amount${index + 1}`}
                      value={data?.amount ? `${data?.amount}` : null}
                      onChangeText={number =>
                        handleDataChange(index, 'amount', number)
                      }
                      style={styles.inputtext}
                    />

                    {Platform.OS === 'ios' ? (
                      <DatePicker
                        date={data.date}
                        onDateChange={newDate =>
                          handleDateChange(index, newDate)
                        }
                      />
                    ) : (
                      <View style={styles.ContainerDate}>
                        <TouchableOpacity onPress={() => showDatePicker(index)}>
                          <Text style={styles.date}>
                            {data.date.toDateString()}
                          </Text>
                        </TouchableOpacity>

                        <DatePicker
                          modal
                          open={
                            isDatePickerVisible && selectedDateIndex === index
                          }
                          date={data.date}
                          onConfirm={handleConfirm}
                          onCancel={hideDatePicker}
                          mode="date"
                        />
                      </View>
                    )}

                    <TouchableOpacity
                      onPress={() => {
                        setInputSets(inputSets.filter((_, i) => i !== index));
                        if (inputSets.length === 1) {
                          setInputSets([
                            {milestone: '', amount: 0, date: new Date()},
                          ]);
                        }
                      }}>
                      <Icon
                        name="minuscircleo"
                        size={25}
                        style={styles.Delicon}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
               
              </ScrollView>
              <View style={styles.Containertotalamount}>
                  <Text style={styles.totalamount}>
                    Total Amount={totalExpense}
                  </Text>
                </View>
                <View style={styles.MaincontainerBtn}>
                  <TouchableOpacity
                    style={styles.containerBtn}
                    onPress={handleAddSet}>
                    <Text style={styles.btntext}>Add Set</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.containerBtn}
                    onPress={handlescreendata}>
                    <Text style={styles.btntext}>Done</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default MileStonesModal;
