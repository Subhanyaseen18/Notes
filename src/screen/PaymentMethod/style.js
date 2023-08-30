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
      paddingRight: wp(8),
    },
    Bariconcolor: {
      color: theme.color.white,
    },

    heading: {
      alignSelf: 'center',
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
      color: theme.color.white,
    },

    Containeredit: {
      marginTop: hp(1),
      alignSelf: 'center',
      width: wp(90),
      flexDirection: 'row',
      borderWidth: wp(0.3),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.inputbackgroundcolor,
    },
    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: theme.color.modaltextColor,
      width: wp(90),
    },

    ContainerMainbtn: {
      marginTop: hp(8),
      justifyContent: 'flex-end',
    },
    containerBtn: {
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
    eror: {
      marginLeft: wp(6),
      fontSize: theme.size.xSmall,
      color: theme.color.error,
      width: wp(92),
      fontWeight: theme.family.medium,
    },
    Containertextinput: {
      alignSelf: 'center',
      width: wp(90),
      borderWidth: wp(0.3),
      height: hp(20),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.inputbackgroundcolor,
      marginTop: hp(1),
    },
    textinput: {
      alignSelf: 'center',
      width: wp(86),
      height: hp(20),
      padding: 10,
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
    },
  });
  return styles;
};
export default createstyles;
