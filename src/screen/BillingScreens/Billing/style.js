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
    icon: {
      color: theme.color.modaliconColor,
    },

    heading: {
      alignSelf: 'center',
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
      color: theme.color.white,
    },

    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: theme.color.modaliconColor,
      marginBottom: hp(0.5),
    },
    ContainerProject: {
      flexDirection: 'row',
      width: wp(90),
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      alignItems: 'center',
      height: hp(7),
      justifyContent: 'center',
      backgroundColor: theme.color.inputbackgroundcolor,
      borderWidth: wp(0.3),
      borderColor: theme.color.inputbackgroundcolor,
    },
    statustext: {
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      width: wp(74),
      marginLeft: wp(3),
    },
    methodtext: {
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      width: wp(85),
      marginLeft: wp(3),
    },
    textinput: {
      alignSelf: 'center',
      width: wp(87),

      padding: 10,
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
    },
    MaincontainerBtn: {
      height: hp(10),
      marginTop: hp(5),
    },
    containerBtn: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.borderColor,
      width: wp(90),
      alignSelf: 'baseline',
      height: hp(7),
      alignSelf: 'center',
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
  });
  return styles;
};
export default createstyles;
