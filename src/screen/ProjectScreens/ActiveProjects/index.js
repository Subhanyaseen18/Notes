import {
  View,
  TouchableOpacity,
  FlatList,
  LogBox,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import SnackBar from '../../../components/Snackbar';
export default function Active(props) {
  const [firebase, setfirebase] = useState([]);
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const focus = useIsFocused();
  const styles = useThemeAwareObject(createstyles);
  const dispatch = useDispatch();

  const firebasedata = () => {
    firestore()
      .collection('projects')
      .where('status', 'in', ['Ongoing', 'Maintainance', 'Blocker by Client'])
      .get()
      .then(querySnapshot => {
        const usersArray = querySnapshot.docs.map(documentSnapshot => ({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        }));

        setfirebase(usersArray);
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
      <StatusBar backgroundColor={Colours.softblue} barStyle="light-content" />
      <View style={styles.Containerheading}>
        <Text style={styles.heading}>Active Projects</Text>
      </View>
      <FlatList
        data={firebase}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handledata(item);
              }}
              style={[
                styles.MianContainerflat,
                item.status == 'Ongoing' && {backgroundColor: Colours.lightred},
                item.status == 'Maintainance' && {
                  backgroundColor: Colours.green,
                },
                item.status == 'Blocker by Client' && {
                  backgroundColor: Colours.sky,
                },
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
