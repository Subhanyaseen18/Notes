import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../components/CustomText';
import {useThemeAwareObject} from '../../theme/theme';
import createstyles from './style';
import {Colours} from '../../components/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {Detail} from '../../Redux/Slice';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import SnackBar from '../../components/Snackbar';
export default function Complete(props) {
  const styles = useThemeAwareObject(createstyles);
  const {user} = useSelector(state => state.user);
  const [firebase, setfirebase] = useState([]);

  const dispatch = useDispatch();
  const focus = useIsFocused();
  const firebasedata = () => {
    firestore()
      .collection('users')
      .where('status', 'in', ['Completed'])
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
      <View style={styles.Containerheading}>
        <Text style={styles.heading}>Complete</Text>
      </View>
      <FlatList
        data={firebase}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => handledata(item.note, item.status, item.id)}
              style={[
                styles.MianContainerflat,
                item.status == 'Completed' && {
                  backgroundColor: Colours.lightgreen,
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
