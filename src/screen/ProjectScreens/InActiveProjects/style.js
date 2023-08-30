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
    Containernotes: {
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),

      borderRadius: theme.borders.radius3,
    },

    MianContainerflat: {
      flexDirection: 'row',
      width: wp(90),

      alignSelf: 'center',
    },
    Containerflatlist: {
      marginTop: hp(2),
      width: wp(70),
      height: wp(23),
      borderRadius: theme.borders.radius3,
      justifyContent: 'space-evenly',
      backgroundColor:theme.color.boxbackcolor,
    },
    Containerflat: {
      marginTop: hp(-5),
    },
    ContainerDetail: {
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(27),
      height: wp(20),
      borderRadius: theme.borders.radius3,
    },
    flatname: {
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.medium,

      marginLeft: wp(5),
      marginTop: hp(1),
      maxWidth: wp(37),
    },
    flatDetail: {
      color: theme.color.borderColor,
      fontSize: theme.size.xSmall,
      fontWeight: theme.family.small,
      alignSelf: 'center',
      textDecorationLine: 'underline',
    },
    ContainerStatus: {
      marginRight: wp(2),
    },
    Statustext: {
      alignSelf: 'flex-end',
      borderRadius: theme.borders.radius3,
      padding: 7,
      fontSize: theme.size.xSmall,
    },
    Datetext: {
      alignSelf: 'flex-end',
      fontSize: theme.size.xSmall,
      marginRight: wp(2),
      color: theme.color.datetextcolor,
    },
  });
  return styles;
};
export default createstyles;
