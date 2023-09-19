import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../../components/Snackbar';
import Icons from 'react-native-vector-icons/Ionicons';
export default function PaidBill(props) {
  const styles = useThemeAwareObject(createstyles);

  const [firebase, setfirebase] = useState([]);

  const focus = useIsFocused();
  const firebasedata = () => {
    firestore()
      .collection('billing')
      .where('status', 'in', ['Paid'])
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
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.openDrawer()}>
          <Icons name="menu-sharp" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>Pending Bill</Text>

        <Text></Text>
      </View>
      <FlatList
       showsVerticalScrollIndicator={false}
        data={firebase}
        renderItem={({item, index}) => {
          return (
            <View style={styles.MianContainerflat}>
              <TouchableOpacity
                style={styles.Containerflatlist}
                onPress={() => handledata(item)}>
                <View style={styles.ContainerStatus}>
                  <Text
                    style={[
                      styles.Statustext,
                      item.status == 'Paid' && {
                        backgroundColor: '#9CA7AB',
                      },
                    ]}>
                    {item.status}
                  </Text>
                </View>
                <View style={styles.Containerflat}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.flatname}>
                    Project: {item.project}
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.flatname}>
                    Amount: {item.amount}
                  </Text>
                  <View>
                    <Text style={styles.Datetext}>
                      {new Date(item.date.toDate()).toDateString()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 15 }}
      />
    </View>
  );
}
