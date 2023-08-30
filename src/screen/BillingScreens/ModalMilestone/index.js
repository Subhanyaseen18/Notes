import {View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../../components/CustomText';
import firestore from '@react-native-firebase/firestore';
import createstyles from './style';
import {useThemeAwareObject} from '../../../theme/theme';
import {useIsFocused} from '@react-navigation/native';
import ModalProjname from '../ModalProject';
import {useSelector} from 'react-redux';

const ModalMile = ({visibles, onCloses, ItemSelect}) => {
  const styles = useThemeAwareObject(createstyles);
  const {id} = useSelector(state => state.user);
  const [firebase, setfirebase] = useState([]);

 

  const focus = useIsFocused();
  const handleprofilescreen = item => {
    ItemSelect(item);
    onCloses();
  };

  const firebasedata = () => {
    firestore()
      .collection('projects')
      .doc(id)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          const dataObject = documentSnapshot.data().milestone;
          setfirebase(dataObject);
        }
      });
  };
  useEffect(() => {
    firebasedata();
  }, [id]);

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
             showsVerticalScrollIndicator={false}
              data={firebase}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleprofilescreen(item.milestone)}
                    style={styles.Containerbox}>
                    <Text style={styles.headingtext}>{item.milestone}</Text>
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
export default ModalMile;
