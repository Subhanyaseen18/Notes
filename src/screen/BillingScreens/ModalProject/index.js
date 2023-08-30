import {View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import firestore from '@react-native-firebase/firestore';
import createstyles from './style';
import {useThemeAwareObject} from '../../../theme/theme';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { Id } from '../../../Redux/Slice';
const ModalProjname = ({visible, onClose, ItemSelected}) => {
  const dispatch = useDispatch();
  const styles = useThemeAwareObject(createstyles);
  const [firebase, setfirebase] = useState([]);

  const focus = useIsFocused();
  const handleprofilescreen = (name, method,id) => {
    dispatch(Id(id))
    data = {
      projectname: name,
      paymentmethod: method,
    };
    ItemSelected(data);
    onClose();
  };

  const firebasedata = () => {
    firestore()
      .collection('projects')
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
  useEffect(() => {
    if (focus == true) firebasedata();
  }, [focus]);
  return (
    <View style={styles.Container}>
      <Modal transparent={true} visible={visible} onRequestClose={onClose}>
        <TouchableOpacity
          style={styles.modalstylebackground}
          onPress={() => onClose()}>
          <View style={styles.modalstyle}>
            <FlatList
             showsVerticalScrollIndicator={false}
              data={firebase}
              renderItem={({item, index}) => {
           
                return (
                  <TouchableOpacity
                    onPress={() =>
                      handleprofilescreen(item.projectname, item.paymentmethod,item.id)
                    }
                    style={styles.Containerbox}>
                    <Text style={styles.headingtext}>{item.projectname}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default ModalProjname;
