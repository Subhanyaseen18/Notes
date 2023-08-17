import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../../components/Snackbar';
export default function PendingBill(props) {
  const styles = useThemeAwareObject(createstyles);

  const [firebase, setfirebase] = useState([]);

  const focus = useIsFocused();
  const firebasedata = () => {
    firestore()
      .collection('billing')
      .where('status', 'in', ['Pending'])
      .get()
      .then(querySnapshot => {
        const usersArray = querySnapshot.docs.map(documentSnapshot => ({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        }));

        setfirebase(usersArray);
      })
      .catch(error => {
        SnackBar(error.data.error, true, 'short');
      });
  };

  const handledata = item => {
    props.navigation.navigate(
      'DetailBilling',

      {
        id: item.id,
        method: item.method,
        milestone: item.milestone,
        project: item.project,
        status: item.status,
        date: item.date,
        amount: item.amount,
      },
    );
  };

  useEffect(() => {
    if (focus == true) firebasedata();
  }, [focus]);
  return (
    <View style={styles.Container}>
      <View style={styles.Containerheading}>
        <Text style={styles.heading}>Pending Bill</Text>
      </View>
      <FlatList
        data={firebase}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => handledata(item)}
              style={[
                styles.MianContainerflat,
                item.status == 'Pending' && {
                  backgroundColor: Colours.lightgreen,
                },
              ]}>
              <View style={styles.Containerflat}>
                <Text style={styles.flatname}>Project: {item.project}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
