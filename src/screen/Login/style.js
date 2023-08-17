import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const createstyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },
    Containerlogo: {
      marginTop: hp(5),
    },
    logoimg: {
      height: wp(60),
      width: wp(60),
      borderRadius: 150,
      alignSelf: 'center',
      marginBottom: hp(2),
    },
    Containercode: {
      width: wp(90),
      alignSelf: 'center',
    },
    heading: {
      alignSelf: 'center',
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
      color: theme.color.borderColor,
    },

    codeFieldRoot: {
      marginTop: wp(7),
    },
    cell: {
      color: theme.color.inputtext,
      width: wp(12),
      height: wp(12),
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor:theme.color.borderColor,
      textAlign: 'center',
      borderRadius:150
    },
    focusCell: {
      borderColor:theme.color.input,
    },
    containerBtn: {
      marginTop: hp(15),
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.borderColor,
      width: wp(90),
      alignSelf: 'center',
      height: hp(7),
      justifyContent: 'center',
    },
    btntext: {
      fontSize: theme.size.small,
      color: theme.color.buttonText,
      fontWeight: theme.family.medium,
    },
  });
  return styles;
};
export default createstyles;
