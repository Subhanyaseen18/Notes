import {View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import Text from '../../../components/CustomText';

import createstyles from './style';
import {useThemeAwareObject} from '../../../theme/theme';
const StatusBilling = ({open, Close, Selectedstatus}) => {
  const styles = useThemeAwareObject(createstyles);

  const handlestatusscreen = item => {
   Selectedstatus(item);
    Close();
  };

  const data = [
    {
      id: 1,
      status: 'Pending',
    },
    {
      id: 2,
      status: 'Paid',
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
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => handlestatusscreen(item.status)}
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
export default StatusBilling;