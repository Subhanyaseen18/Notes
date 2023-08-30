import {View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import Text from '../components/CustomText';

import createstyles from './style';
import {useThemeAwareObject} from '../theme/theme';
const DelModal = ({visible, onClose, ItemSelected}) => {
  const styles = useThemeAwareObject(createstyles);

  return (
    <View style={styles.Container}>
      <Modal transparent={true} visible={visible} onRequestClose={onClose}>
        <View style={styles.modalstylebackground}>
          <View style={styles.modalstyle}>
            <View style={styles.Container}>
              <View style={styles.Containerheading}>
                <Text style={styles.heading}>Delete Confirmation</Text>
              </View>
              <Text style={styles.headingtext}>
                Are you sure you want to delete?
              </Text>
              <View style={styles.MaincontainerBtn}>
                <TouchableOpacity onPress={() => onClose()}>
                  <View style={styles.containerBtn}>
                    <Text style={styles.btntext}>No</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ItemSelected}>
                  <View style={styles.containerBtnDel}>
                    <Text style={styles.btntext}>Yes</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default DelModal;
