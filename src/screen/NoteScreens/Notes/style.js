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
    MianContainerflat: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),
      height: wp(25),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.boxbackcolor,
    },
    Containerflat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp(80),
      alignSelf: 'center',
      marginTop: hp(-2.5),
    },
    flatname: {
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.medium,
      width: wp(65),
      height: hp(9),
      marginBottom: hp(1),
    },
    ContainerStatus: {
      marginRight: wp(2),
      marginTop: hp(1),
    },
    Statustext: {
      alignSelf: 'flex-end',
      borderRadius: theme.borders.radius3,
      padding: 7,
      fontSize: theme.size.xSmall,
    },
  });
  return styles;
};
export default createstyles;
