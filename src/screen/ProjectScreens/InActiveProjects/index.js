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
      <View style={styles.Containerheading}>
        <TouchableOpacity
          style={styles.backarrow}
          onPress={() => props.navigation.openDrawer()}>
          <Icons name="menu-sharp" size={35} style={styles.Bariconcolor} />
        </TouchableOpacity>
        <Text style={styles.heading}>InActive Projects</Text>

        <Text></Text>
      </View>
      <FlatList
       showsVerticalScrollIndicator={false}
        data={firebase}
        renderItem={({item, index}) => {
          return (
            <View style={styles.MianContainerflat}>
              <TouchableOpacity
                onPress={() => handledata(item)}
                style={styles.Containerflatlist}>
                <View style={styles.ContainerStatus}>
                  <Text
                    style={[
                      styles.Statustext,
                      item.status == 'Completed' && {
                        backgroundColor: Colours.lightgreen,
                      },
                      item.status == 'Paused' && {backgroundColor: '#CDB5DB'},
                    ]}>
                    {item.status}
                  </Text>
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
                  <Text style={styles.Datetext}>
                    {new Date(item.data.toDate()).toDateString()}
                  </Text>
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
      />
    </View>
  );
}
