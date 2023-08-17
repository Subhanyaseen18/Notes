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
export default function Notes(props) {
  const [firebase, setfirebase] = useState([]);
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const focus = useIsFocused();
  const styles = useThemeAwareObject(createstyles);
  const dispatch = useDispatch();

  const firebasedata = () => {
    firestore()
      .collection('users')
      .where('status', 'in', ['Urgent', 'Thinking', "Let's_talk"])
      .orderBy('time', 'desc')
      .get()
      .then(querySnapshot => {
      
        const usersArray = querySnapshot.docs.map(documentSnapshot => ({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        }));
      

        setfirebase(usersArray);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const handledata = (note, status, id) => {
    props.navigation.navigate('DetailNotes', {
      id: id,
      note: note,
      status: status,
    });
  };

  useEffect(() => {
    if (focus == true) firebasedata();
  }, [focus]);
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={Colours.softblue} barStyle="light-content" />
      <View style={styles.Containerheading}>
        <Text style={styles.heading}>Notes</Text>
      </View>
      <FlatList
        data={firebase}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          // console.log('item', item)
          return (
            <TouchableOpacity
              onPress={() => {
                handledata(item.note, item.status, item.id);
              }}
              style={[
                styles.MianContainerflat,
                item.status == 'Urgent' && {backgroundColor: Colours.lightred},
                item.status == "Let's_talk" && {
                  backgroundColor: Colours.green,
                },
                item.status == 'Thinking' && {
                  backgroundColor: Colours.sky,
                },
              ]}>
              <View style={styles.Containerflat}>
                <Text style={styles.flatname}>{item.note}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
