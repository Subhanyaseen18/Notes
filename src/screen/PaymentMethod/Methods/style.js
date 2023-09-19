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
      paddingLeft: wp(4),
      paddingRight: wp(4),
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
    MianContainerflat: {
      paddingBottom: hp(12),
    },
    Containerflat: {
      justifyContent: 'center',
      height: wp(25),
      width: wp(92),
      marginBottom: hp(2),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.boxbackcolor,
      paddingLeft: wp(3),
      marginLeft: wp(4),
    },
    flatname: {
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.medium,
    },
    ContainerDel: {
      height: wp(25),
      width: wp(20),
      marginBottom: hp(2),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.logoutTextColor,
      marginLeft: wp(75),
      justifyContent: 'center',
    },
    Delicon: {
      alignSelf: 'center',
      color: theme.color.white,
    },
  });
  return styles;
};
export default createstyles;
