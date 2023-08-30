import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const createstyles = theme => {
  const styles = StyleSheet.create({
    modalstylebackground: {
      flex: 1,
      backgroundColor: theme.color.modelbackscreenColor,
      justifyContent: 'center',
    },
    modalstyle: {
      height: hp(90),
      backgroundColor: theme.color.modalBackground,
      borderRadius: theme.borders.radius3,
      width: wp(90),
      alignSelf: 'center',
    },
    Containerbox: {
      height: hp(7),
      borderColor: theme.color.inputtext,
      borderWidth: wp(0.5),
      marginTop: hp(2),
      justifyContent: 'center',
      width: wp(50),
      borderRadius: theme.borders.radius3,
    },
    Containerheading: {
      height: hp(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.color.borderColor,
      marginBottom: hp(2),
      paddingLeft: wp(10),
      paddingRight: wp(2),
      borderTopRightRadius: theme.borders.radius3,
      borderTopLeftRadius: theme.borders.radius3,
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

    Containertextmile: {
      width: wp(86),
      alignSelf: 'center',
      height: hp(80),
    },
    ContainerMAp: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputtext: {
      flex: 1,
      marginRight: wp(3),
      borderWidth: 1,
      borderRadius: theme.borders.radius2,
      marginTop: hp(2),
      borderColor: theme.color.modelbackscreenColor,
      color: theme.color.inputtext,
      fontWeight: theme.family.small,
    },
    MaincontainerBtn: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: hp(10),
      marginTop: hp(2),
     
    },
    containerBtn: {
      alignItems: 'center',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.borderColor,
      width: wp(40),

      height: hp(7),
      justifyContent: 'center',
    },
    btntext: {
      fontSize: theme.size.small,
      color: theme.color.buttonText,
      fontWeight: theme.family.medium,
    },

    Delicon: {
      marginLeft: wp(3),
      marginTop: hp(2),
      color:'red'
    },
    Containertotalamount: {
      borderWidth: wp(0.5),
      borderColor: theme.color.borderColor,
      marginTop: hp(1),
      width: wp(82),
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      justifyContent: 'center',
      height: hp(7),
      alignItems: 'center',
    },
    totalamount: {
      marginLeft: wp(2),
      color: theme.color.borderColor,
      fontSize: theme.size.medium,
      fontWeight: theme.family.large,
    },
    ContainerDate: {
      flex: 1,
      borderWidth: 1,
      borderColor: theme.color.modelbackscreenColor,
      borderRadius: theme.borders.radius2,
      marginTop: hp(2),
    },
    date: {
      padding: 6,
      color: theme.color.inputtext,
    },
  });
  return styles;
};
export default createstyles;
