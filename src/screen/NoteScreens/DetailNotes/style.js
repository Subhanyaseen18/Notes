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
      paddingRight: wp(5),
    },

    heading: {
      alignSelf: 'center',
      fontSize: theme.size.xlarge,
      fontWeight: theme.family.xlarge,
      color: theme.color.white,
    },
    Containernotes: {
      alignSelf: 'center',
      width: wp(90),
      borderRadius: theme.borders.radius3,
    },

    notestext: {
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(90),
      marginLeft: wp(3),
    },
    editnotetext: {
      borderRadius: theme.borders.radius3,
      borderWidth: wp(0.3),

      color: theme.color.simpletextcolor,
      fontWeight: theme.family.small,
      fontSize: theme.size.small,
      paddingLeft: wp(3),
    },
    ContainerStatus: {
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),
    },
    ContainerStatusedit: {
      borderWidth: wp(0.3),
      borderColor: theme.color.modelbackscreenColor,
      flexDirection: 'row',
      width: wp(90),
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      alignItems: 'center',
      height: hp(7),
      justifyContent: 'center',
    },
    statustext: {
      color: theme.color.simpletextcolor,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
      width: wp(74),
      marginLeft: wp(3),
    },
    icon: {
      color: theme.color.modaliconColor,
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
    ScrollView: {
      marginBottom: hp(9),
    },
    MaincontainerBtn: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      marginBottom: hp(5),
    },
    containerBtn: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.borderColor,
      width: wp(40),

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
    containerBtnDel: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.logoutTextColor,
      width: wp(40),

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
