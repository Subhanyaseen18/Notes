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
    Containerheading: {
      height: hp(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.color.borderColor,
      marginBottom: hp(2),
      paddingLeft: wp(3),
      paddingRight: wp(3),
    },

    heading: {
      alignSelf: 'center',
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
      color: theme.color.white,
    },
    backarrow: {
      marginTop: hp(1),
    },
    Containercode: {
      width: wp(90),
      alignSelf: 'center',
    },
    heading: {
      alignSelf: 'center',
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
      color: theme.color.white,
    },
    Bariconcolor: {
      color: theme.color.white,
    },

    codeFieldRoot: {
      marginTop: wp(3),
    },
    cell: {
      color: theme.color.inputtext,
      width: wp(12),
      height: wp(13),
      lineHeight: wp(11),
      fontSize: theme.size.medium,
      borderWidth: 2,
      borderColor: theme.color.borderColor,
      textAlign: 'center',
      borderRadius: 0,
    },
    focusCell: {
      borderColor: theme.color.input,
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
    chnagetext: {
      alignSelf: 'flex-end',
      marginRight: wp(5),
      textDecorationLine: 'underline',
      fontSize: theme.size.small,
      color: theme.color.inputtext,
      fontWeight: theme.family.medium,
      marginTop: hp(1),
    },
    headingnew: {
      fontSize: theme.size.small,
      color: theme.color.inputtext,
      fontWeight: theme.family.medium,
      marginLeft: wp(4),
      marginTop: wp(10),
    },
  });
  return styles;
};
export default createstyles;
