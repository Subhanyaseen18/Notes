import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const createstyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },

    modalstylebackground: {
      flex: 1,
      backgroundColor: theme.color.modelbackscreenColor,
      justifyContent: 'center',
    },
    modalstyle: {
      flex: 0.8,

      backgroundColor: theme.color.modalBackground,
      borderRadius: theme.borders.radius3,
      width: wp(90),
      alignSelf: 'center',
      justifyContent: 'space-evenly',
    },
    Containerbox: {
      height: hp(7),
      borderColor: theme.color.inputtext,
      borderWidth: wp(0.5),
      marginTop: hp(2),
      justifyContent: 'center',
      width: wp(80),
      alignSelf: 'center',
      borderRadius: theme.borders.radius3,
    },
    headingtext: {
      alignSelf: 'center',
      fontSize: theme.size.small,
      color: theme.color.inputtext,
      fontWeight: theme.family.large,
    },
  });
  return styles;
};
export default createstyles;
