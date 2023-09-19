import {
  View,
  TouchableOpacity,
  FlatList,
  LogBox,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '../../../components/CustomText';
import {useThemeAwareObject} from '../../../theme/theme';
import createstyles from './style';
import {Colours} from '../../../components/Colors';
import {useIsFocused} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import SnackBar from '../../../components/Snackbar';
import DelModal from '../../../DelModal';
import {SwipeListView} from 'react-native-swipe-list-view';
export default function Methods(props) {
  const [firebase, setfirebase] = useState([]);
  const [openRowKey, setOpenRowKey] = useState(null);
  const [Id, setId] = useState(0);
  const [DEldone, setDEldone] = useState(false);
  const focus = useIsFocused();
  const styles = useThemeAwareObject(createstyles);

  const handledata = () => {
    firestore()
      .collection('payment')
      .get()
      .then(querySnapshot => {
        const usersArray = querySnapshot.docs.map(documentSnapshot => ({
          id: documentSnapshot.id,
          key: documentSnapshot.id,
          ...documentSnapshot.data(),
        }));

        setfirebase(usersArray);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  useEffect(() => {
    if (focus == true) handledata();
  }, [focus]);
  const handledelete = () => {
    setDEldone(false);
    handledata();
    firestore()
      .collection('payment')
      .doc(Id)
      .delete()
      .then(() => {
        SnackBar('Method deleted!', true, 'short');
      });
  };

  const onRowDidOpen = rowKey => {
    // console.log('This row opened', rowKey);
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={Colours.softblue} barStyle="light-content" />
      <View style={styles.Containerheading}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.openDrawer()}>
          <Icons name="menu-sharp" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>Payment Methods</Text>

        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.navigate('PaymentMethod')}>
          <Icon name="pluscircleo" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
      </View>
      <View style={styles.MianContainerflat}>
        <SwipeListView
          useFlatList={true}
          disableRightSwipe={true}
          data={firebase}
          renderItem={(data, rowMap) => {
            return (
              <View style={styles.Containerflat}>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.flatname}>
                  {data.item.method}
                </Text>
              </View>
            );
          }}
          renderHiddenItem={(data, rowMap) => {
            return (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  onPress={() => {
                    setDEldone(true);
                    setId(data.item.id);
                    setOpenRowKey(data.item.id);
                  }}
                  style={styles.ContainerDel}>
                  <Icon name="delete" size={25} style={styles.Delicon} />
                </TouchableOpacity>
              </View>
            );
          }}
          rightOpenValue={-85}
          onRowDidOpen={onRowDidOpen}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <DelModal
        visible={DEldone}
        ItemSelected={handledelete}
        onClose={() => setDEldone(false)}
      />
    </View>
  );
}
