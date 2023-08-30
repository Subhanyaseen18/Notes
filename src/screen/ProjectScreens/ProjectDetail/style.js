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
    Containernotes: {
      alignSelf: 'center',
      width: wp(90),

      borderRadius: theme.borders.radius3,
    },
    icon: {
      color: theme.color.modaliconColor,
    },

    notestext: {
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      width: wp(90),
      marginLeft: wp(3),
    },
    editnotetext: {
      backgroundColor: theme.color.backgroundinput,
      borderRadius: theme.borders.radius3,
      borderWidth: wp(0.3),
      borderColor: theme.color.BorderColor,
      color: theme.color.inputtext,
      fontWeight: theme.family.medium,
      fontSize: theme.size.small,
      paddingLeft: wp(3),
    },
    ContainerStatus: {
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),
    },
    ContainerStatusedit: {
      marginTop: hp(1),
      borderWidth: wp(0.3),
      borderColor: theme.color.modelbackscreenColor,
      flexDirection: 'row',
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      alignItems: 'center',
      height: hp(7),
      justifyContent: 'center',
    },
    Containertextinput: {
      alignSelf: 'center',
      flexDirection: 'row',
      width: wp(90),
    },
    Containeredit: {
      borderWidth: wp(0.3),
      borderColor: theme.color.modelbackscreenColor,
      marginTop: hp(1),
      width: wp(90),
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      flexDirection: 'row',
      height: hp(7),
      alignItems: 'center',
    },
    Containertextmile: {
      width: wp(90),
      alignSelf: 'center',
      flexDirection: 'row',
    },
    statustext: {
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(75),
      marginLeft: wp(3),
    },
    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: theme.color.modaliconColor,
      width: wp(90),
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
      width: wp(40),
      marginTop: hp(2),
      height: hp(7),
      justifyContent: 'center',
    },
    containerBtnEdit: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.borderColor,
      width: wp(90),

      height: hp(7),
      justifyContent: 'center',
    },
    containerBtnDEl: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.logoutTextColor,
      width: wp(40),
      marginTop: hp(2),
      height: hp(7),
      justifyContent: 'center',
    },
    btntext: {
      fontSize: theme.size.small,
      color: theme.color.buttonText,
      fontWeight: theme.family.medium,
    },
    ContainerDate: {
      marginTop: hp(1.5),
      flexDirection: 'row',
      alignSelf: 'center',
      width: wp(90),
      marginBottom: hp(1),
    },
    textinput: {
      width: wp(85),
      marginLeft: wp(2),
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      alignSelf: 'center',
      marginTop: hp(1),
    },
    textinputEditicon: {
      paddingLeft: wp(3),
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(68),
      borderWidth: 1,
      borderRadius: theme.borders.radius3,
      borderColor: theme.color.modelbackscreenColor,
      marginTop: hp(1),
    },
    textinputicon: {
      marginLeft: wp(2),

      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(30),
      marginTop: hp(1),
    },
    plusicon: {
      marginLeft: wp(2),
      marginTop: hp(2),
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
