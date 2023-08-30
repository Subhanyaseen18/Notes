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
      paddingRight: wp(10),
    },
    heading: {
      alignSelf: 'center',
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
      color: theme.color.white,
    },
    statustext: {
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(72),
      marginLeft: wp(3),
      marginTop: hp(1),
    },
    Containerheadingname: {
      marginLeft: wp(6),
      marginTop: hp(2),
    },
    inputtext: {
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(25),
      marginLeft: wp(3),
      marginTop: hp(-1),
    },
    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      color: theme.color.modaliconColor,
    },
    Bariconcolor: {
      color: theme.color.white,
    },
    MaincontainerBtn: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: hp(10),
      marginTop: hp(5),
    },
    containerBtn: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.borderColor,
      width: wp(90),
      height: hp(7),
      justifyContent: 'center',
    },
    btntext: {
      fontSize: theme.size.small,
      color: theme.color.buttonText,
      fontWeight: theme.family.medium,
    },
    ContainerDate: {
      marginTop: hp(0.8),
    },
    mileemptytext: {
      color: theme.color.error,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(72),
      marginLeft: wp(3),
      marginTop: hp(1),
    },
  });
  return styles;
};
export default createstyles;
