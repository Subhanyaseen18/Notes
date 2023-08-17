import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../../components/Snackbar';
export default function InActive(props) {
  const styles = useThemeAwareObject(createstyles);

  const [firebase, setfirebase] = useState([]);

  const focus = useIsFocused();
  const firebasedata = () => {
    firestore()
      .collection('projects')
      .where('status', 'in', ['Completed', 'Paused'])
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
    props.navigation.navigate('DetailProject', {
      id: item.id,
      clientname: item.clientname,
      clienttime: item.clientname,
      country: item.country,
      date: item.data,
      notes: item.notes,
      projectname: item.projectname,
      status: item.status,
      submitby: item.submitby,
      type: item.type,
      paymentmethod: item.paymentmethod,
      milestone: item.milestone,
    });
  };

  useEffect(() => {
    if (focus == true) firebasedata();
  }, [focus]);
  return (
    <View style={styles.Container}>
      <View style={styles.Containerheading}>
        <Text style={styles.heading}>InActive Projects</Text>
      </View>
      <FlatList
        data={firebase}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => handledata(item)}
              style={[
                styles.MianContainerflat,
                item.status == 'Completed' && {
                  backgroundColor: Colours.lightgreen,
                },
                item.status == 'Paused' && {backgroundColor: '#9CA7AB'},
              ]}>
              <View style={styles.Containerflat}>
                <Text style={styles.flatname}>Project: {item.projectname}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
