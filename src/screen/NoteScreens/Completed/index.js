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
export default function Complete(props) {
  const styles = useThemeAwareObject(createstyles);
  const [firebase, setfirebase] = useState([]);

  const focus = useIsFocused();
  const firebasedata = () => {
    firestore()
      .collection('users')
      .where('status', 'in', ['Completed'])
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
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.openDrawer()}>
          <Icons name="menu-sharp" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>Complete Notes</Text>

        <Text></Text>
      </View>
      <FlatList
       showsVerticalScrollIndicator={false}
        data={firebase}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handledata(item.note, item.status, item.id);
              }}
              style={styles.MianContainerflat}>
              <View style={styles.ContainerStatus}>
                <Text
                  style={[
                    styles.Statustext,
                    item.status == 'Completed' && {
                      backgroundColor: Colours.lightgreen,
                    },
                  ]}>
                  {item.status}
                </Text>
              </View>
              <View style={styles.Containerflat}>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.flatname}>
                  {item.note}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingBottom: 15 }}
      />
    </View>
  );
}
