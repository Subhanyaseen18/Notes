import {View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import Text from '../components/CustomText';

import createstyles from './style';
import {useThemeAwareObject} from '../theme/theme';
const Modals = ({visible, onClose, ItemSelected}) => {
  const styles = useThemeAwareObject(createstyles);

  const handleprofilescreen = item => {
    ItemSelected(item);
    onClose();
  };

  const data = [
    {
      id: 1,
      status: 'Thinking',
    },
    {
      id: 2,
      status: 'Let_stalk',
    },
    {
      id: 3,
      status: 'Urgent',
    },
    {
      id: 4,
      status: 'Completed',
    },
  ];
  return (
    <View style={styles.Container}>
      <Modal transparent={true} visible={visible} onRequestClose={onClose}>
        <TouchableOpacity
          style={styles.modalstylebackground}
          onPress={() => onClose()}>
          <View style={styles.modalstyle}>
            <FlatList
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
export default Modals;
