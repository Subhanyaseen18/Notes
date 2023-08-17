import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colours} from '../../components/Colors';
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

    Containeredit: {
      marginTop: hp(1),
      alignSelf: 'center',
      width: wp(90),
      flexDirection: 'row',
      borderWidth: wp(0.3),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.modelbackscreenColor,
    },
    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: 'black',
      width: wp(90),
    },
    textinput: {
      height: hp(20),
      marginLeft: wp(2),
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.small,
    },
    ContainerMainbtn: {
      marginTop: hp(8),
      justifyContent: 'flex-end',
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
    }, eror: {
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
