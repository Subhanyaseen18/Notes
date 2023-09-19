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
      paddingLeft: wp(5),
      paddingRight: wp(8),
    },
    Bariconcolor: {
      color: theme.color.white,
      marginLeft: wp(5),
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
    Containernotes: {
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),

      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.inputbackgroundcolor,
    },

    notestext: {
      color:  theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.medium,
      width: wp(74),
      marginLeft: wp(3),
    },
    Bariconcolor: {
      color: theme.color.white,
    },
    MaincontainerBtn: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: hp(3),
      marginBottom: hp(5),
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
    Containertextinput: {
      alignSelf: 'center',
      width: wp(90),
      borderWidth: wp(0.3),
      alignItems: 'center',
      justifyContent: 'center',
      height: hp(7),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.inputbackgroundcolor,
    },
    textinput: {
      alignSelf: 'center',
      width: wp(86),
      height: hp(8),
      paddingLeft: 10,
      color:  theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.medium,
    },
    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: theme.color.modaliconColor,
      marginBottom: hp(0.5),
    },
    ContainerStatus: {
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),
    },
    ContainerStatusedit: {
      flexDirection: 'row',
      width: wp(90),
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      alignItems: 'center',
      height: hp(7),
      justifyContent: 'center',
      backgroundColor: theme.color.inputbackgroundcolor,
    },
    ContainerDate: {
      flexDirection: 'row',
      width: wp(90),
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      alignItems: 'center',
      height: hp(7),
      justifyContent: 'center',
      backgroundColor: theme.color.inputbackgroundcolor,
    },
    Datetext: {
      width: wp(76),
      paddingLeft: 10,
      color:  theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
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
