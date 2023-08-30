import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const createstyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },

    modalstylebackground: {
      flex: 1,
      backgroundColor: theme.color.modelbackscreenColor,
      justifyContent: 'flex-end',
    },
    modalstyle: {
      height: hp(25),
      backgroundColor: theme.color.modalBackground,
      borderRadius: theme.borders.radius3,
      width: wp(100),
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
    },
    Containerbox: {
      height: hp(7),
      borderColor: theme.color.inputtext,
      borderWidth: wp(0.5),
      marginTop: hp(2),
      justifyContent: 'center',
      width: wp(50),
      alignSelf: 'center',
      borderRadius: theme.borders.radius3,
    },
    headingtext: {
        marginTop: hp(2),
        marginLeft: wp(6),
      fontSize: theme.size.small,
      color:  theme.color.simpletextcolor,
      fontWeight: theme.family.small,
    },
    heading: {
          fontSize: theme.size.large,
          color: theme.color.inputtext,
          fontWeight: theme.family.large,
        },
    Containerheading: {
      marginTop: hp(2),
      marginLeft: wp(6),
    },

    MaincontainerBtn: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      marginTop: hp(5),
    },
    containerBtn: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.borderColor,
      width: wp(40),

      height: hp(7),
      justifyContent: 'center',
    },
    containerBtnDel: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor:theme.color.logoutTextColor,
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
