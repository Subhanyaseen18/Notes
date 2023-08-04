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
    Containernotes: {
      alignSelf: 'center',
      width: wp(90),

      borderRadius: theme.borders.radius3,
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
      borderColor: Colours.lightblack,
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
      borderWidth: wp(0.3),
      borderColor: Colours.lightblack,
      flexDirection: 'row',
      width: wp(90),
      borderRadius: theme.borders.radius3,
      alignSelf: 'center',
      alignItems: 'center',
      height: hp(7),
      justifyContent: 'center',
    },
    statustext: {
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      width: wp(72),
      marginLeft: wp(3),
    },
    headingtext: {
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      marginLeft: wp(6),
      marginTop: hp(2),
      color: 'black',
      width: wp(90),
    },
    Bariconcolor: {
      color: theme.color.white,
    },
    MaincontainerBtn: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: hp(10),
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
  });
  return styles;
};
export default createstyles;
