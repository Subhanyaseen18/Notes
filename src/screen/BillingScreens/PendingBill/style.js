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
     height:hp(10),
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

      borderRadius: theme.borders.radius3,
    },

    notestext: {
      color: theme.color.borderColor,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
    }, MianContainerflat: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: hp(2),
      width: wp(90),
      height: wp(20),
      borderRadius: theme.borders.radius3,
    },
    Containerflat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp(80),
      alignSelf: 'center',
    }, flatname: {
      color: theme.color.inputtext,
      fontSize: theme.size.small,
      fontWeight: theme.family.xlarge,
      width: wp(85),
     },
  
  });
  return styles;
};
export default createstyles;
