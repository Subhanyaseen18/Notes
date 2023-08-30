import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const createstyles = theme => {
  const styles = StyleSheet.create({
    ContainerAdd: {
      top: -16,
      elevation: 5,
      position: 'absolute',
    },
  });
  return styles;
};
export default createstyles;
