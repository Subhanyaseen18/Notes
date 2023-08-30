import {View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import firestore from '@react-native-firebase/firestore';
import createstyles from './style';
import {useThemeAwareObject} from '../../../theme/theme';
import {useIsFocused} from '@react-navigation/native';

const ModalMethod = ({visibles, onCloses, ItemSelect}) => {
  const styles = useThemeAwareObject(createstyles);
  const [firebase, setfirebase] = useState([]);

  const focus = useIsFocused();
  const handleprofilescreen = item => {
    ItemSelect(item);
    onCloses();
  };

  const firebasedata = () => {
    firestore()
      .collection('payment')
      .get()
      .then(querySnapshot => {
        const usersArray = querySnapshot.docs.map(documentSnapshot => ({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        }));

        setfirebase(usersArray);
      });
  };
  useEffect(() => {
    if (focus == true) firebasedata();
  }, [focus]);
  return (
    <View style={styles.Container}>
      <Modal transparent={true} visible={visibles} onRequestClose={onCloses}>
        <TouchableOpacity
          style={styles.modalstylebackground}
          onPress={() => onCloses()}>
          <View style={styles.modalstyle}>
            {firebase == 'undefined' && (
              <View state={styles.ContainerNot}>
                <Text style={styles.Notques}>No Milestone added</Text>
              </View>
            )}
            <FlatList
              data={firebase}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleprofilescreen(item.method)}
                    style={styles.Containerbox}>
                    <Text style={styles.headingtext}>{item.method}</Text>
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
export default ModalMethod;
