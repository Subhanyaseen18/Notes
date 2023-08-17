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
      justifyContent: 'center',
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
    Containernotes: {
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),
      // height: hp(10),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.modelbackscreenColor,
    },

    notestext: {
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      width: wp(72),
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
      width: wp(40),
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
      flexDirection: 'row',

      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.modelbackscreenColor,
    },
    textinput: {
      alignSelf: 'center',
      width: wp(76),

      padding: 10,
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
    },
    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: 'black',
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
      height: hp(6),
      justifyContent: 'center',
      backgroundColor: theme.color.modelbackscreenColor,
    },
    ContainerDate: {
      alignSelf: 'center',
      width: wp(90),
      height: hp(6),
      flexDirection: 'row',
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.modelbackscreenColor,
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
