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
import {useIsFocused} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import SnackBar from '../../../components/Snackbar';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
export default function Active(props) {
  const [firebase, setfirebase] = useState([]);
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const focus = useIsFocused();
  const styles = useThemeAwareObject(createstyles);

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
  const handleDetails = item => {
    props.navigation.navigate('AllDetail', {
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
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.openDrawer()}>
          <Icons name="menu-sharp" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>Active Projects</Text>

        <Text></Text>
      </View>
      <FlatList
       showsVerticalScrollIndicator={false}
        data={firebase}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
return (
            <View style={styles.MianContainerflat}>
              <TouchableOpacity
                onPress={() => {
                  handledata(item);
                }}
                style={styles.Containerflatlist}>
                <View>
                  <View style={styles.ContainerStatus}>
                    <Text
                      style={[
                        styles.Statustext,
                        item.status == 'Ongoing' && {
                          backgroundColor: Colours.lightred,
                        },
                        item.status == 'Maintainance' && {
                          backgroundColor: '#FFF599',
                        },
                        item.status == 'Blocker by Client' && {
                          backgroundColor: '#FE99FF',
                        },
                      ]}>
                      {item.status}
                    </Text>
                  </View>
                </View>
                <View style={styles.Containerflat}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.flatname}>
                    Project: {item.projectname}
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.flatname}>
                    Assigned by: {item.clientname}
                  </Text>

                  <View>
                    <Text style={styles.Datetext}>
                      {new Date(item.data.toDate()).toDateString()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleDetails(item)}
                style={styles.ContainerDetail}>
                <Text style={styles.flatDetail}>View Details</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 15 }}
      />
    </View>
  );
}
