import {View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';

import createstyles from './style';
import {useThemeAwareObject} from '../../../theme/theme';
const ModalType = ({open, Close, ItemSelect}) => {
  const styles = useThemeAwareObject(createstyles);

  const handleprofilescreen = item => {
    ItemSelect(item);
    Close();
  };

  const data = [
    {
      id: 1,
      status: 'Job',
    },
    {
      id: 2,
      status: 'Project',
    },
 
  ];
  return (
    <View style={styles.Container}>
      <Modal transparent={true} visible={open} onRequestClose={Close}>
        <TouchableOpacity
          style={styles.modalstylebackground}
          onPress={() => Close()}>
          <View style={styles.modalstyle}>
            <FlatList
             showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleprofilescreen(item.status)}
                    style={styles.Containerbox}>
                    <Text style={styles.headingtext}>{item.status}</Text>
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
export default ModalType;